<template>
	<div id="test">
		<carousel :covers="covers" class="banner"></carousel>
	</div>
</template>
<script>
	import Carousel from './carousel/index.vue';
	export default {
		name: 'app',
		components: { Carousel },
		data(){
			return {
				covers: [
					{
						id: 1,
						img: 'https://img.ireadercity.com/2017-06-20_162311729f09e0d0b.jpg',
						info: '1111我要吃饭'
					},
					{
						id: 2,
						img: 'https://img.ireadercity.com/2017-12-13_10212697585fce47c.jpg',
						info: '2222我不吃饭'
					},
					{
						id: 3,
						img: 'https://img.ireadercity.com/2017-12-25_103235307b3b2bc7a.jpg',
						info: '3333我不吃饭'
					},
					{
						id: 4,
						img: 'https://img.ireadercity.com/2017-12-13_10191827099094cc8.jpg',
						info: '4444我不吃饭'
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
		width: 100%;
		overflow: hidden;
		.banner {
			width: 100%;
			height: 200px;
		}
	}
</style>
