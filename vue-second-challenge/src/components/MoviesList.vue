<template>
    <div class="flex items-center">
        <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6"
            v-for="movie in movies"
            :key="movie.id">

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

                <p class="my-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.description }}</p>

                <div class="flex items-center text-gray-200 mt-2.5 mb-5">
                    <div class="pr-3">
                        Rating: ({{ movie.rating }}/5)
                    </div>

                    <div
                        v-for="index in movie.rating"
                        :key="index">

                        <!-- <StarIcon style="color:rgb(233, 192, 26); height: 20px;"></StarIcon> -->
                        <StarIcon class="w-4 h-4 text-yellow-400 mr-1"></StarIcon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { StarIcon } from "@heroicons/vue/24/solid"
    import { items } from "../movies.json"

    const movies = ref(items)
</script>