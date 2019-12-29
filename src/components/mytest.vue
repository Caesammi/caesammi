<template>
    <div style="height: 3000px">
sdfsdf
    </div>
</template>

<script>
  export default {
    name: "mytest",
    mounted() {
      this.myApi.getSitePage().then(res=>{

      }).catch(res=>{
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
