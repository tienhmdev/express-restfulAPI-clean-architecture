import { NextFunction, Request, Response } from "express";
interface BodyContext {
  userId?: string;
  role?: string;
}

export interface AppRequest<B = any, P = any, Q = any> extends Request {
  body?: B & BodyContext;
  params?: P;
  query?: Q;
}

export interface AppResponse<T = any> extends Response {
  json?: T;
}

export interface AppNextFunction extends NextFunction {}
