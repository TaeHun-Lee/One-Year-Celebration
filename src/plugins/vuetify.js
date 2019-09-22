import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ko from 'vuetify/es5/locale/ko';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        nav_background: '#FFF3E0',
        container_background: '#FCE4EC',
        teal: '#BBDEFB',
      },
    },
  },
    lang: {
      locales: { ko },
      current: 'ko',
    },
  icons: {
    iconfont: 'mdi',
  },
});
