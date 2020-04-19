<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components:{
    }
  }
</script>

<style>
  @import "assets/reset.css";
  html,body,#app{
    height:100%;
  }
    #app{
        background-image: linear-gradient(to bottom,#fff,#ddd,#ccc);
    }
</style>



