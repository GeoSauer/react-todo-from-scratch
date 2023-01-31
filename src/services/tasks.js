import { checkError, client } from './client';

export async function getTasks() {
  // fetch a list of tasks based on current user/user_id
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createTask(description) {
  // insert a task into the current users list
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}
