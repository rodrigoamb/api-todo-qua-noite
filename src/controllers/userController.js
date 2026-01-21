import * as authService from "../services/authService.js";

export async function getUser(req, res) {
  const userId = req.user.id;

  try {
    const user = await authService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao carregar o usuário", error });
  }
}
