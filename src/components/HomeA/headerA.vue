<template>
    <el-header class="headerA">
        <el-container style="padding-top: 3px;height: 100%">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item,index) in breadCrumbList" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-container>
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
                const { name} = this.$route;
                let breadlist = [{ path: 'map', name: 'Home' }];
                this.menuList.forEach(item => {
                    if (item.childrens.length > 0) {
                        item.childrens.forEach(sub => {
                            if (sub.path === '/'+name) {
                                breadlist.push({ path: sub.path,name: item.header }, { path:sub.path,name: sub.name });
                            }
                        });
                    }
                });
               return breadlist;
            }
        },
    }
</script>

<style scoped>
    .headerA{
        opacity: 0.8;
      background: #EBEEF5;
    }

</style>
