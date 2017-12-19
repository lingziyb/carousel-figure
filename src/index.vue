<template>
	<div id="test">
		<carousel class="carousel">
			<img src="https://img.ireadercity.com/2017-12-13_10191827099094cc8.jpg" alt="">
			<img src="https://img.ireadercity.com/2017-12-13_10212697585fce47c.jpg" alt="">
		</carousel>
	</div>
</template>

<script>
	import Carousel from './carousel/index.vue';
	export default {
		name: 'app',
		components: { Carousel },
		data(){
			return {};
		}
	};
</script>

<style rel="stylesheet/less" lang="less">
	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}

	#test {
		.carousel {

		}
	}
</style>
