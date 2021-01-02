<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>ago</th>
          <th>模擬支付</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in sortOrder"
          :key="key"
          :class="{ 'text-secondary': !item.status === 'true' }"
        >
          <td>{{ item.cr_at }}</td>
          <td><span v-text="item.email" v-if="item.email"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.name }} 數量：{{ product.count }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td class="text-right">{{ item.cr_at }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="openModal(item)">
              模擬付款
            </button>
          </td>
          <td>
            <strong v-if="item.status === 1" class="text-success"
              >已付款</strong
            >
            <span v-else class="text-muted">尚未起用</span>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :compo-pages="pagination" @emitPages="getOrders"></Pagination>
    <div ref="ecpay"></div>
    <!-- Bootstrap edit Modal -->
    <div
      class="modal fade"
      id="orderModel"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>模擬付款</span>
            </h5>
            <!-- 關閉按鈕 -->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="ooid">訂單編號</label>
                  <input
                    type="text"
                    class="form-control"
                    id="ooid"
                    v-model="ooid"
                    placeholder="請輸入標題"
                    readonly
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="payOrders()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../Pagination";
import { getOrder, payOrder } from "@/api/order";

export default {
  data() {
    return {
      orders: {},
      pagination: {},
      isLoading: false,
      ooid:null
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(currentPage = 1) {
      const vm = this;
      vm.isLoading = true;
      getOrder(currentPage).then((response) => {
        vm.orders = response.data.data.data;
        vm.isLoading = false;
        vm.pagination = response.data.data;
      });
    },
    // 打開編輯視窗
    openModal(item) {
      const vm =this;
      $("#orderModel").modal("show");
      console.log(item);
      vm.ooid = item.ooid;
    },
    payOrders() {
      const vm = this;
      let data = {
        ooid: vm.ooid
      };
      vm.isLoading = true;

      payOrder(data).then(function (res) {
        vm.isLoading = false;
        vm.$refs.ecpay.innerHTML = res.data;
        document.getElementById("__ecpayForm").style.visibility = "hidden";
        document.getElementById("__ecpayForm").submit();
        vm.getOrders();
      });
    },
  },
  computed: {
    // 已付款的訂單往上排列
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.status === 1 ? 1 : 0;
          const bIsPaid = b.status === 1 ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    },
  },
  created() {
    this.getOrders();
    // console.log(process.env.APIPATH);
  },
};
</script>