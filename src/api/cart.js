import request from "@/utils/request";

// 取得購物車
export function getCarts() {
  return request({
    url: `/user/cart`,
    method: "get"
  });
}

// 刪除單項購物車產品
export function deleteCarts(data) {
  return request({
    url: `/user/cart`,
    method: "delete",
    data: {
      ppid: data.ppid
    }
  });
}

// 新增單項購物車產品
export function addCarts(data) {
  return request({
    url: `/user/cart`,
    method: "post",
    data: {
      ppid: data.ppid
    }
  });
}

// 更新單項購物車產品
export function updateCarts(data) {
  return request({
    url: `/user/cart`,
    method: "put",
    data: {
      ppid: data.ppid,
      count: data.count
    }
  });
}