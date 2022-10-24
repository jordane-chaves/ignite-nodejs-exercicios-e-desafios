const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

function checksExistsRepositoryById(request, response, next) {
  const { id } = request.params;

  const repository = repositories.find(repository => repository.id === id);

  if (!repository) {
    return response.status(404).json({ error: 'Repository not found!' });
  }

  request.repository = repository;

  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", checksExistsRepositoryById, (request, response) => {
  const { repository } = request;
  const { title, url, techs } = request.body;

  if (title && title !== '') {
    repository.title = title;
  }
  
  if (url && url !== '') {
    repository.url = url;
  }

  if (techs && techs.length !== 0) {
    repository.techs = techs;
  }

  return response.json(repository);
});

app.delete("/repositories/:id", checksExistsRepositoryById, (request, response) => {
  const { id } = request.headers;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", checksExistsRepositoryById, (request, response) => {
  const { repository } = request;

  repository.likes += 1;

  return response.json(repository);
});

module.exports = app;
