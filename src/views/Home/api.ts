import request from '@/utils/axios';

export function getResource() {
  return request.get('/resource');
}

export function postResource(data: any) {
  return request.post('/resource', data);
}