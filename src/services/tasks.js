import { checkError, client } from './client';

export async function getTasks() {
  // fetch a list of tasks based on current user/user_id
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function createTask(description) {
  // if input is blank don't insert
  if (!description) return;
  // insert a task into the current users list
  const response = await client.from('todos').insert([{ description }]).single();
  return checkError(response);
}

export async function toggleTaskCompleted({ id, complete }) {
  const response = await client
    .from('todos')
    .update({ complete: !complete })
    .match({ id })
    .single();
  return checkError(response);
}
