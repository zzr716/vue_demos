<template>
  <div class="panel  panel-default">
    <div class="panel-heading">
        <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-body">
        <h1 class="text-center">{{time}}小时</h1>
    </div>
  </div>
</template>
<script>
    // 父子传值 回传很麻烦
    // 界面有很多状态，vue有集中管理界面状态的地方
    // 例如 乐豆家 有103家店铺 但仓库都在一个地方
    // 状态中心 Store 进货
    export default {
        // data () {
        //     return {
        //         // 组件的数据 不该在组件内
        //         time: '8'
        //     }
        // }
        name: 'Sidebar',
        computed: {
            time () {
                return this.$store.state.totalTime
            }
        }
    }
</script>
<style>

</style>