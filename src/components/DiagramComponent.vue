<template>
  <div class="diagram">
  <div class="title">OBLIKOVANJE VIZUALNIH KOMUNIKACIJ</div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="1039.394px" height="900px" viewBox="0 0 1039.394 900" enable-background="new 0 0 1039.394 900" xml:space="preserve">
      <path id="SVGID_x5F_1_x5F_" fill="none" d="M128.374,77h774.667v63h-772v127h772v63h-772v122h772v63h-772v120h771v61h-771v118h772
	v61H128.374v120.001h774.667v135.332"/>
      <text><textPath  xlink:href="#SVGID_x5F_1_x5F_" startOffset="0%" text-anchor="start" direction="normal">

         <animate 
          attributeName="startOffset"
          values="100%;0%"
          keyTimes="0;1"
          dur="1s"
          repeatCount="1"
        />

      <!--<tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="8">TIM KRIŽNIK • OBLIKOVANJE VIZUALNIH KOMUNIKACIJ • 15 • 01 • 2023 DIAGRAM  NALOG </tspan>-->
      <tspan class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">DIAGRAM NALOG </tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('prva')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#1 INDIGO IN BRUMEN AWARDS</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('druga')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#2 SUPER VERNACULARS BIO27 MATERIAL EXPERIMENTATION</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('tretja')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#3 IDENTITETA</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('cetrta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#4 BESEDA IZ ČRK, KI TO NISO</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('peta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#5 KOMPOZICIJA ČRK</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('sesta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#6 TIPOGRAFSKI PLAKAT ZA FILM</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('sedma')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#7 OLIMPIJADA PIKTOGRAMOV</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('osma')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#8 "REUSED" EMBALAŽA</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('deveta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#9 RAZČLEMBA KNJIGE ANALFABETKA</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('deseta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#10 DIGITALNA KNJIGA</tspan>
      <tspan fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="35" letter-spacing="10"> • </tspan>
      <tspan @click="changeValue('enajsta')" class = "group1" fill="#009FE1" font-family="'NHaasGroteskTXPro-55Rg'" font-size="25" letter-spacing="8">#11 JAVNI PROSTOR</tspan>

      </textPath>
      </text>
      <path id="SVGID_x5F_2_x5F_" fill="none" d="M1188.832,752.065h774.667v63h-772v127h772v63h-772v122h772v63h-772v120h771v61h-771v118
        h772"/>
    </svg>


  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'DiagramComponent',
  setup() {
    const count = 0
    const store = useStore()

     const changeValue = (nV) => {
      store.commit('changeValue', nV)
    }

    onMounted(() => {

      const selectors= [".prvi", ".drugi",".tretji",".cetrti"]
      for (let i=0; i<11; i++) {
        let tspanElements = document.querySelectorAll(selectors[i]);

        tspanElements.forEach(element => {
          element.addEventListener("mouseover", () => {
            tspanElements.forEach(el => {
              el.style.fill = "red";
            });
          });
          element.addEventListener("mouseout", () => {
            tspanElements.forEach(el => {
              el.style.fill = "#009FE1";
            });
          });
        });
      }
    })
    
    // expose to template and other options API hooks
    return {
      count,
      changeValue
    }
  },
}
</script>
<style scoped>
@font-face {
    font-family: 'My Custom Font';
    src: url('./NHaasGroteskTXPro-55Rg.woff') format('woff');
}
.title{
  font-family: 'My Custom Font';
  color: #009FE1;
  font-size: 35px;
  letter-spacing: 8px;
  text-align: left;
  padding: 10px 85px;
}
svg {
  transform: translate(-40px, 0px);
  padding-top: 30px;
}
.diagram {
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  align-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

}
text, tspan {
  font-family: 'My Custom Font';
  cursor: pointer;
}
.group1:hover {
  fill: #f22512;
}

textPath {
  animation: animate-text 4s linear infinite alternate;
}
@keyframes animate-text {
  from {
    offset: 0%;
  }
  to {
    offset: 100%;
  }
}
</style>
