<template>
	<div class="rankinglist">
		<ul>
			<li>
				<div class="box" @click="go(item)">
					<div class="tp">
						<img :src="'http://statics.zhuishushenqi.com'+ item.cover" alt="">
					</div>
					<div class="introduce">
						<span>{{item.title}}</span>
					</div>
					<div class="r">
						>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		data() {
			return {

			};
		},
		methods:{
			go(item){
				// this.$router.push({name:'detail',params:{a:item.name}}),
				this.$router.push({ name: 'totallist', params: { a: item.title,b:item.monthRank,c:item.totalRank,d:item._id}})
				console.log('跳转成功')
			}
		}
	}
</script>

<style scoped lang="less">
	.rankinglist {
		position: relative;

		ul {
			padding-left: 10px;

			li {
				width: 100%;
				height: 105px;
				border-bottom: 1px solid #cccccc;
				background-color: #FFFFFF;
				box-sizing: border-box;

				.box {
					width: 100%;
					height: 100%;

					.tp {
						width: 70px;
						height: 75px;
						float: left;
						padding: 10px 0;

						img {
							width: 100%;
							height: 100%;
						}
					}

					.introduce {
						float: left;
						width: 230px;
						height: 65px;
						padding: 20px 10px;
					}

					.r {
						float: left;
						width: 40px;
						height: 105px;
						line-height: 105px;
					}
				}
			}
		}
	}
</style>
