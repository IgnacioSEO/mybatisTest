const { createApp } = require("./app");
// const { appDataSource } = require("./src/models/dataSource");
const { connection } = require("./src/models/db");
const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  await connection
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error occurred during Data Source initialization", err);
      database.destroy();
    });

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
