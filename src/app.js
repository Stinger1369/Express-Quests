const express = require("express");
const app = express();



const movieControllers = require("./controllers/movieControllers");
const usersRouter = require('./routes/usersRoutes');

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.use(usersRouter);

module.exports = app;
