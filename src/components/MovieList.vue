<template>
    <div id="movie-list">
        <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie" v-if="filteredMovies.length"></movie-item>
        <div v-else-if="movies.length">No movies</div>
        <div v-else>Loading</div>
    </div>
</template>
<script>
  import genres from '../util/genres';
  import MovieItem from './MovieItem.vue'

  export default {
    props: [ 'genre', 'time', 'movies' ],
    methods: {
      moviePassesGenreFilter(movie) {
        if (!this.genre.length) {
          return true;
        } else {
          let movieGenres = movie.movie.Genre.split(', ');
          let matched = true
          this.genre.forEach(genre => {
            if (movieGenres.indexOf(genre) === -1) {
              matched = false
            }
          })
          return matched
        }
      }
    },
    components: {
      MovieItem
    },
    computed: {
      filteredMovies() {
        return this.movies.filter(this.moviePassesGenreFilter);
      }
    }
  }
</script>