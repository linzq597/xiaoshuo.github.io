<template>
	<div class="deletehistory">
		<slot></slot>
		<div class="lajitong">
			<img src="../../public/img/lajitong.png" alt="">
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
	.deletehistory {
		position: absolute;
		color: #8a8a8f;
		font-size: 12px;
		width: 65px;
		height: 20px;
		right: 0;
		top: 5px;

		.lajitong {
			float: right;
			width: 15px;
			height: 15px;
			margin-top:1px;
			img {
				width: 100%;
			}
		}
	}
</style>
