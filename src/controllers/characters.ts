import characterBuilds from "../data/characters.js";
import { NextFunction, Request, Response } from "express";
import {
  CharacterGuide,
  NewCharacterGuide,
  UpdateCharacterGuide,
  CharacterQueryParams,
} from "../models/types.js";
import { CustomError } from "../middleware/error.js";

export const getAllCharacters = (
  req: Request<{}, {}, {}, CharacterQueryParams>,
  res: Response
) => {
  let results: CharacterGuide[] = characterBuilds;

  if (req.query.element) {
    results = results.filter((c) => c.summary?.element === req.query.element);
  }

  if (req.query.weapon) {
    results = results.filter((c) => c.summary?.weapon === req.query.weapon);
  }

  if (req.query.role) {
    results = results.filter((c) => c.summary?.role === req.query.role);
  }

  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    results = results.filter((c) => c.name.toLowerCase().includes(search));
  }

  if (req.query.sort) {
    const sort = req.query.sort.toLowerCase();
    if (sort === "name") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "-name") {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  if (req.query.limit) {
    const limit = Number(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
      results = results.slice(0, limit);
    }
  }

  res.status(200).json(results);
};

export const createCharacter = (
  req: Request<{}, {}, NewCharacterGuide>,
  res: Response
) => {
  const newBuild: CharacterGuide = {
    id: characterBuilds.length + 1,
    ...req.body,
  };

  if (
    !newBuild.name ||
    !newBuild.bestWeapons ||
    !newBuild.bestArtifacts ||
    !newBuild.talentPriority ||
    !newBuild.bestConstellations ||
    !newBuild.bestTeams
  ) {
    return res.status(400).json({
      message: "Character must have a name",
    });
  }

  characterBuilds.push(newBuild);
  res.status(201).json(newBuild);
};

export const getSingleCharacter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    const err = new CustomError(404, "Bad request. Invalid id");
    return next(err);
  }

  const character = characterBuilds.find((c) => c.id === id);
  if (!character) {
    const err = new CustomError(404, `Character with id of ${id} not found`);
    return next(err);
  }
  res.status(200).json(character);
};

export const updateCharacter = (
  req: Request<{ id: string }, {}, UpdateCharacterGuide>,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    const err = new CustomError(404, "Bad request. Invalid id");
    return next(err);
  }

  const index = characterBuilds.findIndex((c) => c.id === id);
  if (index === -1) {
    const err = new CustomError(404, `Character with id of ${id} not found`);
    return next(err);
  }

  characterBuilds[index] = {
    ...characterBuilds[index],
    ...req.body,
  };

  res.status(200).json(characterBuilds[index]);
};

export const deleteCharacter = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    const err = new CustomError(404, "Bad request. Invalid id");
    return next(err);
  }

  const index = characterBuilds.findIndex((c) => c.id === id);
  if (index === -1) {
    const err = new CustomError(404, `Character with id of ${id} not found`);
    return next(err);
  }

  characterBuilds.splice(index, 1);

  res.status(204).send({});
};
