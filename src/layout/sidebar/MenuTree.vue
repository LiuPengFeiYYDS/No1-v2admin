<template>
  <div class="menu">
    <el-menu
      :default-active="$route.path"
      background-color="#1b2428"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border: none"
      collapse-transition
      :collapse="isCollapse"
      router
    >
      <Item v-for="(v, i) in getMenuList" :key="i" :item="v"></Item>
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {
    Item: () => import('./Item.vue')
  },
  computed: {
    getMenuList() {
      return this.$store.getters.navList.menus
    }
  },
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
