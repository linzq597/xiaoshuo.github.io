<template>
  <div class="home">
		<el-row :gutter="0">
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		</el-row>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    
  }
};
</script>
<style scoped lang="less">
	.el-row {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>