import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/SJN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use("/api/uploads", uploadRouter);
app.use("/api/users/", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads")));
app.get("/", function (req, res) {
  res.send("server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;

app.listen(port, function (err) {
  if (err) {
    console.log("err in listening");
  } else {
    console.log("Success in listening port >>" + port);
    console.log("To exit ctrl+C");
  }
});
