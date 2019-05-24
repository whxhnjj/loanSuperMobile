<template>
  <div>
    <div class="box">
    <div class="help-title">
      <img src="../../../assets/image/help-icon.png" />认证相关
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
    <div class="box">
      <div class="help-title">
        <img src="../../../assets/image/help-icon.png" />认证相关
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="box">
      <div class="help-title">
        <img src="../../../assets/image/help-icon.png" />认证相关
      </div>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
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
      activeNames: []
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
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
