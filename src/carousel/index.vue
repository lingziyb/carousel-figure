<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
-->
<template>
	<transition-group name="fade" class="carousel" tag="div">
		<div class="slide" v-for="(cover,index) in covers" :key="index" v-show="index==current">
			<img :src="cover.img"/>
			<!--<p>{{cover.info}}</p>-->
		</div>
	</transition-group>
</template>
<script>
	export default {
		name: 'carousel-zll',
		props: {
			covers: Array,
			speed: {
				default: '1000'
			},
			time: ''
		},
		data(){
			return {
				current: 0,
			};
		},
		created(){
			this.play();
		},
		methods: {
			autoPlay(){
				setTimeout( () => {
					this.current++;
					if ( this.current >= this.covers.length ) {
						this.current = 0;
					}
				}, 10 )
			},
			play(){
				setInterval( this.autoPlay, 3000 );
			}
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: all .5s ease;
	}

	.fade-enter {
		transform: translateX(0);
	}

	.fade-enter-to {
		transform: translateX(-100%);
	}

	.fade-leave {
		transform: translateX(0);
	}

	.fade-leave-to {
		transform: translateX(-100%);
	}

	.carousel {
		display: flex;
		overflow: auto;

		.slide {
			height: 100%;
			width: 100%;
			position: relative;

			img {
				height: 100%;
			}
			p {
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: rgba(0, 0, 0, 0.2);
				width: 100%;
				color: darkblue;
			}
		}
	}

	/*.carousel {*/
	/*position: relative;*/
	/*display: flex;*/
	/*overflow: auto;*/

	/*.slide {*/
	/*height: 100%;*/
	/*width: 100%;*/
	/*position: absolute;*/
	/*left: 0;*/
	/*top: 0;*/

	/*img {*/
	/*height: 100%;*/
	/*}*/
	/*p {*/
	/*position: absolute;*/
	/*bottom: 0;*/
	/*left: 0;*/
	/*background-color: rgba(0, 0, 0, 0.2);*/
	/*width: 100%;*/
	/*color: darkblue;*/
	/*}*/
	/*}*/
	/*}*/

</style>


