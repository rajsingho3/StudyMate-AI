import jwt, { Secret, SignOptions } from "jsonwebtoken"

const JWT_SECRET: Secret = process.env.JWT_SECRET as string

const signOptions: SignOptions = {
  expiresIn: "7d",
}

export function signJwt(payload: object) {
  return jwt.sign(payload, JWT_SECRET, signOptions)
}
