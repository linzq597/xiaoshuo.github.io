<template>
	<div class="catalog">
		<div class="top">
			<div class="back">
				<div class="tp">
					<img src="../../public/img/fanhui.png" alt="" @click="go()">
				</div>
			</div>
			<div class="name">
				<span>优质书源</span>
			</div>
			<div class="homepage">
				<div class="tpr">
					<img src="../../public/img/shouye.png" alt="" @click="gos()">
				</div>
			</div>
		</div>
		<div class="catalogue">
			<div class="headline">
				<h3 class="mulv">目录</h3>
				<span class="quantity">共{{this.$route.params.a}}章</span>
				<div class="daoxu">
					<span class="dx" @click="inverted">倒序</span>
				</div>
			</div>
			<div class="serial">
				<ul>
					<li v-for="(item,index) in name" :key="index" @click="goss(item,name,index)">
						<a class="xuhao">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				title:'',
				name:[],
				t:true,
			};
		},
		methods:{
			go() {
				this.$router.go(-1)
			},
			//跳转分类首页
			gos(){
				this.$router.push({name:"classify"})
			},
			//跳转阅读页面
			goss(item,name,index){
// 				this.$store.commit('updateClassifiCation',id)
// 				this.$store.commit('updateClassifiCation',name)
				this.$router.push({name:'contentbook',params:{id:item.id,link:item.link,arr:name,index:index}})
				console.log("目录",item.link)
			},
			//点击进行倒序
			inverted(){
				this.name.reverse()
				if(this.t){
					this.t = !this.t
					var a = document.querySelector(".dx")
					a.innerHTML = '正序'
				}else{
					this.t = !this.t
					var a = document.querySelector('.dx')
					a.innerHTML = '倒序'
				}
			}
		},
		created(){
			//优质书源id
			this.id = this.$route.params.id
			// console.log(this.id)
			axios.get('http://api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc?view=summary&book=' + this.id)
			.then(res => {
				this.title = res.data[0]._id
// 			获取小说章节
				axios.get("http://api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc/"+ this.title+"?view=chapters")
				.then(res => {
					this.name = res.data.chapters
					// console.log("内容",this.name)
				})
				.catch(err => {
					console.log("请求失败" + err)
				})

			})
			.catch(err => {
				console.log("请求失败" + err)
			})
			
		}
	}
</script>

<style scoped lang="less">
	.catalog {
		width: 100%;
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
				width: 30.6%;
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
				width: 33.3%;
				height: 40px;
				float: left;
				text-align: center;
				line-height: 40px;
			}

			.homepage {
				width: 33.3%;
				height: 40px;
				float: right;

				.tpr {
					width: 20px;
					height: 20px;
					margin-top: 5px;
					margin-left: 95px;
					line-height: 40px;

					img {
						width: 100%;
					}
				}
			}
		}
		.catalogue{
			width: 100%;
			box-sizing: border-box;
			.headline{
				// box-sizing: border-box;
				width: calc(100% / 20px);
				height: 17px;
				padding: 15px 20px;
				.mulv{
					color: #222222;
					font-size:14px ;
					margin: 0;
					float: left;
					margin-right: 3px;
					margin-top: 2px;
				}
				.quantity{
					font-size: 14px;
					color: #999999;
				}
				.daoxu{
					float: right;
					font-size:14px ;
				}
			}
			.serial{
				width: 100%;
				padding-left:20px ;
				box-sizing: border-box;
				ul{
					li{
						width: 100%;
						height: 50px;
						border-bottom: 1px solid #F8F8F8;
						.xuhao{
							line-height: 50px;
							color: #999999;
							font-size: 12px;
							margin-right: 5px;
						}
					}
				}
			}
			
		}
	}
</style>
