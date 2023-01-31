import { checkError, client } from './client';

export async function getTasks() {
  // fetch a list of tasks based on current user/user_id
  const response = await client.from('todos').select();
  return checkError(response);
}
