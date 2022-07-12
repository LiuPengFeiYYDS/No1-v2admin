<template>
  <div class="aside">
    <el-menu
      :default-active="navList.path"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home" :collapse="isCollapse">
        <i :class="'el-icon-' + navList.icon"></i>
        <span slot="title">{{ navList.label }}</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i :class="'el-icon-' + getNavList.icon"></i>
          <span>{{ getNavList.label }}</span>
        </template>
        <el-menu-item-group
          v-for="(item, index) in getNavList.children"
          :key="index"
        >
          <el-menu-item :index="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            {{ item.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { getNav } from '../../api/user'
export default {
  data() {
    return {
      getNavList: {},
      navList: {},
      isCollapse: true
    }
  },
  methods: {},
  created() {
    getNav().then((res) => {
      // console.log(res)
      this.navList = res.menus[0]
      this.getNavList = res.menus[1]
      // console.log(this.getNavList)
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  background: #001529;
}
.aside {
  overflow: auto;
}
</style>
