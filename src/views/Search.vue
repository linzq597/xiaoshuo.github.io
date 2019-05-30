<template>
	<div class="search">
		<div class="box">
			<div class="bigbox">
				<!-- 上面搜索框 -->
				<div class="xbox">
					<div class="sousuo">
						<img src="../../public/img/sousuo.png" alt="">
					</div>
					<input type="text" placeholder="请输入搜索内容">
					<div class="shangcu">
						<img src="../../public/img/shangcu.png" alt="">
					</div>
				</div>
				<div class="queding">
					<span>确定</span>
				</div>
			</div>
			<!-- 搜索栏 -->
			<div class="title">
				<Title>搜索热词</Title>
				<Batch>换一批</Batch>
			</div>
			
			<div class="xiabox">
				<ul>
					<li v-for="(item,index) in resou" :key="index">
						{{item.word}}
					</li>
				</ul>
			</div>
			<div class="title">
				<Title>热门推荐</Title>
				<Batch>换一批</Batch>
			</div>
			<div class="xiabox">
				<ul>
					<li v-for="(item,index) in remen" :key="index">
						{{item.word}}
					</li>
				</ul>
			</div>
			<div class="title">
				<Title>搜索历史</Title>
				<Deletehistory>删除历史</Deletehistory>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "@/components/Title.vue";
	import Batch from "@/components/Batch.vue";
	import Deletehistory from "@/components/Deletehistory.vue";
	export default {
		components: {
		  Title,
		  Batch,
		  Deletehistory
		},
		data() {
			return {
				resou:[],
				remen:[]
			};
		},
		created() {
			axios.get('http://api.kele8.cn/agent?url=https://novel.juhe.im/search-hotwords')
			.then(res => {
				this.resou = res.data.searchHotWords.slice(0,15)
				console.log(this.resou)
				// console.log(res)
			})
			.catch(err => {
				console.log("请求失败" + err)
			})
			
			axios.get('http://api.kele8.cn/agent?url=https://novel.juhe.im/hot-books')
			.then(res => {
				this.remen = res.data.newHotWords.slice(0,10)
				console.log(this.remen)
			})
			.catch(err => {
				console.log("请求失败" + err)
			})
		}
	}
</script>

<style scoped lang="less">
	.search {
		width: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
		.box {
			width: 100%;
			height: 500px;
			box-sizing: border-box;
			padding: 15px 15px;

			.bigbox {
				width: 100%;
				position: relative;
				margin-bottom: 20px;
				.xbox {
					position: relative;
					width: 294px;
					height: 35px;
					border-radius: 20px;
					background-color: #EBECEC;

					.sousuo {
						float: left;
						width: 25px;
						height: 25px;
						margin-left: 5px;
						margin-top: 5px;

						img {
							width: 100%;
						}
					}

					input {
						width: 250px;
						height: 24px;
						border: none;
						margin-top: 4px;
						margin-left: 5px;
						font-size: 14px;
						background-color: #EBECEC;

						&::-webkit-input-placeholder {
							color: #757575;
						}
					}

					.shangcu {
						position: absolute;
						right: 5px;
						top: 7px;
						width: 13px;
						height: 13px;

						img {
							width: 100%;
						}
					}
				}

				.queding {
					position: absolute;
					width: 35px;
					height: 20px;
					right: 5px;
					top: 5px;
					color: #748389;
				}
			}
			.title{
				position: relative;
				width: 100%;
				height: 40px;
				margin-bottom: 10px;
			}
			.xiabox{
				width: 100%;
				margin-bottom: 15px;
				ul{
					width: 100%;
					padding: 0;
					list-style: none;
					overflow: hidden;
					margin: 10px 0 7px 0;
					li{
						list-style: none;
						float: left;
						height: 31px;
						color: #9B9BA3;
						margin-right: 8px;
						margin-bottom: 8px;
						padding: 0 14px;
						font-size:14px ;
						line-height: 31px;
						background-color: #EFEFF4;
						// border:1px solid #d3d4da;
						border-radius:32px ;
					}
				}
			}
		}
	}
</style>
