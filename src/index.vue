<template>
	<div id="test">
		<carousel :covers="covers" class="banner"></carousel>
		<carousel2 :covers="covers" class="banner"></carousel2>
	</div>
</template>
<script>
	import Carousel from './carousel/index.vue';
	import Carousel2 from './carousel/index22.vue';
	export default {
		name: 'app',
		components: { Carousel, Carousel2 },
		data(){
			return {
				covers: [
					{
						id: 1,
						img: 'https://img.ireadercity.com/2017-12-13_10191827099094cc8.jpg',
						info: '1111我要吃饭'
					},
					{
						id: 2,
						img: 'https://img.ireadercity.com/2017-12-13_10212697585fce47c.jpg',
						info: '2222我不吃饭'
					},
					{
						id: 3,
						img: 'https://img.ireadercity.com/2017-12-13_10191827099094cc8.jpg',
						info: '3333我要吃饭'
					},
					{
						id: 4,
						img: 'https://img.ireadercity.com/2017-12-13_10212697585fce47c.jpg',
						info: '44444我不吃饭'
					}
				]
			};
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
		.banner {
			width: 100%;
			height: 200px;
		}
	}
</style>
