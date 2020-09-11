<template>
  <div>
    <el-row>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small" align="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>


  </div>
</template>

<script>
import store from "@/store";


export default {
  name: "about",
  store: store,
  computed: {
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    store.commit('changeTheme','Light')
  },
  mounted() {

  },
  watch: {

  }
}
</script>

<style  scoped>
.block{
  width: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
