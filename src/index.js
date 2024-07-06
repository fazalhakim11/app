const path = require("path");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const authRouter = require("./routes/auth.root")
const bookRouter = require("./routes/book.root")
const orderRouter = require("./routes/order.root")

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/books", bookRouter)
app.use("/api/orders", orderRouter)

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});