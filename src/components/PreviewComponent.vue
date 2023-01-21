<template>
  <div class="preview">
    <div class="title">
      {{title}}
    </div>
    <div style=" padding: 70px 0px;">
      <a :href="link">
        <img :src="imageSrc" dalt="image">
      </a>
    </div>
    <div class="date">
      {{date}}
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'PreviewComponent',
  setup() {
    const count = 0
    const store = useStore()

    const currentTab = computed(() =>  store.state.currentTab)
    const title = computed(() => {
      if(currentTab.value==="prva") return "#1 INDIGO IN BRUMEN AWARDS"
      if(currentTab.value==="druga") return "#2 SUPER VERNACULARS BIO27 / MATERIAL EXPERIMENTATION"
      if(currentTab.value==="tretja") return "#3 IDENTITETA"
      if(currentTab.value==="cetrta") return "#4 BESEDA IZ ČRK, KI TO NISO"
      if(currentTab.value==="peta") return "#5 KOMPOZICIJA ČRK"
      if(currentTab.value==="sesta") return "#6 TIPOGRAFSKI PLAKAT ZA FILM"
      if(currentTab.value==="sedma") return "#7 OLIMPIJADA PIKTOGRAMOV"
      if(currentTab.value==="osma") return "#8 REUSED EMBALAŽA"
      if(currentTab.value==="deveta") return "#9 RAZČLEMBA KNJIGE ANALFABETKA"
      if(currentTab.value==="deseta") return "#10 DIGITALNA KNJIGA"
      if(currentTab.value==="enajsta") return "#11 JAVNI PROSTOR"
      else return ""
    })

    const date = computed(() => {
      if(currentTab.value==="prva") return "10-10-2022  •  INDIVIDUALNA  • PREZENTACIJA IN SPLETNA STRAN"
      if(currentTab.value==="druga") return "17-10-2022  •  SKUPINSKA  • ZGIBANKA"
      if(currentTab.value==="tretja") return "24-10-2022  •  SKUPINSKA  • GRAFIKA/LOGOTIP"
      if(currentTab.value==="cetrta") return "06-11-2022  •  SKUPINSKA  • KOMPOZICIJA FOTOGRAFIJ"
      if(currentTab.value==="peta") return "13-11-2022 •  INDIVIDUALNA  • KOMPOZICIJA ČRK"
      if(currentTab.value==="sesta") return "21-11-2022 •  SKUPINSKA  • DIGITALNI PLAKAT/VIDEO"
      if(currentTab.value==="sedma") return "28-11-2022 •  SKUPINSKA  • KOLABORATIVNO RISANJE"
      if(currentTab.value==="osma") return "05-12-2022 •  SKUPINSKA  • AKUSTIČNI EKSPERIMENT"
      if(currentTab.value==="deveta") return "12-12-2022 •  INDIVIDUALNA  • ANALIZA KNJIGE"
      if(currentTab.value==="deseta") return "19-12-2022 •  SKUPINSKA  • INTERAKTIVNA SPLETNA STRAN"
      if(currentTab.value==="enajsta") return "02-01-2023 •  SKUPINSKA  • DEFINICIJA POJMA IN UPORABNIŠKI VMESNIK"
      else return ""
    })

    const imageSrc = computed(() => {
      if(currentTab.value==="prva") return require('./image1.png')
      if(currentTab.value==="druga") return require('./image2.png')
      if(currentTab.value==="tretja") return require('./image3.png')
      if(currentTab.value==="cetrta") return require('./image4.png')
      if(currentTab.value==="peta") return require('./image5.png')
      if(currentTab.value==="sesta") return require('./image6.png')
      if(currentTab.value==="sedma") return require('./image7.png')
      if(currentTab.value==="osma") return require('./image8.png')
      if(currentTab.value==="deveta") return require('./image9.png')
      if(currentTab.value==="deseta") return require('./image10.png')
      if(currentTab.value==="enajsta") return require('./image11.png')
      else return ""
    })

    const link = computed(() => {
      if(currentTab.value==="prva") return "https://indigo-project-report-ovk.glitch.me/"
      if(currentTab.value==="druga") return "https://drive.google.com/file/d/1yTgBygju56oVA7bu1UBL8moc7mNAr2cE/view?usp=sharing"
      if(currentTab.value==="tretja") return "https://unilj-my.sharepoint.com/:p:/g/personal/lz3523_student_uni-lj_si/EXzf0wIVs_tDsHt_oVscMZkByfV0o7Zqu6lxtpKtXHFBxQ?e=CZwiQF"
      if(currentTab.value==="cetrta") return "https://docs.google.com/presentation/d/1sd9QSc5kb02tef0s43I7baLDsigBQTzBda-3sruJRns/edit?usp=sharing"
      if(currentTab.value==="peta") return "./"
      if(currentTab.value==="sesta") return"https://docs.google.com/presentation/d/1KSFBN9bWIMulMrzSUd3iMkamsk8iEjPrInPSbvL_RtQ/edit?usp=sharing"
      if(currentTab.value==="sedma") return "https://unilj-my.sharepoint.com/:p:/g/personal/lz3523_student_uni-lj_si/ETy09zD0PzRMrCEZ8xIr07AB-tktuRKUz0Jec_YBsRilow?rtime=eJfpsUz52kg&PreviousSessionID=a4b45959-2970-6e9b-f027-aac063260474"
      if(currentTab.value==="osma") return "https://docs.google.com/presentation/d/1R7m0XHd6UxlyVqRbhEMg9Um0LBmjbBn8DeQ8EyHOTmM/edit?usp=sharing"
      if(currentTab.value==="deveta") return "https://drive.google.com/file/d/1bSQsK9b_r2gwY3ICfpLmWQIT9c3fsFy7/view?usp=sharing"
      if(currentTab.value==="deseta") return "https://ovk-svila-analfabetka.glitch.me"
      if(currentTab.value==="enajsta")return "https://www.figma.com/file/WmsIrnrr4MCUWOIzHKhV8t/Digital-product-interface?t=bJBrG97ILRkiH3dR-1"
      else return ""
    })
    
    
    // expose to template and other options API hooks
    return {
      count,
      currentTab,
      title,
      imageSrc,
      date,
      link
    }
  },
}
</script>
<style scoped>
@font-face {
    font-family: 'My Custom Font';
    src: url('./NHaasGroteskTXPro-55Rg.woff') format('woff');
}

.preview {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
text, tspan {
    font-family: 'My Custom Font';
}
.ccc {
  font-family: 'My Custom Font';
}
.title{
  font-family: 'My Custom Font';
  color: #f22512;
  font-size: 35px;
  letter-spacing: 8px;
  text-align: left;
  padding: 10px 85px;
}
.date{
  font-family: 'My Custom Font';
  color: #f22512;
  font-size: 25px;
  letter-spacing: 8px;
  text-align: left;
  padding: 10px 85px;
}
img {
  width: 70%;
  border:#f22512 8px solid;
}
</style>
