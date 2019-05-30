<template>
	<div class="bookdetails">
		<div class="top">
			<div class="back">
				<div class="tp">
					<img src="../../public/img/fanhui.png" alt="" @click="go()">
				</div>
			</div>
			<div class="name">
				<span>书籍详情</span>
			</div>
			<div class="homepage">
				<div class="tpr">
					<img src="../../public/img/shouye.png" alt="" @click="gos()">
				</div>
			</div>
		</div>
		<div class="contents">
			<div class="box">
				<div class="tp">
					<img :src="'http://statics.zhuishushenqi.com'+ book.cover" alt="">
				</div>
				<div class="title">
					<span>{{book.title}}</span>
				</div>
				<div class="author">
					<span class="name">{{book.author}}</span>
					<span class="shu">|</span>
					<span class="shu">{{book.cat}}</span>
					<span class="shu">|</span>
					<span class="shu">{{Calculate(book.wordCount)}}</span>
				</div>
				<div class="author">
					<span class="shu">3天前更新</span>
				</div>
			</div>
			<div class="read">
				<div class="boxs">
					<div class="bookrack">加入书架</div>
					<div class="reading" @click="goss(names.id,names.link)">开始阅读</div>
				</div>
			</div>
		</div>
		<div class="reputation">
			<div class="zuo">
				<div class="renqi">
					<span>追人气</span>
				</div>
				<div class="shuzi">
					<span>{{Calculates(book.latelyFollower)}}</span>
				</div>
			</div>
			<div class="zuo">
				<div class="renqi">
					<span>读者留存</span>
				</div>
				<div class="shuzi">
					<span>{{Calculates(book.retentionRatio)}}%</span>
				</div>
			</div>
			<div class="zuo">
				<div class="renqi">
					<span>日更字数/天</span>
				</div>
				<div class="shuzi">
					<span>{{Calculates(book.serializeWordCount)}}</span>
				</div>
			</div>
		</div>
		<div class="synopsis">
			<div  @click="dj()" class="synopsiss">
				<div class="cons">
					<span id="con" class="con">{{book.longIntro}}</span>
				</div>
				<div class="jiantou">
					<img :src="sr" alt="">
				</div>
			</div>
		</div>
		<div class="catalogue">
			<div class="big" @click="Catalog(id)">
				<div class="mulv">
					<span>目录</span>
				</div>
				<div class="r">
					<div class="tupian">
						<img src="../../public/img/youtou.png" alt="">
					</div>
					<div class="section">
						<span>[3天前更新]&nbsp;&nbsp;{{book.lastChapter}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				book:'',
				t:true,
				sr:'/img/xiatou.png',
				id:'',
				title:'',
				names:'',
				indexs:0,
			};
		},
		methods:{
			dj(){
				if(this.t){
					this.t=!this.t
					var a= document.querySelector('#con')
					a.setAttribute('class','')
					this.sr = '/img/shangtou.png'
				}else{
					this.t=!this.t
					var a= document.querySelector('#con')
					a.setAttribute('class','con')
					this.sr = '/img/xiatou.png'
				}
			},
			//返回上一页
			go() {
				this.$router.go(-1)
			},
			//跳转分类首页
			gos(){
				this.$router.push({name:"classify"})
			},
			goss(link,name,index){
// 				this.$store.commit('updateClassifiCation',id)
// 				this.$store.commit('updateClassifiCation',name)
				this.$router.push({name:'contentbook',params:{id:this.names.id,link:this.names.link,arr:name,index:index}})
				// console.log("ssa",this.names.id)
			},
			Catalog(id){
				this.$router.push({name:'catalog',params:{id:this.book._id,a:this.book.chaptersCount}})
			},
			Calculate:function(params){
				if(params > 10000){
					return parseInt((params / 10000).toFixed(3))+ '万字'
				}else{
					return params
				}
			},
			Calculates:function(params){
				if(params > 10000){
					return (params / 10000).toFixed(1)+ '万'
				}else{
					return params
				}
			}
		},
		created(){
			this.id = this.$route.params.id
			// console.log('dd',this.id)
			axios.get('http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/'+ this.id)
			.then(res => {
				this.book = res.data
				console.log(this.book)
				// console.log(res)
				// console.log(this.id)
			})
			.catch(err => {
				console.log("请求失败" + err)
			})
			
			//优质书源id
			this.id = this.id
			// console.log("谁的id",this.id)
			axios.get('http://api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc?view=summary&book=' + this.id)
			.then(res => {
				this.title = res.data[0]._id
				// console.log('id',this.title)
				axios.get("http://api.kele8.cn/agent/http://api.zhuishushenqi.com/atoc/"+ this.title+"?view=chapters")
				.then(res => {
					this.names = res.data.chapters[this.indexs]
					console.log("第一个",this.names)
				})
				.catch(err => {
					console.log("请求失败" + err)
				})
			.catch(err => {
				console.log("请求失败" + err)
			})
			})
		}
	}
</script>

<style scoped lang="less">
	.bookdetails{
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
		.contents{
			width: 100%;
			.box{
				width: calc(100% / 32px);
				// max-width: 415px;
				height: 130px;
				padding: 20px 16px 16px 16px;
				position: relative;
				.tp{
					width: 108px;
					height: 130px;
					float: left;
					margin-right: 10px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.title{
					width: 100%;
				}
				.author{
					width: 100%;
					margin-top: 10px;
					.name{
						font-size: 14px;
						color: #B93321;
						margin-right:5px ;
					}
					.shu{
						font-size: 14px;
						color: #999999;
						margin-right: 10px;
					}
				}
			}
			.read{
				width: calc(100% / 20px);
				height: 80px;
				padding: 20px;
				border-bottom: 1px solid #EBEBEB;
				.boxs{
					width: 100%;
					.bookrack{
						float: left;
						width: 150px;
						height: 50px;
						text-align: center;
						line-height: 50px;
						color: #B93321;
						border: 1px solid #B93321;
					}
					.reading{
						float: right;
						width: 150px;
						height: 50px;
						text-align: center;
						line-height: 50px;
						color: #FFFFFF;
						background-color: #B93321;
						border: 1px solid #B93321;
					}
				}
			}
		}
		.reputation{
			width: 100%;
			height: 55px;
			padding: 20px 0;
			border-bottom: 1px solid #EBEBEB;
			.zuo{
				width: 33.3%;
				height: 65px;
				text-align: center;
				// line-height: 65px;
				float: left;
				.renqi{
					width: 100%;
					font-size: 14px;
					color: #999999;
					margin-bottom: 10px;
				}
				.shuzi{
					width: 100%;
				}
			}
		}
		.synopsis{
			width: 100%;
			box-sizing: border-box;
			padding: 20px;
			border-bottom: 1px solid #EBEBEB;
			.synopsiss{
				width: 100%;
				position: relative;
				.cons{
					font-size:14px;
					color: #222222;
					.con{
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
					}
				}
				.jiantou{
					position: absolute;
					width: 20px;
					height: 20px;
					right: 0;
					bottom: -10;
					img{
						width: 100%;
					}
				}
			}
		}
		.catalogue{
			width: 100%;
			height: 60px;
			box-sizing: border-box;
			padding: 20px 20px;
			border-bottom: 1px solid #EBEBEB;
			.big{
				width: 100%;
				.mulv{
					float: left;
					font-size: 14px;
					color: #333333;
				}
				.r{
					float: right;
					.tupian{
						float: right;
						width: 20px;
						height: 20px;
						margin-left: 2px;
						img{
							width: 100%;
						}
					}
					.section{
						float: right;
						color: #999999;
						font-size:12px;
					}
				}
			}
		}
	}
</style>
