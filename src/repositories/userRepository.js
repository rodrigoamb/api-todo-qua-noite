import User from "../models/userModel.js";


export async function findByEmail(email) {
  return await User.findOne({
    where: {email: email}
  })
}

export async function create(userData) {
  return await User.create(userData)
}