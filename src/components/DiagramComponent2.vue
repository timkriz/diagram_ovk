<template>
  <div class="diagram">
    <div class="ccc">#1  INDIGO • BRUMEN AWARDS</div>

  </div>
</template>

<script>

export default {
  name: 'DiagramComponent2',
  setup() {
    const count = 0

   
    
    // expose to template and other options API hooks
    return {
      count
    }
  },
}
</script>
<style scoped>
@font-face {
    font-family: 'My Custom Font';
    src: url('./NHaasGroteskTXPro-55Rg.woff') format('woff');
}
svg {
  transform: scale(1.15) rotate(60deg);
  
}
.diagram {
  height: 100%;
}
text, tspan {
  font-family: 'My Custom Font';
  cursor: pointer;
}
.ccc {
  font-family: 'My Custom Font';
  font-size: 40px;
  color: #009fe1;
}
</style>
