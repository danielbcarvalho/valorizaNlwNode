// declare namespace Express {
//   export interface Request {
//     user_id?: string
//   }
// }

import { Request } from "express";

export interface RequestCustom extends Request {
  user_id: string
}