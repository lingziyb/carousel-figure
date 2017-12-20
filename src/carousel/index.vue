<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
-->
<template>
	<transition-group name="fade" class="carousel">
		<div class="slide" v-for="(cover,index) in covers" v-bind:key="index" v-show="index==current">
			<img :src="cover.img" alt="">
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
				this.current++;
				if ( this.current >= this.covers.length ) {
					this.current = 0;
				}
			},
			play(){
				setInterval( this.autoPlay, 2000 );
			}
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.fade-enter-active, .fade-leave-active {
		transition: all 1s ease;
	}

	.fade-enter {
		transform: translateX(100%);
		-webkit-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-ms-transform: translateX(100%);
		opacity: 0;
	}

	.fade-enter-to {
		transform: translateX(0);
		-webkit-transform: translateX(0);
		-moz-transform: translateX(0);
		-ms-transform: translateX(0);
		opacity: 1;
	}

	.fade-leave {
		transform: translateX(0);
		-webkit-transform: translateX(0);
		-moz-transform: translateX(0);
		-ms-transform: translateX(0);
		opacity: 1;
	}

	.fade-leave-to {
		transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		opacity: 0;
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

</style>


