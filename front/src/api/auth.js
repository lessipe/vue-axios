import http from '@/api/http';
import store from '@/store';

export async function login(userid, password) {
  const response = await http.post('/login', {
    userid,
    password
  });

  if (response.status === 200) {
    store.commit('auth/setToken', response.data.token);
  }

  return response;
}