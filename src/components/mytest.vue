<template>
    <div>
        {{test}}<br>{{myArr}}
    </div>
</template>

<script>
    import {mapState, mapActions,mapGetters} from 'vuex'
  export default {
    name: "mytest",
    computed:{

    },
    data(){
      return{
        test:{},
        myArr:[],
        a3:[]
      }
    },
    methods:{
      pu(){
        this.a3.push('fff')
        console.log(this.a3)
      }
    },
    mounted() {

      for(let i = 0; i<3000;i++){
        this.test[i]='test'
      }


      let pu = ()=>{
        this.myArr.push('test')
      }
      setInterval(pu,2000)
setInterval(this.pu,2000)


    }
  }
</script>

<style scoped>

</style>
