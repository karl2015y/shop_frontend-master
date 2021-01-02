import request from '@/utils/request';

export function login(email, password) {
  return request({
    url: `/user/login`,
    method: 'post',
    data: {
      email,
      password
    }
  });
}

export function register(data) {
  return request({
    url: `/user/register`,
    method: 'post',
    data: {
      email:data.email,
      password:data.password,
      name:data.name
    }
  });
}

// 以下管理員專用 
export function getInfo() {
  return request({
    url: '/user/getuser',
    method: 'get',
  });
}