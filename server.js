const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json"); // Caminho para o seu ficheiro data.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está a correr na porta ${PORT}`);
});
