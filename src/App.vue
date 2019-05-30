<template>
	<div id="app">
		<van-tabbar v-model="active" style="z-index: 10;" v-show="this.$route.meta.isShow">
			<van-tabbar-item to='/'>
				<span>书架</span>
				<img slot="icon" :src="icon.normal">
			</van-tabbar-item>

			<van-tabbar-item to='/classify'>
				<span>分类</span>
				<img slot="icon" :src="icon.active">
			</van-tabbar-item>
			<van-tabbar-item to='/ranking'>
				<span>排行</span>
				<img slot="icon" :src="icon.paihang">
			</van-tabbar-item>
			<van-tabbar-item icon="search" to='/search'>搜索</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	export default {
		name: 'app',
		components: {
			// HelloWorld
		},
		data() {
			return {
				active: 0,
				icon: {
					normal: '/img/shujia.png',
					active: '/img/fenlei.png',
					paihang: '/img/paihang.png'
				}
			}
		}
	}
</script>

<style lang="less">
	body {
		margin: 0;
		padding: 0;
	}
</style>
