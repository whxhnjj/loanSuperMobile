<template>
  <div>
    <div class="slideBar">
      <div class="slideBaricon">
        <div class="img img-yuan-active">1</div>
        <span class="active-text">申请信息</span>
      </div>
      <div class="slideBaricon">
        <div class="dian-img dian-img-active"></div>
      </div>
      <div class="slideBaricon">
        <div class="img img-yuan-active">2</div>
        <span class="active-text">基础信息</span>
      </div>
      <div class="slideBaricon">
        <div class="dian-img"></div>
      </div>
      <div class="slideBaricon">
        <div class="img">3</div>
        <span>资质审核</span>
      </div>
    </div>
    <!--内容-->
    <span class="content-title">基础信息</span>
    <div class="content">
      <!--列表开始-->
      <div class="list">
        <el-row>
          <el-col class="name" :span="6">所在城市:</el-col>
          <el-col class="text" :span="18">
            <selectAddress @eventFromChild="eventFromChild"></selectAddress>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <el-row>
          <el-col class="name" :span="6">姓名:</el-col>
          <el-col class="text" :span="18">
            <input type="text" v-model="form.name" placeholder="请输入姓名" />
          </el-col>
        </el-row>
      </div>
      <!--房屋贷-->
      <div v-if="this.IsTypeOpen === '1'">
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">房产名称:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.nameType" placeholder="请输入房产名称" />
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">房产面积:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.houseArea" placeholder="请输入房产面积" />
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">购房时间:</el-col>
            <el-col class="text" :span="18">
              <div class="picke-time" @click="TimeClickOn(1)">{{resDate1}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--车抵贷-->
      <div v-if="this.IsTypeOpen === '2'">
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">车辆名称:</el-col>
            <el-col class="text" :span="18">
              <div class="Carpop" @click="Carpopclick">{{form.nameType}}</div>
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">购车时间:</el-col>
            <el-col class="text" :span="18">
              <div class="picke-time" @click="TimeClickOn(2)">{{resDate2}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--保单贷-->
      <div v-if="this.IsTypeOpen === '3'">
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">保险公司:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.nameType" placeholder="请输入保险公司名称" />
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">缴费年限:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.payment1" placeholder="请输入缴费年限" />
            </el-col>
          </el-row>
        </div>
      </div>
      <!--公积金贷-->
      <div v-if="this.IsTypeOpen === '4'">
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">单位名称:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.nameType" placeholder="请输入单位名称" />
            </el-col>
          </el-row>
        </div>
        <div class="list">
          <el-row>
            <el-col class="name" :span="6">缴费年限:</el-col>
            <el-col class="text" :span="18">
              <input type="text" v-model="form.payment2" placeholder="请输入缴费年限" />
            </el-col>
          </el-row>
        </div>
      </div>
      <!------------------->
      <div class="list">
        <el-row>
          <el-col class="name" :span="6">贷款金额:</el-col>
          <el-col class="text" :span="18">
            <input type="text" v-model="form.amount" placeholder="请输入贷款金额" />
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <el-col class="name" :span="6">手机号:</el-col>
        <el-col class="text" :span="18">
          <input type="text" v-model="form.mobile" placeholder="请输入手机" />
        </el-col>
        <!--<el-col class="text" :span="7">-->
          <!--<i v-show="sendAuthCode" @click="getAuthCode">获取验证码</i>-->
          <!--<i class="code-text" v-show="!sendAuthCode">重新发送<b>({{code_num}}s)</b></i>-->
        <!--</el-col>-->
      </div>
      <!--<div class="list">-->
        <!--<el-row>-->
          <!--<el-col class="name" :span="6">验证码:</el-col>-->
          <!--<el-col class="text" :span="18">-->
            <!--<input type="text" v-model="form.code" placeholder="请输入验证码" />-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
      <!--结束-->
    </div>
    <div class="button" @click="SubmitInfo">提交</div>
    <van-popup v-model="TimePopShow"  position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" @confirm="confirm" @cancel="cancel" />
    </van-popup>
  </div>
</template>

<script>
import qs from 'qs'
import selectAddress from './selectAddress'
export default {
  name: 'LoanApply',
  components: {
    selectAddress
  },
  props: {
    sourceDate: {
      type: [String, Number]
    }
  },
  data () {
    return {
      TimeNum: '',
      TimePopShow: false,
      currentDate: new Date(),
      resDate1: '', // 购房时间
      resDate2: '', // 购车时间
      // 时间
      TimeVal: '',
      maxYear: new Date().getFullYear(),
      minYear: 1980,
      years: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      normalMaxDays: 31,
      days: [],
      hasError: false,
      // ------------
      // 判断 那种类型
      IsTypeOpen: localStorage.getItem('productType'),
      // 提交表单数据
      form: {
        payment1: '', // 保险缴费现年
        payment2: '', // 单位缴费现年
        name: '',
        nameType: '',
        houseArea: '',
        amount: '',
        mobile: '',
        code: ''
      },
      sendAuthCode: true,
      code_num: 0,
      authCode: '',
      // 省市区
      livingProvince: '',
      livingCity: '',
      livingDistrict: ''
    }
  },
  watch: {
    // // 时间------
    // sourceDate () {
    //   if (this.sourceDate) {
    //     this.currentDate = this.timestampToTime(this.sourceDate)
    //   }
    // },
    // normalMaxDays () {
    //   this.getFullDays()
    //   if (this.currentDate.year && this.currentDate.day > this.normalMaxDays) {
    //     this.currentDate.day = ''
    //   }
    // },
    // currentDate: {
    //   handler (newValue, oldValue) {
    //     this.judgeDay()
    //     if (newValue.year && newValue.month && newValue.day) {
    //       this.hasError = false
    //     } else {
    //       this.hasError = true
    //     }
    //     this.emitDate()
    //   },
    //   deep: true
    // }
  //  ------时间结束--------
  },
  created () {
    if (this.IsTypeOpen === '2') {
      this.form.nameType = this.$route.query.audi
    }
    // 时间开始---------
    this.getFullYears()
    this.getFullDays()
    //  ------时间结束--------
  },
  methods: {
    TimeClickOn (val) {
      this.TimePopShow = true
      this.TimeNum = val
    },
    confirm (value) {
      const d = new Date(value)
      if (this.TimeNum === 1) {
        this.resDate1 = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
      }
      if (this.TimeNum === 2) {
        this.resDate2 = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
      }
      this.TimePopShow = false
    },
    p (s) {
      return s < 10 ? '0' + s : s
    },
    cancel () {
      this.TimePopShow = false
    },
    // 车辆跳转
    Carpopclick () {
      this.$router.push({path: '/Car'})
    },
    // 提交表单数据
    SubmitInfo () {
      if (!this.livingProvince) {
        this.$toast.fail('请选择城市')
        return
      }
      if (!this.form.name) {
        this.$toast.fail('请填写姓名')
        return
      }
      if (!this.form.amount) {
        this.$toast.fail('请填写贷款金额')
        return
      }
      if (!this.form.mobile) {
        this.$toast.fail('请填写手机')
        return
      }
      if (this.IsTypeOpen === '1' && this.IsTypeOpen === '2') {
        if (this.TimeNum === 1) {
          this.TimeVal = this.resDate1
        }
        if (this.TimeNum === 2) {
          this.TimeVal = this.resDate2
        }
      }
      if (this.IsTypeOpen === '3') {
        this.TimeVal = this.form.payment1
      }
      if (this.IsTypeOpen === '4') {
        this.TimeVal = this.form.payment2
      }
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/H5Order/addOrders', qs.stringify({
        productId: localStorage.getItem('productId'),
        userId: localStorage.getItem('userId'), // 写死的用户ID
        city: this.livingProvince + this.livingCity + this.livingDistrict,
        customer: this.form.name,
        mobile: this.form.mobile,
        name: this.form.nameType,
        houseArea: this.form.houseArea, // 房屋面积
        buyingTime: this.TimeVal, // 时间
        amount: this.form.amount
      }))
        .then((res) => {
          res = res.data
          console.log(res)
          if (res.code === 200) {
            this.$router.push({path: '/LoanInfo'})
          }
        })
        .catch((res) => {
        })
    },
    // 短信倒计时
    getAuthCode: function () {
      this.sendAuthCode = false
      this.code_num = 30
      let timefun = setInterval(() => {
        this.code_num--
        if (this.code_num <= 0) {
          this.sendAuthCode = true
          clearInterval(timefun)
        }
      }, 1000)
    },
    // 获取现居住子组件传来选中的省市区
    eventFromChild (data) {
      this.livingProvince = data.sheng
      this.livingCity = data.shi
      this.livingDistrict = data.qu
    },
    //  时间开始-----------
    emitDate () {
      let timestamp
      if (this.currentDate.year && this.currentDate.month && this.currentDate.day) {
        let month = this.currentDate.month < 10 ? ('0' + this.currentDate.month) : this.currentDate.month
        let day = this.currentDate.day < 10 ? ('0' + this.currentDate.day) : this.currentDate.day
        let dateStr = this.currentDate.year + '-' + month + '-' + day
        timestamp = new Date(dateStr).getTime()
      } else {
        timestamp = ''
      }
      this.$emit('dateSelected', timestamp)
    },
    timestampToTime (timestamp) {
      let dateObject = {}
      if (typeof timestamp === 'number') {
        dateObject.year = new Date(timestamp).getFullYear()
        dateObject.month = new Date(timestamp).getMonth() + 1
        dateObject.day = new Date(timestamp).getDate()
        return dateObject
      }
    },
    getFullYears () {
      for (let i = this.minYear; i <= this.maxYear; i++) {
        this.years.push(i)
      }
    },
    getFullDays () {
      this.days = []
      for (let i = 1; i <= this.normalMaxDays; i++) {
        this.days.push(i)
      }
    },
    judgeDay () {
      if ([4, 6, 9, 11].indexOf(this.currentDate.month) !== -1) {
        this.normalMaxDays = 30
        if (this.currentDate.day && this.currentDate.day === 31) {
          this.currentDate.day = ''
        }
      } else if (this.currentDate.month === 2) {
        if (this.currentDate.year) {
          if (
            (this.currentDate.year % 4 === 0 &&
              this.currentDate.year % 100 !== 0) ||
            this.currentDate.year % 400 === 0
          ) {
            this.normalMaxDays = 29
          } else {
            this.normalMaxDays = 28
          }
        } else {
          this.normalMaxDays = 28
        }
      } else {
        this.normalMaxDays = 31
      }
    }
  //  时间结束-----------
  }
}
</script>

<style scoped>
  .slideBar{
    padding: 5px 31px;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
  }
  .slideBaricon{
    width: 20%;
    height: 70px;
    float: left;
  }
  .slideBaricon .img{
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: #666666;
    font-weight: 600;
    font-size: 14px;
    background: url("../../../assets/image/yuan.png") no-repeat center center;
    background-size: 40px;
  }
  .slideBaricon span{
    display: block;
    color: #9A9A9A;
    text-align: center;
    line-height: 30px;
    height: 30px;
    font-size: 12px;
  }
  .dian-img{
    width: 100%;
    height: 2px;
    margin-top: 18px;
    background: url("../../../assets/image/dian.png") no-repeat center center;
    background-size: 100% 2px;
  }
  .img-yuan-active{
    background: url("../../../assets/image/yuan-active.png") no-repeat center center!important;
    background-size: 40px;
    color: #FFFFFF!important;
  }
  .dian-img-active{
    background: url("../../../assets/image/dian-active.png") no-repeat center center!important;
    background-size: 100% 2px!important;
  }
  .active-text{
    color: #ff9937!important;
  }
  .content-title{
    height: 30px;
    line-height: 30px;
    color: #666666;
    font-size: 14px;
    padding-left: 10px;
  }
  .content{
    width: 100%;
    height: 100%;
    margin-bottom: 80px;
    overflow: hidden;
    background: #FFFFFF;
  }
  .picke-time{
    width: 100%;
    height: 40px;
    text-align: right;
    line-height: 40px;
    padding-right: 40px;
  }
  .list{
    height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .name{
    line-height: 40px;
    color: #393939;
    font-weight: 600;
  }
  .text{
    color: #999999;
  }
  .list input{
    float: right;
    color: #333333;
    font-size: 14px;
    font-weight:400;
    text-align: right;
    line-height:38px;
    height:38px;
  }
  .list input::-webkit-input-placeholder {
    color: #999999;
    font-size: 14px;
  }
  .list input:-moz-placeholder {
    color: #999999;
    font-size: 14px;
  }
  .list input:-ms-input-placeholder {
    color: #999999;
    font-size: 14px;
  }
  .list i{
    color: #FF6332;
    display: block;
    float: right;
    font-size: 14px;
    height: 40px;
    padding-left: 10px;
    line-height: 40px;
  }
  .code-text{
    color: #AAAAAA!important;
  }
  .code-text b{
    color: #FF6332;
  }
  .select{
    width: 100%;
    border: none;
  }
  .button{
    width: 230px;
    height: 42px;
    text-align: center;
    margin: 0 auto;
    line-height: 42px;
    color: #FFFFFF;
    background: url("../../../assets/image/money-button.png") no-repeat center center;
    background-size: 230px 42px;
    overflow: hidden;
  }
  /*车辆*/
  .Carpop{
    text-align: right;
    width: 100%;
    display: block;
    height: 40px;
    line-height: 40px;
    padding-right: 25px;
    background: #fff url(../../../assets/image/borrow-jiantou.png) no-repeat right center;
    background-size: 22px;
  }
</style>
