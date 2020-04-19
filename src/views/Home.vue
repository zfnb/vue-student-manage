<template>
  <div id="home">
    <sys-header></sys-header>
    <left-menu></left-menu>
    <div class="right-content">
      <router-view/>
    </div>
    <bottom-footer/>
  </div>
</template>

<script>
  import SysHeader from "@/components/SysHeader";
  import LeftMenu from "@/components/LeftMenu";
  import RightContent from "@/components/RightContent";
  import BottomFooter from "@/components/Footer";
  export default {
    beforeRouteEnter(to,from,next){
          next(vm=>{
            if(vm.$isLogin){
               next();
            }
          });
    },
    components:{
      SysHeader,
      LeftMenu,
      RightContent,
      BottomFooter,
    }
  }
</script>

<style scoped>
    #home{
      height: 100%;
    }
</style>



