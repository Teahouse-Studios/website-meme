import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#156FE6',
                secondary: colors.red,
                accent: colors.indigo.accent3,
                error: colors.red.darken3,
                warning: colors.pink.darken2,
                info: colors.blue.darken3,
                success: colors.green.lighten1
            }
        }
    },
    lang: {
        locales: { zhHans },
        current: 'zhHans',
      },
});
