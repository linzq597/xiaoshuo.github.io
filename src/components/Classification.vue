<template>
	<div class="classification">
		<ul>
			<li>
				<div class="titlebook" @click="go(item)">
					<div class="name">
						<span>{{item.name}}</span>
					</div>
					<div class="quantity">
						<span>{{item.bookCount}}本</span>
					</div>
					<div class="tp">
						<img :src="'http://statics.zhuishushenqi.com' + item.bookCover[0]" alt="">
					</div>
					<div class="hengxian">

					</div>
				</div>
			</li>
		</ul>
		<div class="kongbai">
			
		</div>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		//跳转父分类里的子分类
		methods:{
			go(item){
				// this.$router.push({name:'detail',params:{a:item.name}}),
				this.$router.push({ name: 'detail', params: { a: item.name }})
				console.log('跳转成功')
			}
		}
	};
</script>

<style scoped lang="less">
	.classification {
		position: relative;
		width: 100%;

		ul {
			position: relative;
			li {
				float: left;
				margin-top: 8px;
				margin-left: 8px;
				margin-bottom: 3px;
				background-color: #FFFFFF;

				.titlebook {
					position: relative;
					width: 152px;
					height: 85px;
					padding: 0px 14px 0 10px;

					.name {
						position: relative;
						float: left;
						width: 60px;
						height: 20px;
						margin-top: 20px;
						z-index: 1;

						span {
							color: #3C3A40;
							font-size: 14px;
						}
					}
					.quantity{
						position: absolute;
						left: 10px;
						bottom: 15px;
						font-size: 14px;
						z-index: 1;
					}
					.tp {
						position: relative;
						width: 80px;
						height: 75px;
						float: right;
						margin-top: 5px;
						z-index: 1;

						img {
							width: 100%;
							height: 100%;
						}
					}

					.hengxian {
						position: absolute;
						left: 0;
						bottom: 15px;
						width: 100%;
						height: 20px;
						background-color: #F8FCFE;
					}
				}
			}
		}
		.kongbai{
			width: 100%;
			height: 40px;
			position: absolute;
			left: 0;
			bottom: 0;
			background-color:  #E8EBF1;
		}
	}
</style>
