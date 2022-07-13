<template>
  <div class="users">
    <InputSeaval @val="seavalAdd" :placeholder="'请输入用户'" class="usernames">用户</InputSeaval>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column prop="username" label="用户名" width="100">
      </el-table-column>
      <el-table-column prop="avatar" label="头像" width="80">
        <template slot-scope="scope">
          <el-avatar :size="50" :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色" width="100">
        <template slot-scope="scope">
          <el-tag> {{ scope.row.roles[0].name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="createTime" label="注册时间"> </el-table-column>
      <el-table-column prop="address" label="状态" width="80">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.address"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="warning" size="mini" disabled>分配角色</el-button>
          <el-button type="danger" size="mini" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '../../api/user'
import InputSeaval from '../../components/InputSeaval.vue'
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {},
  created() {
    getList().then((res) => {
      console.log(res)
      this.tableData = res.records
    })
  },
  mounted() {},
  components: {
    InputSeaval
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.users {
  background-color: #fff;
}
.usernames{
  padding: 20px;
}
</style>
