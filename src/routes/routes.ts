import express, { NextFunction, Request, Response } from "express";
import characterBuilds from "../data/characters.js";
import {
  CharacterGuide,
  NewCharacterGuide,
  UpdateCharacterGuide,
} from "../models/types.js";
import { CustomError } from "../middleware/error.js";

const router = express.Router();

router
  .route("/")

  // get all characters
  .get((req: Request, res: Response) => {
    const limit = Number(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(characterBuilds.slice(0, limit));
    }
    res.status(200).json(characterBuilds);
  })

  // create a new guide
  .post((req: Request<{}, {}, NewCharacterGuide>, res: Response) => {
    const newBuild: CharacterGuide = {
      id: characterBuilds.length + 1,
      ...req.body,
    };

    if (!newBuild.name) {
      return res.status(400).json({
        message: "Character must have a name",
      });
    }

    characterBuilds.push(newBuild);
    res.status(201).json(newBuild);
  });

router
  .route("/:id")

  // get single character
  .get((req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const character = characterBuilds.find((c) => c.id === id);

    if (!character) {
      const err = new CustomError(404, `Character with id of ${id} not found`);
      return next(err);
    }
    res.status(200).json(character);
  })

  // update character
  .put(
    (
      req: Request<{ id: string }, {}, UpdateCharacterGuide>,
      res: Response,
      next: NextFunction
    ) => {
      const id = Number(req.params.id);
      const index = characterBuilds.findIndex((c) => c.id === id);

      if (index === -1) {
        const err = new CustomError(
          404,
          `Character with id of ${id} not found`
        );
        return next(err);
      }

      characterBuilds[index] = {
        ...characterBuilds[index],
        ...req.body,
      };

      res.status(200).json(characterBuilds[index]);
    }
  )

  // delete character
  .delete((req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const index = characterBuilds.findIndex((c) => c.id === id);

    if (index === -1) {
      const err = new CustomError(404, `Character with id of ${id} not found`);
      return next(err);
    }

    characterBuilds.splice(index, 1);

    res.status(204).send({});
  });

export default router;
