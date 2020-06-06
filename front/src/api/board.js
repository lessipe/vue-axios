import http from './http';

export async function store(title, content) {
  return http.post('/board', {
    title,
    content
  });
}