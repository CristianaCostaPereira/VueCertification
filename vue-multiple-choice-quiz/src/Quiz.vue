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

  const currentIndex = ref(0);
  const selectedAnswer = ref(null);
  const score = ref(0);
  const quizState = ref("initial");

  function submitAnswer() {
    if (!selectedAnswer.value) {
      return;
    }

    if (selectedAnswer.value === questions[currentIndex.value].answer) {
      score.value++;
    }

    quizState.value = "answered";
  }

  function nextQuestion() {
    if (currentIndex.value < questions.length - 1) {
      currentIndex.value++;
      selectedAnswer.value = null;
      quizState.value = "initial";
    } else {
      quizState.value = "completed";
    }
  }
</script>

<template>
  <div v-if="quizState !== 'completed'">
    <h2 class="p-4 text-4xl border-b border-white">
      {{ questions[currentIndex].question }}
    </h2>

    <div
      v-for="(option, index) in questions[currentIndex].options"
      :key="index"
      class="flex px-12 py-4 text-3xl gap-x-4">

      <input
        type="radio"
        :id="'option-' + index"
        :value="option"
        :disabled="quizState === 'answered'"
        v-model="selectedAnswer"
      />

      <label :for="'option-' + index">
        {{ option }}
      </label>
    </div>

    <div class="flex items-center justify-between space-x-5">
      <div class="flex-1">
        <p
          v-if="quizState === 'answered'"
          :class="{
            'text-red-500 bg-red-500/20 border-red-500': selectedAnswer !== questions[currentIndex].answer,
            'text-green-500 bg-green-500/20 border-green-500': selectedAnswer === questions[currentIndex].answer,
          }"
          class="py-1.5 border text-center">

          {{ selectedAnswer === questions[currentIndex].answer ? "Correct!" : "Incorrect!" }}
        </p>
      </div>

      <button
        v-if="quizState === 'initial'"
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
        @click="submitAnswer">

        Submit
      </button>

      <button
        v-if="quizState === 'answered'"
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
        @click="nextQuestion">

        Next
      </button>
    </div>
  </div>

  <div v-else class="text-4xl">
    <h2>Your final score: {{ score }} out of {{ questions.length }}</h2>
  </div>
</template>