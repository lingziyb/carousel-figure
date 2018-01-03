<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
-->
<template>
	<transition-group name="fade" class="carousel" tag="div">
		<div class="slide" v-for="(cover,index) in covers" :key="index" v-show="index==current"
			 @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
			<img :src="cover.img"/>
			<p>{{cover.info}}</p>
		</div>
	</transition-group>
</template>
<script>
	export default {
		name: 'carousel-zll',
		props: {
			covers: Array,
			speed: {
				default: '4000'
			},
			time: '',
		},
		data(){
			return {
				current: 0,
				swiperInter: null,
				startX: 0,
				endX: 0
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
				this.swiperInter = setInterval( this.autoPlay, this.speed );
			},
			touchStart( e ){
				clearInterval( this.swiperInter );
				this.startX = e.touches[ 0 ].clientX;
				console.log( 'start', this.startX );
			},
			touchMove( e ){

			},
			touchEnd( e ){
				this.play();
				this.endX = e.changedTouches[ 0 ].clientX;
				console.log( 'end', this.endX );

				console.log( 'start-end', this.endX - this.startX );
				if ( this.endX - this.startX < 0 ) {

					// 从右往左滑
					console.log( '从右往左滑，下一张' );
					this.current++;
				} else {

					// 从左往右滑
					console.log( '从左往右滑，上一张' );
					this.current--;
				}

				this.startX = 0;
				this.endX = 0;
			},
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: all 1s ease;
	}

	/*.fade-enter {*/
	/*transform: translateX(0);*/
	/*}*/

	/*.fade-enter-to {*/
	/*transform: translateX(-100%);*/
	/*}*/

	/*.fade-leave {*/
	/*transform: translateX(0);*/
	/*}*/

	/*.fade-leave-to {*/
	/*transform: translateX(-100%);*/
	/*}*/

	/*.carousel {*/
	/*display: flex;*/

	/*.slide {*/
	/*height: 100%;*/
	/*width: 100%;*/
	/*position: relative;*/

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

	.fade-enter {
		transform: translateX(100%);
	}

	.fade-enter-to {
		transform: translateX(0);
	}

	.fade-leave {
		transform: translateX(0);
	}

	.fade-leave-to {
		transform: translateX(-100%);
	}

	.carousel {
		position: relative;
		display: flex;

		.slide {
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;

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

</style>


