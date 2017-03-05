import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

var activeLang = 'en'
var localeCache = {}

var loadLocale = function (lang) {
  if (localeCache[lang] !== undefined)
    return Promise.resolve(localeCache[lang])

  return fetch('./static/locales/' + lang + '.json')
    .then(function (resp) {
      return resp.json()
    }).then(function (data) {
      localeCache[lang] = data
      return Promise.resolve(data)
    })
}

export default {
  getLang() {
    return activeLang
  },
  setLang(lang) {
    activeLang = lang
    Vue.locale(lang, function () {
      return loadLocale(lang)
    }, function () {
      Vue.config.lang = lang
    })
  }
}
