<template>
  <div class="Header">
    <div class="header-tag">
      <el-tag
        class="tagvive"
        type="warning"
        :key="index"
        v-for="(tag, index) in itemList"
        @click="$router.push(`${tag.pathTo}`)"
      >
        {{ tag.title }}
        <span @click.stop="delto(index)" class="deletes">x</span>
      </el-tag>
    </div>
    <div>
      <el-avatar :size="40" :src="circleUrl"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="username-span">{{ username }}</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="back">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { removeItem } from '../../utils/storage'
import { mapState, mapActions } from 'vuex'
import { getInfo } from '../../api/user'
export default {
  data() {
    return {
      username: '',
      circleUrl: '',
      sizeList: ['small']
    }
  },
  computed: {
    ...mapState('mabel', ['itemList'])
  },
  methods: {
    back() {
      this.$router.push('/login')
      removeItem('token')
    },
    delto(index) {
      this.del(index)
    },
    ...mapActions({
      del: 'mabel/del'
    })
  }, //  事件方法
  created() {
    getInfo().then((res) => {
      // console.log(res)
      this.username = res.username
      this.circleUrl = res.avatar
    })
  }, //  页面加载时调用
  mounted() {} //  页面加载后操作DOM节点
}
</script>
<style lang="scss" scoped>
.Header {
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tagvive {
  height: 30px;
  line-height: 25px;
  font-size: 16px;
  margin-left: 20px;
}
.deletes {
  color: rgb(150, 149, 149);
  margin-left: 5px;
}
.el-dropdown {
  position: fixed;
  right: 20px;
  top: 0px;
}

.username-span {
  display: inline-block;
  height: 100%;
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
}
.el-icon-s-fold {
  font-size: 20px;
}
.el-avatar {
  margin-top: 10px;
}
</style>
