<template>
  <div class="seaval">
    <div class="left">
      <div><slot></slot></div>
      <el-input v-model="input" :placeholder="placeholder"></el-input>
      <el-button type="success" @click="seachval">查询</el-button>
    </div>
    <div class="rifht"></div>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    seachval() {
      this.$emit('val', this.input)
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.seaval {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    width: 380px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .el-input {
      width: 250px;
    }
  }
}
</style>
