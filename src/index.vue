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
						img: 'https://img.ireadercity.com/2017-12-13_10191827099094cc8.jpg',
						info: '1111我要吃饭'
					},
					{
						img: 'https://img.ireadercity.com/2017-12-13_10212697585fce47c.jpg',
						info: '2222我不吃饭'
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
