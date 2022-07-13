<template>
  <div>
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
  components: {
    Aside,
    Header,
    Main
  },
  data() {
    return {}
  },
  methods: {}, //  事件方法
  created() {}, //  页面加载时调用
  mounted() {} //  页面加载后操作DOM节点
}
</script>
<style lang="scss" scoped>
.el-container {
  position: fixed;
  left: 0;
  top: 0;
}
.el-header {
  position: fixed;
  width: 100%;
  left: 200px;
  top: 0;
  background-color: #18bc9c;
}
.el-main {
  position: fixed;
  background-color: #e8edf0;
  padding: 30px;
  left: 200px;
  top: 60px;
  width: 87.6%;
  height: 100%;
}
</style>
