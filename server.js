const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const color = require("colors");
const bootcampRoutes = require("./routes/bootcamps");
const connectDB = require("./utils/db");

const app = express();
//connection to mongodb
connectDB();

//body parser
app.use(express.json());

//mapping config.env
dotenv.config({ path: `${__dirname}/config/config.env` });
const PORT = process.env.PORT || 3000;

//morgan logger in dev
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

//adding routes
app.use("/api/v1/bootcamps", bootcampRoutes);

const server = app.listen(PORT, () => {
  console.log(`DevCamper server started at ${PORT} in ${process.env.NODE_ENV}`.yellow.bold);
});

//handle unhandled rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error${err}`.red);
  server.close(()=>{
    process.exit(1);
  });
});
