import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const withDataValidation = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.sendStatus(400).json({ error: error.message });
    }
    next();
  }
}

export const withQueryValidation = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.sendStatus(400).json({ error: error.message });
    }
    next();
  }
}

export const withParamsValidation = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params);
    if (error) {
      return res.sendStatus(400).json({ error: error.message });
    }
    next();
  }
}
