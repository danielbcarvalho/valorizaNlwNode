import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload extends Request {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
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
  console.log("🚀 ~ file: ensureAuthenticated.ts ~ line 20 ~ token", token);

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
