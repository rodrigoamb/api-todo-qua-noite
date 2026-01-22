import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js"

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN;

export async function register(name, email, password) {
  const existUser = await userRepository.findByEmail(email);

  if (existUser) {
    throw { status: 403, message: "Usuário já existe" };
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.create({
    name,
    email,
    password: hashPassword,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

export async function login(email, password) {
  const existUser = await userRepository.findByEmail(email);

  if (!existUser) {
    throw { status: 401, message: "Usuário não encontrado" };
  }

  const validPassword = await bcrypt.compare(password, existUser.password);

  if (!validPassword) {
    throw { status: 401, message: "Senha incorreta" };
  }

  const token = jwt.sign(
    { id: existUser.id, name: existUser.name, email: existUser.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE_IN }
  );

  return {
    token,
    user: {
      id: existUser.id,
      name: existUser.name,
      email: existUser.email,
    },
  };
}
