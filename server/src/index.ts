import express from "express";
import cors from "cors";
import searchRoute from "./routes/search";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/search", searchRoute);

app.listen(5000, () => {
  console.log("Parch AI Agent running on port 5000");
});
