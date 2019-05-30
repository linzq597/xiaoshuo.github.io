<template>
	<div class="totallist">
		<div class="top">
			<div class="back">
				<div class="tp">
					<img src="../../public/img/fanhui.png" alt="" @click="go()">
				</div>
			</div>
			<div class="name">
				<span>{{this.$route.params.a}}</span>
			</div>
			<div class="homepage">
				<div class="tpr">
					<img src="../../public/img/shouye.png" alt="" @click="gos()">
				</div>
			</div>
		</div>
		<van-tabs v-model="active" animated swipeable title-active-color="red">
			<van-tab title="周榜">
				
			</van-tab>
			<van-tab title="月榜">
				
			</van-tab>
			<van-tab title="总榜">
				
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				b:'',
				c:'',
				d:'',
				zhouban:'',
				active:0
			};
		},
		methods:{
			//返回上一页
			go() {
				this.$router.go(-1)
			},
			//跳转分类首页
			gos(){
				this.$router.push({name:"ranking"})
			},
		},
		created(){
			this.b = this.$route.params.b
			axios.get('http://api.kele8.cn/agent/http://api.zhuishushenqi.com/ranking/'+ this.b)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log("请求失败" + err)
			})
		}
	}
</script>

<style scoped lang="less">
	.totallist {
		width: 100%;
		overflow: hidden;
		.top {
			width: 100%;
			height: 40px;
			position: sticky;
			left: 0;
			top: 0;
			box-sizing: border-box;
			border-bottom: 1px solid #C8C9CC;
			background-color: #FFFFFF;
			z-index: 99;

			.back {
				width: 27%;
				height: 40px;
				float: left;
				line-height: 40px;
				padding: 0 0 0 10px;

				.tp {
					width: 20px;
					height: 20px;
					margin-top: 5px;

					img {
						width: 100%;
					}
				}
			}

			.name {
				// width: 33.3%;
				height: 40px;
				float: left;
				text-align: center;
				line-height: 40px;
			}

			.homepage {
				width: 30%;
				height: 40px;
				float: right;

				.tpr {
					width: 20px;
					height: 20px;
					margin-top: 5px;
					margin-left: 85px;
					line-height: 40px;

					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>
