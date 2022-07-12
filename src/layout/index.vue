<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
import Main from './Main'
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    Aside,
    Main,
    Header
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  width: 100%;
  background-color: #18bc9c;
  color: #333;
  line-height: 60px;
  position: fixed;
  left: 200px;
  top: 0;
  z-index: 100;
}

.el-aside {
  // background-color: $aside-bg-color;
  color: #333;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

.el-main {
  background-color: #e8edf0;
  color: #333;
  position: relative;
  left: 200px;
  top: 60px;
}
</style>
