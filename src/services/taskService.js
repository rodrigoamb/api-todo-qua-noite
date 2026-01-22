import * as taskRepository from "../repositories/taskRepository.js"

export async function getAllTasks (userId) {
  return await taskRepository.getAllTasks(userId);
}
export async function getTaskById (userId, taskId) {
  const task = await taskRepository.getTaskById(userId, taskId)

  if (!task) {
    throw {status: 404, message: "task não encontrada"}
  }

  return task;
}
export async function createTask(userId, title, description) {
  return await taskRepository.createTask({
    userId,
    title,
    description: description || null
  })
}

export async function updateTask (userId, taskId, updateTask) {
  const task = await taskRepository.getTaskById(userId, taskId)

  if (!task) {
    throw { status: 404, message: "task não encontrada" }
  }
  let dataToUpdate = {}
  if (updateTask.title !== undefined) dataToUpdate.title = updateTask.title
  if (updateTask.description !== undefined) dataToUpdate.description = updateTask.description
  if (updateTask.completed !== undefined) dataToUpdate.completed = updateTask.completed
  return await taskRepository.updateTask(userId, taskId, dataToUpdate)
}
export async function deleteTask (userId, taskId) {
  const task = await taskRepository.getTaskById(userId, taskId)

  if (!task) {
    throw { status: 404, message: "task não encontrada" }
  }
  await taskRepository.deleteTask(userId, taskId)
  return {message: "Task deletada com sucesso"}
}