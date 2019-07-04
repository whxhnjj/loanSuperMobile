<template>
  <div>
    <div class="box" v-for="item in main" :key="item.index">
      <div class="help-title">
        <img src="../../../assets/image/help-icon.png" />{{item.articleClassific}}
      </div>
      <el-collapse @change="handleChange">
        <el-collapse-item v-for="items in item.sysHelpCenters" :key="items.index" :title="items.articleName">
          <div v-html="items.articleContent"></div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help',
  data () {
    return {
      main: []
    }
  },
  created () {
    this.getInfoList()
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    getInfoList () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/getHelpFl')
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            console.log(res)
            this.main = res.data
          } else if (res.code === 401) {
            this.$router.push({path: '/Login'})
          } else {
            this.$toast.fail(res.msg)
          }
        })
        .catch((res) => {
        })
    }
  }
}
</script>

<style scoped>
  .box{
    margin-bottom: 20px;
  }
  .help-title{
    background:  #FFFFFF;
    padding: .3rem 4% .3rem 4%;
    font-size: .3rem;
    width: 92%;
    color: #FD9D11;
    height: .42rem;
    line-height: .42rem;
    font-weight: 500;
}
  .help-title img {
    width: .48rem;
    height: .36rem;
    margin-right: .14rem;
  }
  /*.box{*/
    /*background: #F8F8F8;*/
  /*}*/
  /*.help-list{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
    /*background: #FFFFFF;*/
  /*}*/
  /*.list-left{*/
    /*float: left;*/
    /*width: 30%;*/
    /*padding-top: 10px;*/
    /*height: 100%;*/
    /*background: red;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  /*}*/
  /*.list-left-content{*/
    /*height: 70px;*/
    /*width: 100%;*/
  /*}*/
  /*.list-left-content img{*/
    /*height:40px;*/
    /*width: 48px;*/
    /*display: block;*/
    /*margin: 0 auto;*/
    /*text-align: center;*/
  /*}*/
  /*.list-left-content span{*/
    /*height: 30px;*/
    /*display: block;*/
    /*line-height: 30px;*/
    /*font-size: 12px;*/
    /*color: #666666;*/
    /*text-align: center;*/
  /*}*/
  /*.list-right{*/
    /*width: 69%;*/
    /*height: 100%;*/
    /*float: left;*/
    /*border-left: 1px solid #f1f1f1;*/
  /*}*/
</style>
