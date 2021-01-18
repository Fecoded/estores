const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const connectDb = require("./config/db");

const app = express();
// Load Config
dotenv.config({ path: "./config/.env" });

// Connect DB
connectDb();

// Passport Config
require("./config/passport")(passport);

// Session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Parse Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const auth = require("./routes/auth");
const user = require("./routes/user");
const category = require("./routes/category");
const product = require("./routes/product");
const order = require("./routes/order");

// Register Routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/category", category);
app.use("/api/v1/product", product);
app.use("/api/v1/order", order);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server started on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
