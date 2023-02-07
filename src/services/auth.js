import { client } from './client';

// get current user from supabase client
export function getUser() {
  return client.auth.currentUser;
}

export async function authUser(email, password, type) {
  let response;
  // check the url param following auth/ and tell the client what to do with the email/password
  if (type === 'sign-up') {
    response = await client.auth.signUp({ email, password });
  } else {
    response = await client.auth.signIn({ email, password });
  }
  if (response.error) {
    throw response.error;
  }
  // return the signed in user
  return response.user;
}

export async function signOut() {
  await client.auth.signOut();
}
