import app from "./app.js";

const PORT = process.env.PORT || 8800;

const server = app.listen(PORT, () => {
  console.log(`Test`);
  console.log(`Dev Server test running on port: ${PORT}`);
});

export default server;
