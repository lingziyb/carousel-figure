<template>
  <div id="app">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        msg: 'lingli'
      }
    }
  };
  if ( module.hot ) {
    console.log( 'hot', module );
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

</style>
