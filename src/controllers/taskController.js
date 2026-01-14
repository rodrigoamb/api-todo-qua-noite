export async function getAlltasks(req, res) {
  //captura o userId do req que o middleware definiu
  const userId = req.user.id;

  try {
    const tasks = await taskService.getAllTasks(userId);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar as tarefas", error });
  }
}

export async function getTaskById(req, res) {
  const userId = req.user.id;
  const taskId = req.params.id;

  try {
    const task = await taskService.getTaskById(userId, taskId);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar a tarefa pelo id", error });
  }
}

export async function createTask(req, res) {
  const userId = req.user.id;
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "O título é obrigatório" });
  }

  try {
    const task = await taskService.createTask(userId, title, description);

    res.status(201).json({ message: "Tarefa criado com sucesso", task });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar a tarefa", error });
  }
}

export async function updateTask(req, res) {
  const userId = req.user.id;
  const taskId = req.params.id;
  const { title, description, completed } = req.body;

  try {
    const task = await taskService.updateTask(userId, taskId, {
      title,
      description,
      completed,
    });

    res.status(200).json({ message: "Tarefa editada com sucesso", task });
  } catch (error) {
    res.status(500).json({ message: "Erro ao editar a tarefa", error });
  }
}

export async function deteleTask(req, res) {
  const userId = req.user.id;
  const taskId = req.params.id;

  try {
    const task = await taskService.deleteTask(userId, taskId);

    res.status(200).json({ message: "Task deletado com sucesso." }, task);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar a tarefa", error });
  }
}
