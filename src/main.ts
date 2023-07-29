import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoMailSharp,BiTelephoneFill,MdLocationon,RiGlobalFill , BiLinkedin ,BiGithub,FaExternalLinkAlt  } from "oh-vue-icons/icons";

addIcons(IoMailSharp,BiTelephoneFill,MdLocationon,RiGlobalFill,BiLinkedin,BiGithub,FaExternalLinkAlt);

createApp(App)
    .component('v-icon',OhVueIcon)
    .mount('#app')
