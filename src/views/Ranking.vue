<template>
	<div class="ranking">
		<van-tabs @click="a" @change="a" v-model="active" animated swipeable >
			<van-tab title="男生" style="height: 1720px;">
				<Rankinglist v-for="(item,index) in nanshengb" :key="index" v-bind:item="item"></Rankinglist>
			</van-tab>
			<van-tab title="女生" style="height: 1400px;">
				<Rankinglist v-for="(item,index) in nvshengb" :key="index" v-bind:item="item"></Rankinglist>
			</van-tab>
			<van-tab title="出版">
				<Rankinglist v-for="(item,index) in chubanb" :key="index" v-bind:item="item"></Rankinglist>
			</van-tab>
			<van-tab title="轻小说" style="height: 670px;">
				<Rankinglist v-for="(item,index) in qingxiaoshuob" :key="index" v-bind:item="item"></Rankinglist>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import Rankinglist from "@/components/Rankinglist.vue";
	export default {
		components:{
			Rankinglist
		},
		data() {
			return {
				tabPosition: 'top',
				nanshengb:[],
				nvshengb:[],
				chubanb:[],
				qingxiaoshuob:[],
				active: localStorage.getItem("title"),

			};
		},
		created(){
			axios.get('http://api.kele8.cn/agent/http://novel.juhe.im/rank-category')
			.then(res => {
				this.nanshengb = res.data.male
				this.nvshengb = res.data.female
				this.chubanb = res.data.epub
				this.qingxiaoshuob = res.data.picture
				console.log(res)
			})
			.catch(err => {
				console.log("请求失败" + err)
			})
		},
		methods:{
			a(index,title){
				// console.log(title)
				localStorage.setItem("title",index);
			}
		}
	}
</script>

<style lang="less">
	.ranking {
		.el-tabs__header{
			margin: 0;
		}
		.el-tabs__nav-wrap {
			padding: 0 60px;
		}
	}
</style>
