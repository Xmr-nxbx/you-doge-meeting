import { HttpCode, RType, mockSuccessWrapper, mockFailWrapper } from '@/mock/index';
import Mock from 'mockjs';

mockSuccessWrapper("/resource", RType.GET, () => {
  const res = Mock.mock({
    "list|10": [
      {
        "id|+1": 1,
        name: "@cname",
        "age|18-60": 1,
        birthday: "@date",
        city: "@city",
        email: "@email",
      },
    ],
    code: HttpCode.SUCCESS,
    message: "请求成功",
  });
  return res;
});

mockFailWrapper("/resource", RType.POST, () => {
  return {
    msg:'错啦'
  }
}, HttpCode.SERVER_ERROR, "服务器错误");