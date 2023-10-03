<template>
    <div class="flex justify-center">
        <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6"
            v-for="movie in movies"
            :key="movie.id">

            <a href="#">
                <img class="rounded-t-lg" :src="movie.image" alt="" />
            </a>

            <div class="right-corner-star-content">
                <StarIcon class="text-yellow-500 h-10 right-corner-star"
                    :class="[
                        { 'text-yellow-400' : starIndex <= movie.rating },
                        { 'text-gray-500' : starIndex > movie.rating },
                        { 'cursor-not-allowed' : starIndex == movie.rating }
                    ]">
                </StarIcon>
            </div>

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
.right-corner-star-content {
    float: right;
}
.right-corner-star {
    /* position: absolute; */
    top: 0.5vw;
    left: 36vw;
}

</style>