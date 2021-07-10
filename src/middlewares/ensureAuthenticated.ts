import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { RequestCustom } from "../@types";

interface IPayload extends Request {
  sub: string
}

export function ensureAuthenticated(
  request: RequestCustom,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token está preenchido
  if (!authToken) {
    // retorna o status 401 com a mensagem padrão 'Unauthorized'
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  // Validação do token
  try {
    const { sub } = verify(token, "testeHashNLW") as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário

}
