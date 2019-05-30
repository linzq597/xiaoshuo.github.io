<template>
	<div class="title">
		<slot></slot>
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
	.title {
		font-size: 23px;
		font-weight: 400;
		color: #6b6b6b;
		float: left;
	}
</style>
