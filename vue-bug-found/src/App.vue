<script setup>
import MovieItem from "@/MovieItem.vue";
import { items } from "./movies.json";
import { computed, ref, defineAsyncComponent } from "vue";

// async components
const AppModal = defineAsyncComponent(() => import("@/AppModal.vue"));
const MovieForm = defineAsyncComponent(() => import("@/MovieForm.vue"));

const movies = ref(items);
const currentMovie = ref();
function updateRating(id, rating) {
  movies.value = movies.value.map((movie) => {
    if (movie.id === id) {
      movie.rating = rating;
    }
    return movie;
  });
}
function removeMovie(id) {
//  movies.value.filter((movie) => movie.id !== id);

// filter to create a new array without the movie with the specified id
movies.value = movies.value.filter((movie) => movie.id !== id);
}

// function removeMovie(id) {
//   // Use filter to create a new array without the movie with the specified id
//   let newArray = movies.value.filter((movie) => movie.id !== id);

//   // Update movies.value with the filtered array
//   movies.value = newArray;
// }

// function removeMovie(id) {
//   // Find the index of the movie with the specified id
//   const indexToRemove = movies.value.findIndex((movie) => movie.id === id);

//   // Check if the movie with the given id was found
//   if (indexToRemove !== -1) {
//     // Remove the movie at the found index using splice
//     const removedMovie = movies.value.splice(indexToRemove, 1)[0];

//     // Optionally, you can do something with the removed movie
//     console.log('Removed movie:', removedMovie);
//   } else {
//     console.error('Movie not found');
//   }
// }
function editMovie(id) {
  currentMovie.value = movies.value.find((movie) => movie.id === id);
  showForm();
}
function saveMovie(data) {
  const isNew = !!movies.value.find((movie) => movie.id === data.id);
  if (!isNew) {
    addMovie(data);
  } else {
    updateMovie(data);
  }
}
function updateMovie(data) {
  movies.value = movies.value.map((m) => {
    if (m.id === data.id) {
      data.rating = m.rating;
      return data;
    }
    // return data;
    return m
  });
  hideForm();
}
function addMovie(data) {
  movies.value.push(data);
  hideForm();
}

// movie form
const showMovieForm = ref(false);
function hideForm() {
  showMovieForm.value = false;
  currentMovie.value = null;
}
function showForm() {
  showMovieForm.value = true;
}
const averageRating = computed(() => {
  const avg = movies.value
    .map((movie) => parseInt(movie.rating || 0))
    .reduce((a, b) => a + b, 0);
  return Number(avg / movies.value.length).toFixed(1);
});
const totalMovies = computed(() => {
  return movies.value.length;
});
function removeRatings() {
  movies.value = movies.value.map((movie) => {
    movie.rating = null;
    return movie;
  });
}
</script>

<template>
  <div class="app">
    <AppModal
      v-if="showMovieForm"
      :title="currentMovie?.id ? 'Edit Movie' : 'Add Movie'"
      @close="hideForm()"
    >
      <MovieForm
        v-if="showMovieForm"
        :modelValue="currentMovie"
        @update:modelValue="saveMovie"
        @cancel="hideForm"
      />
    </AppModal>
    <div class="movie-actions-list-wrapper">
      <div class="movie-actions-list-info">
        <span>Total Movies: {{ totalMovies }}</span>
        <span> / </span>
        <span>Average Rating: {{ averageRating }}</span>
      </div>
      <div class="flex-spacer"></div>
      <div class="movie-actions-list-actions">
        <button
          class="self-end movie-actions-list-action-button button-primary justify-self-end"
          @click="removeRatings"
        >
          Remove Ratings
        </button>
        <button
          class="movie-actions-list-action-button"
          :class="{
            'button-primary': !showMovieForm,
            'button-disabled': showMovieForm,
          }"
          @click="showForm"
          :disabled="showMovieForm"
        >
          Add Movie
        </button>
      </div>
    </div>
    <div class="movie-list">
      <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @edit="editMovie(movie.id)"
      @remove="removeMovie(movie.id)"
      @update:rating="updateRating">
      </MovieItem>
    </div>
  </div>
</template>
