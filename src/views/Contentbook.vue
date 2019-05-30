<template>
	<div class="contentbook">
		<div class="top" :class="{a:is}">
			<div class="back">
				<div class="tp">
					<img src="../../public/img/fanhui.png" alt="" @click="go()">
				</div>
			</div>
			<div class="name">
				<span></span>
			</div>
			<div class="homepage">
				<div class="tpr">
					<img src="../../public/img/shouye.png" alt="" @click="gos()">
				</div>
			</div>
		</div>
		<div class="cont"  @click="a" v-if="chapter">
			<div class="title">
				<h3>{{chapter.title }}</h3>
			</div>
			<div class="contents">
				<span>{{chapter.cpContent}}</span>
			</div>
		</div>
		<div class="conts" @click="a" v-if="!chapter">
			<p>搜索不到数据,可能是1.api问题2.当前小说版本过低</p>
		</div>
		<div class="bottom" :class="{a:is}">
			<div class="fangda">
				<div class="jianxiao">Aa-</div>
				<div class="hengtiao"></div>
				<div class="fangkai">Aa+</div>
			</div>
			<div class="yangshi">
				<div class="ys">默认</div>
				<div class="ys z">夜间</div>
				<div class="ys">护眼</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				is:true,
				link:'',
				chapter:''
			};
		},
		methods:{
			//返回上一页
			go() {
				this.$router.go(-1)
			},
			//跳转分类首页
			gos(){
				this.$router.push({name:"classify"})
			},
			a(){
				this.is=!this.is;
				console.log('ss')
			},
			
		},
		created() {	
			this.link = this.$route.params.link
			console.log("章节内容",this.link)
			axios.get('http://api.kele8.cn/agent/https://chapterup.zhuishushenqi.com/chapter/' + this.link)
				.then(res => {
					this.chapter = res.data.chapter
					console.log("bb",res)
					// console.log(this.chapter)
				})
				.catch(err => {
					console.log("请求失败" + err)
				})
		}
	}
</script>

<style scoped lang="less">
	.contentbook {
		width: 100%;
		box-sizing: border-box;
		.top {
			width: 100%;
			height: 40px;
			// position: sticky;
			position:fixed;
			left: 0;
			top: 0;
			box-sizing: border-box;
			border-bottom: 1px solid #C8C9CC;
			background-color: #444545;
			z-index: 99;
			opacity: 0.8;
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
		.conts{
			width: 100%;
			height: 617px;
			padding-top:50px ;
			background-color: #EEE6DD;
		}
	
		.cont {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			padding-top: 20px;
			background-color: #EEE6DD;

			.title {
				padding: 0 15px;

				h3 {
					margin: 0;
				}
			}

			.contents {
				width: calc(100% / 15px);
				padding: 10px 15px 0 15px;
				overflow: hidden;
			}
		}
		
		.a{
			display: none;
		}
		.bottom{
			width: 335px;
			height: 130px;
			padding: 20px;
			position:fixed;
			left: 0;
			bottom: 0;
			background-color:#444545;
			opacity: 0.8;
			.fangda{
				width:100%;
				height: 30px;
				margin-bottom:20px;
				
				.jianxiao{
					color: #FFFFFF;
					font-size: 20px;
					float: left;
				}
				.hengtiao{
					background-color: #B2B2B2;
					float: left;
					width: 230px;
					height: 2px;
					margin-top: 13px;
					margin-left: 18px;
					margin-right: 10px;
				}
				.fangkai{
					color: #FFFFFF;
					font-size: 20px;
					float: right;
				}
			}
			.yangshi{
				width: 100%;
				height: 30px;
				.ys{
					width: 30%;
					float: left;
					text-align: center;
					line-height:40px ;
					color: #FFFFFF;
					border: 1px solid #535353;
				}
				.z{
					margin-left:13px ;
					margin-right: 13px;
				}
			}
		}
	}
</style>
