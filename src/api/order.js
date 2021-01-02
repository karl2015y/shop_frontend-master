import request from "@/utils/request";

//＝＝＝User＝＝＝


// 新增訂單
export function createOrders(data) {
  return request({
    url: `/user/order`,
    method: "post",
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address
    }
  });
}


//＝＝＝管理員＝＝＝

// 取得訂單
export function getOrder(currentPage = 1) {
  return request({
    url: `/admin/order?page=${currentPage}`,
    method: "get"
  });
}

// 付款訂單
export function payOrder(data) {
  return request({
    url: `/admin/order/pay`,
    method: "post",
    data: {
      ooid: data.ooid
    }
  });
}