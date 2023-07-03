import { Request, Response, NextFunction } from "express";
import { ENVS } from "../main/constants";

const API_KEY = ENVS.API_KEY;

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const apiKey = req.headers["api-key"];

  if (apiKey === API_KEY) {
    return next();
  }

  return res
    .status(401)
    .json({ error: "Unauthorized. Please inform a valid api-key." });
}
