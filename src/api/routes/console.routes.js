const upload = require("../../middlewares/files.middleware");
const {createMovie, updateMovieById} = require("../controllers/movie.controller");
const MovieRoutes = require("express").Router();

MovieRoutes.post("/", upload.single("img"), createMovie);
MovieRoutes.patch("/:id", [isAuth], upload.single("img"), updateMovieById);
