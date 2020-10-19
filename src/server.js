//faz a requisição da dependência express, que retorna uma função
const express = require("express");

//dependência usada para criar chamadas de path independente de sist operacional
const path = require("path");

//
const pages = require("./pages.js");

//ao executar essa função, inicia a biblioteca express, ela retorna o servidor
const server = express();

server
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  //declarando ao server que serão utilizados arquivos estáticos em public
  .use(express.static("public"))
  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criar rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//sobe o servidor fazendo ele escutar a porta 5500
server.listen(5500);
