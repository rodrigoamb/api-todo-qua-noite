import Task from "../models/taskModel";


export async function getAllTasks(userId) {
  return await Task.findAll({
    where: {userId: userId},
    order: [[ 'createdAt', 'DESC']]
  })   
}
export async function getTaskById(userId, taskId) {
  return await Task.findOne({
    where: {userId: userId, taskId: taskId}
  })
}
export async function createTask(dataTask) {
  return await Task.create(dataTask)
}
export async function updateTask(userId, taskId, data) {
  return await Task.update({
    where: {userId: userId, taskId: taskId},
    data
  })
}
export async function deleteTask(userId, taskId) {
  return await Task.destroy({
    where: { userId: userId, taskId: taskId }
  })
}