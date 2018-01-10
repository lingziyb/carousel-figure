<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
-->
<template>
	<transition-group :name="name" class="carousel" tag="div">
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
				default: '2000'
			},
			time: '',
		},
		data(){
			return {
				current: 0,
				swiperInter: null,
				startX: 0,
				endX: 0,
				test: 9,
				name: 'next'
			};
		},
		created(){
			this.play();
		},
		computed: {},
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
			beforeEnter( el ){
				el.style.transform = 'translateX(100%)';
			},
			enter( el, done ){
				console.log( 'enter' );
			},
			afterEnter( el ){
				el.style.transform = 'translateX(0)';
			},
			leave( el, done ){
				console.log( 'leave' );
			},
			leaveAffter( el ){
				el.style.transform = 'translateX(-100%)';
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
				console.log( e.target.parentNode );
				e.target.parentNode.addEventListener( 'webkitAnimationEnd', function () {

				}, false );

				console.log( '动画已完' );

				const diff = this.endX - this.startX;

				if ( diff == 0 ) return;

				if ( diff < 0 ) {

					// 从右往左滑
					console.log( '从右往左滑，下一张' );
					this.name = 'next';
					this.current++;
					if ( this.current > this.covers.length - 1 ) this.current = 0;
				} else {

					// 从左往右滑
					console.log( '从左往右滑，上一张' );
					this.name = 'last';
					this.current--;
					if ( this.current < 0 ) this.current = this.covers.length - 1;
				}

				this.startX = 0;
				this.endX = 0;
			},
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.next-enter-active,
	.next-leave-active {
		transition: all 0.3s linear;
	}

	.last-enter-active,
	.last-leave-active {
		transition: all 0.3s linear;
	}

	.next-enter {
		transform: translateX(100%);
	}

	.next-enter-to {
		transform: translateX(0);
	}

	.next-leave {
		transform: translateX(0);
	}

	.next-leave-to {
		transform: translateX(-100%);
	}

	.last-enter {
		transform: translateX(-100%);
	}

	.last-enter-to {
		transform: translateX(0);
	}

	.last-leave {
		transform: translateX(0);
	}

	.last-leave-to {
		transform: translateX(100%);
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


