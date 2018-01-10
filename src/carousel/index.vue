<!--
1、自动左右轮播
2、鼠标移入时  停止轮播
3、滑动
-->
<template>
	<div class="carousel" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="computedStyle"
		 ref="container">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'carousel-zll',
		props: {
			// 轮播个数
			total: Number,

			// 切换速度
			speed: {
				default: '2000'
			},

			// 动画过渡时间
			animateTime: {
				default: 500
			},
		},
		data(){
			return {

				// 容器的高宽
				width: 0,

				// 当前移动多少个块
				index: 1,

				// 移动了多少距离
				instance: 0,

				// 进场是否有动画
				haveAnimate: false,

				// 滑动开始时的坐标
				start: 0,

				inter: null,
				diff: 0
			}
		},
		mounted(){
			this.init();
			this.animateFinish();
			this.autoPlay();
		},
		watch: {
			index: function () {
				this.instance = this.index * this.width;
			}
		},
		computed: {
			computedStyle() {
				return {
					'transform': 'translateX(-' + this.instance + 'px)',
					'transition': 'all ' + ( this.haveAnimate ? this.animateTime : 0 ) + 'ms ease'
				};
			}
		},
		methods: {
			clearInter(){
				clearInterval( this.inter );
			},
			init(){
				const container = this.$refs[ 'container' ];
				this.width = this.$refs.container.offsetWidth;
				console.log( this.container );
				this.instance = this.index * this.width;

				// 前后拼接
				if ( !container.firstElementChild || !container.lastElementChild ) return;
				const fistChild = container.firstChild;
				const lastChild = container.lastChild;
				container.insertBefore( lastChild.cloneNode( true ), fistChild );
				container.appendChild( fistChild.cloneNode( true ) );
			},
			deal(){
				if ( this.index > this.total ) {
					this.haveAnimate = false;
					this.index = 1;
				} else if ( this.index < 1 ) {
					this.haveAnimate = false;
					this.index = this.total;
				} else {
					this.haveAnimate = true;
				}
			},
			animateFinish(){
				if ( this.__firstMoveEnd ) return;
				this.__firstMoveEnd = true;
				const events = [ 'webkitTransitionEnd', 'transitionend' ];

				// 注册监听事件 每一个动画结束时
				for ( let i = 0; i < events.length; i++ ) {
					this.$refs[ 'container' ].addEventListener( events[ i ], () => {
						this.deal();
					} );
				}
			},
			autoPlay(){
				this.inter = setInterval( () => {
					this.play();
				}, this.speed );
			},
			play(){
				this.index++;
				this.haveAnimate = true;
			},
			touchStart( e ){
				this.clearInter();

				this.start = e.touches[ 0 ].clientX;
				console.log( 'this.clientX', this.start );
			},
			touchMove( e ){
				this.diff = this.start - e.touches[ 0 ].clientX;
				this.instance = this.index * this.width + this.diff;
			},
			touchEnd( e ){
				this.haveAnimate = true;
				this.index = Math[ this.diff > 0 ? 'ceil' : 'floor' ]( this.instance / this.width );
				this.autoPlay();
			},
		}
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	.carousel {
		display: flex;
		transform: translateX(0px);
		/*transition: all 0.5s ease;*/

		.slide {
			height: 100%;
			width: 100%;
			left: 0;
			top: 0;
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


