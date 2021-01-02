<template>
  <div>
    <!-- bootstrap pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class='{"disabled":!compoPages.prev_page_url}'>
          <a class="page-link" href="#" aria-label="Previous" @click.prevent='turnPage(compoPages.current_page-1)'>
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="item in compoPages.last_page" :key='item' :class="{'active':compoPages.current_page === item}">
          <a class="page-link" href="#" @click.prevent='turnPage(item)'>{{item}}</a>
        </li>

        <li class="page-item" :class='{"disabled":!compoPages.next_page_url}'>
          <a class="page-link" href="#" aria-label="Next" @click.prevent='turnPage(compoPages.current_page+1)'>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>



<script>


//區域註冊元件
export default {
 data() {
    return {
      
    };
  },
  props:['compoPages'],
  methods:{
    turnPage(item){
      this.$emit('turn', item);
    }
  },
  mounted(){
  },
  
};
</script>