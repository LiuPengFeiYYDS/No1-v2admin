<template>
  <div class="aside">
    <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
      background-color="#222d32"
      text-color="#ffffff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <i :class="'el-icon-' + navList.icon"></i>
        <span slot="title">{{ navList.label }}</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i :class="'el-icon-' + List.icon"></i>
          <span>{{ List.label }}</span>
        </template>
        <el-menu-item-group v-for="(item, index) in List.children" :key="index">
          <el-menu-item :index="item.path" @click="mabel(item)">
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isCollapse: true,
      navList: {},
      List: {}
    }
  },
  methods: {
    mabel(item) {
      this.item(item)
    },

    ...mapActions({
      mabel: 'mabel/item'
    })
  }, //  事件方法
  created() {
    getNav().then((res) => {
      this.navList = res.menus[0]
      this.List = res.menus[1]
    })
  }, //  页面加载时调用
  mounted() {} //  页面加载后操作DOM节点
}
</script>
<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100vh;
  background: #222d32;
}
.el-menu {
  border: none;
}
</style>
