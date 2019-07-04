<template>
    <div v-html="contact">

    </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      contact: ''
    }
  },
  created () {
    this.getDataContact()
  },
  methods: {
    getDataContact () {
      this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      this.$axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
      this.$axios.post(this.GLOBAL.axIosUrl + '/api/selectCustomerService')
        .then((res) => {
          res = res.data
          if (res.code === 200) {
            this.contact = res.data.articleContent
          }
        })
        .catch((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>

</style>
