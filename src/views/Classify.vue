<template>
	<div class="classify">
		<van-tabs @click="a" @change="a" v-model="active" animated swipeable >
			<van-tab title="男生">
				<Classification v-for="(item,index) in nansheng" :key="index" v-bind:item="item"></Classification>
			</van-tab>
			<van-tab title="女生">
				<Classification v-for="(item,index) in nvsheng" :key="index" v-bind:item="item"></Classification>
			</van-tab>
			<van-tab title="出版">
				<Classification v-for="(item,index) in chuban" :key="index" v-bind:item="item"></Classification>
			</van-tab>
			<van-tab title="漫画">
				<Classification v-for="(item,index) in manhua" :key="index" v-bind:item="item"></Classification>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import Classification from "@/components/Classification.vue";
	export default {
		components: {
			Classification
		},
		data() {
			return {
				tabPosition: 'top',
				nansheng: [],
				nvsheng: [],
				chuban: [],
				manhua: [],
				active: localStorage.getItem("title"),
			};
		},
// 		watch:{
// 			nansheng(newValue,oldValue){
// 				console.log(newValue)
// 				console.log(oldValue)
// 			}
// 		},
		created() {
			axios.get('http://api.kele8.cn/agent/http://api.zhuishushenqi.com/cats/lv2/statistics')
				.then(res => {
					this.nansheng = res.data.male
					this.nvsheng = res.data.female
					this.chuban = res.data.press
					this.manhua = res.data.picture
					console.log(res)
					// this.$store.state.Classifyres = res;
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
	};
</script>
<style lang="less">
	.classify {
		.van-tabs{
			padding-top: 0;
		}
		.van-tabs__wrap{
			position: sticky;
			left: 0;
			top: 0;
		}
		.van-tabs .van-tab__pane {
			height: 720px;
			background-color:  #E8EBF1;
		}
	}
	
</style>
