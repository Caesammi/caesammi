<template>
    <el-header class="headerA">

            <el-breadcrumb style="lineHeight:1.4" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>

    </el-header>
</template>

<script>
    export default {
        components: {
        },
        name: "headerA",
        data(){
            return{
                bbb:[],

            }
        },
        props:{
            menuList:Array

        },
        computed: {
            breadCrumbList () {
                const {name} = this.$route;
                let breadList = [{ path: 'map', name: 'Home' }];
                this.menuList.forEach(item => {
                    if (item.childrens.length > 0) {
                        item.childrens.forEach(sub => {
                            if (sub.path === '/'+name) {
                                breadList.push({ path: item.path,name: item.header }, { path:sub.path,name: sub.name });
                            }
                        });
                    }
                });
                console.log(breadList)
               return breadList;
            }
        },
    }
</script>

<style scoped>
    .headerA{
        opacity: 0.8;
        width: 100%;
      background: #EBEEF5;
      margin-bottom:20px
    }

</style>
