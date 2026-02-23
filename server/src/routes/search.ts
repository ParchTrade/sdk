import { Router } from "express";
import { runAgent } from "../services/agent";

const router = Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  const results = await runAgent(query);

  res.json(results);
});

export default router;
