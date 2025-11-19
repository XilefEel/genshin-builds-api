import express from "express";
import {
  createCharacter,
  deleteCharacter,
  getAllCharacters,
  getSingleCharacter,
  updateCharacter,
} from "../controllers/characters.js";

const router = express.Router();

router
  .route("/")

  // get all characters
  .get(getAllCharacters)

  // create a new guide
  .post(createCharacter);

router
  .route("/:id")

  // get single character
  .get(getSingleCharacter)

  // update character
  .put(updateCharacter)

  // delete character
  .delete(deleteCharacter);

export default router;
