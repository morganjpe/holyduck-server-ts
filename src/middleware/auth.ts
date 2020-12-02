import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: string | object;
}

const jwtAuthorisationMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token");

  if (!token) return res.status(401).send({ error: "Access Denied" });
  const decoded = jwt.verify(token, String(process.env.JWT));
  req.user = decoded;
  next();
  try {
  } catch (error) {
    console.error(error.message);
  }
};
