<template>
  <div class="hello">
    <!--<div class= "ovk_text_wrapper">

      <div class="ovk_text">OVK</div>
    </div>-->
    <DiagramComponent/>
    <PreviewComponent/>
  </div>
</template>

<script>
import DiagramComponent from './DiagramComponent.vue'
//import DiagramComponent2 from './DiagramComponent2.vue'
import PreviewComponent from './PreviewComponent.vue'
export default {
  name: 'HelloWorld',
  components: {
    DiagramComponent,
    PreviewComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: 'My Custom Font';
    src: url('./NHaasGroteskTXPro-55Rg.woff') format('woff');
}
h1 {
  font-family: 'My Custom Font';
}
.ovk_text {
 /* transform: rotate(-90deg) translate(-45px, 0px);*/
  transform-origin: left bottom;
  font-size: 40px;
  font-family: 'My Custom Font';
  color: #009fe1;
}
.ovk_text_wrapper {
  display: flex;
  align-items: flex-start;
  padding-left:100px;
  padding-top:50px
}
.hello {
  height: 100%;
  display:flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
