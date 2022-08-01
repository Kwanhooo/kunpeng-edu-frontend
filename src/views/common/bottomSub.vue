<template>
  <div class="container">
    <div class="sloganContainer">
      <img src="../../assets/bottomSlogan.png" class="slogan" >
    </div>
    <div class="authorContainer">
      <a class="author" href="https://gitee.com/hixs">@Hixs</a>
      <a class="author" href="https://gitee.com/Kwanhooo">@Kwanhooo</a>
      <a class="author" href="https://gitee.com/wjh32300756">@吴佳豪</a>
      <a class="author" href="http://">@luo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomSub"
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 6em;
  background-color:rgb(64,65,69);
}
.sloganContainer{
 text-align: center;
}
.slogan{
  width:20em;
}
.authorContainer{
  text-align: center;
}
.author{
  margin-left:2em;
  color:rgb(0,0,0);
}
</style>