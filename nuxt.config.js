export default {
  mode: "universal",
  server: {
    host: "0.0.0.0", // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/css/main.scss", "~/css/style.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "~/plugins/vuelidate" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  serverMiddleware: ["~/api/contact"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "nuxt-fontawesome", // Imports FontAwesome 5 SVG icons
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Slovenski",
            code: "sl",
            iso: "sl-SL",
            file: "sl-SL.js",
          },
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en-US.js",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "sl",
      },
    ], // multilanguage website using Nuxt.js and nuxt-i18n module
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons", // Solid icons
        icons: [
          "faCookieBite",
          "faCommentDots",
          "faEnvelope",
          "faGrinWink",
          "faHeart",
          "faInfo",
        ],
      },
      {
        set: "@fortawesome/free-brands-svg-icons", // Brand icons
        icons: [
          "faDev",
          "faFacebook",
          "faTwitter",
          "faInstagram",
          "faYoutube",
          "faGithub",
        ],
      },
    ],
  },
};
