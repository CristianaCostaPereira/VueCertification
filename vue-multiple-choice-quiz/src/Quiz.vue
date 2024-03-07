<script setup>
import { ref } from "vue";
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mercury",
  },
  // Add more questions as needed
];

const error = ref('Incorrect');

const correctAnswer = ref('Correct')
</script>

<template>
  <form class="max-w-md mx-auto">
    <div
      v-for="(question, index) in questions"
      :key="question.index"
      class="relative z-0 w-full mb-5 group">

      <div>
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
          {{ question.question }}
        </h3>

        <div
          v-for="option in question.options"
          :key="option"
          class="flex items-center mb-4">

          <input
            id="answer-options"
            type="radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

            <label
              for="answer-options"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">

              {{ option }}
            </label>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

      Submit
    </button>
  </form>
</template>