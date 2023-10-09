<template>
    <div class="flex justify-center">
        <div v-for="movie in movies"
            :key="movie.id">

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6 card-content">
                <div class="star-position">
                    <StarIcon class="text-yellow-500 h-10">
                    </StarIcon>
                    
                    <span class="star-rating-position text-gray-500">
                        {{ movie.rating }}
                    </span>
                </div>

                <a href="#">
                    <img class="rounded-t-lg" :src="movie.image" alt="" />
                </a>
    
                <div class="p-6">
                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ movie.name }}
                    </h5>
           
                    <span
                        class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                        v-for="genre in movie.genres"
                        :key="genre">
    
                        {{ genre }}
                    </span>
    
                    <p class="my-3 font-normal text-gray-700 dark:text-gray-400">
                        {{ movie.description }}
                    </p>
    
                    <div class="flex items-center text-gray-200 mt-5">
                        <div class="pr-3">
                            Rating: ({{ movie.rating }}/5)
                        </div>
                 
                        <button
                            v-for="starIndex in maxRatingStars"
                            :key="`${movie.id}-${starIndex}`">
    
                            <StarIcon
                                class="w-4 h-4 mr-1 h-6"
                                :class="[
                                    { 'text-yellow-400' : starIndex <= movie.rating },
                                    { 'text-gray-400' : starIndex > movie.rating },
                                    { 'cursor-not-allowed' : starIndex == movie.rating }
                                ]"
                                @click="ratingMovie(movie, starIndex)">
                            </StarIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { StarIcon } from '@heroicons/vue/24/solid'
    import { items } from '../movies.json'

    const maxRatingStars = 5
    const movies = ref(items)

    function ratingMovie(movie, newRating) {
        if (movie.rating == newRating) {
            return
        }
        movie.rating = newRating
    }
</script>

<style scoped>
.card-content {
    position: relative;
}

.star-position {
    position: absolute;
    right: 1px;
}

.star-rating-position {
    font-weight: 800;
    position: absolute;
    top: 8px;
    right: 15px;
}
</style>