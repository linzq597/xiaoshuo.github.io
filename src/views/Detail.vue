<template>
	<div class="title">
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
		<div class="fl">
			<van-tabs @click="c" @change="c" v-model="active" animated swipeable title-active-color="red">
				<van-tab class="tops" v-for="(item,index) in xfl" :key="index" :title="item">
					<ul>
						<li v-for="(item,index) in data1" :key="index" @click="skip(item)">
							<div  class="contents">
								<div class="tp">
									<img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
								</div>
								<div class="rightbox">
									<div class="name">
										<span>{{item.title}}</span>
									</div>
									<div class="author">
										<span>{{item.author}} &nbsp;&nbsp; | &nbsp;&nbsp;{{item.majorCate}}</span>
									</div>
									<div class="synopsis">
										<span>{{item.shortIntro}}</span>
									</div>
									<div class="popularity">
										<div class="heat">
											<span class="numbers">{{Calculate(item.latelyFollower)}}</span>
											<span class="renqi">人气</span>
											<span class="shu">|</span>
											<span class="numbers">{{item.retentionRatio}}%</span>
											<span class="renqi">读者留存</span>
										</div>
									</div>
								</div>
							</div>
							<!-- {{item.author}} -->
						</li>
					</ul>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				titles: '',
				xfl: [],
				data1: [],
				active: this.test,
				test1: [],
				test: []
			};
		},
		mounted() {
			var styles = document.querySelector(".van-tabs__wrap")
			styles.style.position = "sticky"
			styles.style.top = 40 + "px"
		},
		methods: {
			//点击获取数据
			c(index, title) {
				// console.log(title)
				this.test = title
				this.axios.get('http://api.kele8.cn/agent/https://api.zhuishushenqi.com/book/by-categories?', {
						params: {
							gender: this.test1,
							type: 'hot',
							major: this.$route.params.a,
							minor: this.test,
							start: 1,
							limit: 20,
						}
					})
					.then(res => {
						console.log(res.data.books)
						this.data1 = res.data.books
					})
					.catch(err => {
						console.log("请求失败" + err)
					})
			},
			//返回上一页
			go() {
				this.$router.go(-1)
			},
			//跳转分类首页
			gos(){
				this.$router.push({name:"classify"})
			},
			//跳转详情页
			skip(item){
				this.$router.push({name:'bookdetails',params:{id:item._id}})
			},
			//人气
			Calculate:function(params){
				if(params > 10000){
					return (params / 10000).toFixed(1)+ '万'
				}else{
					return params
				}
			}
		},
		//接收分类参数
		created() {
			// console.log(this.$route.params.a)
			axios.get('http://api.kele8.cn/agent/https://api.zhuishushenqi.com/cats/lv2')
				.then(res => {
					
					//取出本地存储
					var ss = localStorage.getItem('title')
					// console.log(res)
					if (ss == 0) {
						this.titles = res.data.male
						this.test1 = 'male'
					} else if (ss == 1) {
						this.titles = res.data.female
						this.test1 = 'female'
					} else if (ss == 2) {
						this.titles = res.data.press
						this.test1 = 'press'
					} else if (ss == 3) {
						this.titles = res.data.picture
						this.test1 = 'picture'
					}
					// console.log(res)
					for (var i = 0; i < this.titles.length; i++) {
						// console.log(this.titles.major)
						if (this.$route.params.a == this.titles[i].major) {

							this.xfl = this.titles[i].mins
							// console.log('sss',this.xfl[0])
							// console.log('sss',this.test1)
							
							
							//初始化小分类
							var self = this
							this.axios.get('http://api.kele8.cn/agent/https://api.zhuishushenqi.com/book/by-categories?', {
									params: {
										gender: self.test1,
										type: 'hot',
										major: self.$route.params.a,
										minor: self.xfl[0],
										start: 1,
										limit: 20,
									}
								})
								.then(res => {
									// console.log(res.data.books)
									this.data1 = res.data.books
								})
								.catch(err => {
									console.log("请求失败" + err)
								})
						}
					}
				})
				.catch(err => {
					console.log("请求失败" + err)
				})
		}
	}
</script>

<style scoped lang="less">
	.title {
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
		.fl{
			.van-tabs--line{
				padding: 0;
			}
			ul{
				height: 3100px;
				li{
					width: calc(100% / 15px);
					height: 153px;
					padding-left:15px;
					background-color: #F5F2ED;
					.contents{
						position: relative;
						width: calc(100% / 15px);
						height: 112px;
						padding:20px 0 20px;
						border-bottom: 1px solid #DEDEDE;
						.tp{
							width:84px;
							height:112px;
							margin-right:16px;
							float:left;
							img{
								width: 100%;
								height: 100%;
							}
						}
						.rightbox{
							width: 100%;
							height: 100%;
							position: relative;
							right: 0;
							top: 0;
							.name{
								width: 100%;
							}
						}
						.author{
							margin-top:10px;
							width: 100%;
							height: 15px;
							font-size: 13px;
							color: #999999;
						}
						.synopsis{
							padding-right:5px ;
							width: 255px;
							max-width: 300px;
							margin-top: 10px;
							font-size: 13px;
							color: #999999;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;  // 控制多行的行数
							-webkit-box-orient: vertical;
					
						}
						.popularity{
							width: 100%;
							margin-top: 4px;
							.heat{
								.numbers{
									font-size: 13px;
									color: red;
								}
								.renqi{
									font-size: 13px;
									margin-right: 10px;
									color: #666666;
								}
								.shu{
									font-size: 13px;
									margin-right: 10px;
									color: #666666;
								}
							}
						}
					}
				}
			}
			
		}
	}
</style>
