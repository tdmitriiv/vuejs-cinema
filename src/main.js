import Vue from 'vue'
import './style.scss'

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import VueResourse from 'vue-resource'
Vue.use(VueResourse)

new Vue({
  el: '#app',
  data() {
    return {
      genre: [],
      time: [],
      movies: []
    }
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title)
      } else {
        let index = this[category].indexOf(title);
        if (index) {
          this[category].splice(index, 1)
        }
      }
    }
  },
  components: {
    MovieList,
    MovieFilter
  },
  created() {
    this.$http.get('/api').then(response => {
      this.movies = response.data;
    })
  }
})