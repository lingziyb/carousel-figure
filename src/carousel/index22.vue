<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
-->
<template>
	<div class="carousel" tag="div">
		<div class="slide-img">
			<transition name="new">
				<img v-if="isShow" :src="covers[current].img">
			</transition>

			<transition name="old">
				<img v-if="!isShow" :src="covers[current].img">
			</transition>
		</div>

		<div class="slide" v-for="(cover) in covers" :key="cover.id">
			<p>{{cover.info}}</p>
		</div>
	</div>
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
				isShow: true
			};
		},
		created(){
			this.play();
		},
		methods: {
			autoPlay(){
				this.isShow = false;
				setTimeout( () => {
					this.isShow = true;
					this.current++;
					if ( this.current >= this.covers.length ) {
						this.current = 0;
					}
				}, 10 )
			},
			play(){
				setInterval( this.autoPlay, 2000 );
			}
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.new-enter-active {
		transition: all .5s;
	}

	.new-enter {
		transform: translateX(900px); //大小需要和 show-img 外框的大小一致
	}

	.old-leave-active {
		transition: all .5s;
		transform: translateX(-900px); //大小需要和 show-img 外框的大小一致
	}

	.slide-img {
		width: 100%;
		img {
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.carousel {
		position: relative;
		margin: 15px 15px 15px 0;
		width: 900px;
		height: 500px;
		overflow: hidden;

		.slide {
			width: 100%;
			height: 100%;
			position: absolute;
			bottom: 10px;
			right: 15px;

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


