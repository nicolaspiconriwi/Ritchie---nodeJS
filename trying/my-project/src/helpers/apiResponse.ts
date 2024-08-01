import { Response } from "express";

export interface IApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface IErrorApiResponse {
  status: number;
  message: string;
  metaData: {
    timestamp: Date;
  };
}

export const apiResponse = <T>(
  res: Response,
  data: T,
  message: string = "Operation successful",
  status: number = 200
): Response => {
  const response: IApiResponse<T> = { data, status, message };
  return res.status(status).json(response);
};

export const errorApiResponse = (
  res: Response,
  error: any,
  status: number = 500
): Response => {
  const response: IErrorApiResponse = {
    message: error.message,
    status,
    metaData: { timestamp: new Date() },
  };
  return res.status(status).json(response);
};
