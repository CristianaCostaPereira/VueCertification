<script setup>
  import Fish from "./Fish.vue";

  defineProps({
    allFish: { type: Array, default: () => [] },
  });
</script>

<template>
  <div class="aquarium" id="aquarium">
    <Fish
      v-for="fish in allFish"
      :key="fish.name"
      v-bind="fish">
    </Fish>
  </div>
</template>

<style scoped>
  .aquarium {
    display: inline-block;
    width: 1024px;
    height: 680px;
    background-image: url('../public/bg.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    border: 20px solid goldenrod;
  }
</style>
