<template>
  <div>
    <el-row class="Stepbar">
      <el-col :span="24">
        <el-steps :active="active" align-center process-status="wait">
          <el-step title="申请信息"></el-step>
          <el-step title="基础信息"></el-step>
          <el-step title="资质审核"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <!--步骤条按钮-->
    <el-row>
      <el-col align="center">
        <el-button v-show="isactive" @click="nextsteps"  type="danger" round>下一步</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoanApply',
  data () {
    return {
      // 步骤条
      active: 0,
      isactive: true
    }
  },
  methods: {
    // 步骤条
    nextsteps () {
      this.active++
      if (this.active === 3) {
        this.isactive = false
      }
      //    ------------------
      // this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      // this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + this.$store.state.Token
      // this.$axios.post(this.GLOBAL.axIosUrl + '/api/customer-merchants/updateFollowUpStatus',qs.stringify({
      //   customerMerchantsId: this.infoCrm.customerMerchantsId,
      //   followUpStatus:  JSON.stringify(this.active)
      // }))
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((res) => {
      //     console.log(res)
      //   })
    }
  }
}
</script>

<style scoped>
.Stepbar{
  background: #FFFFFF;
  padding: 10px 0 5px 0;
}
</style>
