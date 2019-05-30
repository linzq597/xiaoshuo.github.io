<template>
	<div class="huanyipi">
		<slot></slot>
		<div class="shuaxin">
			<img src="../../public/img/shuaxin.png" alt="">
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="less">
	.huanyipi{
		position: absolute;
		color: #8a8a8f;
		font-size: 12px;
		width: 55px;
		height: 20px;
		right: 0;
		top:5px;
		.shuaxin{
			float: right;
			width:15px;
			height:15px;
			margin-top:1px;
			// margin-right:2px;
			img{
				width: 100%;
			}
		}		
	}
</style>
