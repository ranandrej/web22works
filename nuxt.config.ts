import { defineNuxtConfig } from "nuxt/config";
import type {NuxtConfig} from '@nuxt/types'
// https://nuxt.com/docs/api/configuration/nuxt-config
const config: NuxtConfig={
    target:"static",
    ssr:false,
    generate:{
        fallback:true
    },
        head:{
            link:[
                {rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"}
            ],
            title:'WebWorks-Blog'
        },
        loading: {
            color: '#3498db',
            height: '2px',
            duration: 2000
          },
  

};

export default config
