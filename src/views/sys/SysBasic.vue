<template>
    <div>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="权限组" name="permissmana"><PermissMana></PermissMana></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
   
    import PermissMana from '../../components/sys/basic/PermissMana'
    export default {
        name: "SysBasic",
        data(){
            return{
                activeName: 'permissmana'
            }
        },
        components:{
            PermissMana
        }
    }
</script>

<style scoped>

</style>