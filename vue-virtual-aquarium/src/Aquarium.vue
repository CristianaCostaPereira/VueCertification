<script setup>
  import Fish from "./Fish.vue";

  defineProps({
    allFish: {
      type: Array,
      default: () => [] 
    },
  });
</script>

<template>
  <div class="aquarium" id="aquarium">
    <Fish
      v-for="fish in allFish"
      :key="fish.name"
      v-bind="fish">
    </Fish>

    <!-- v-bind="fish" when binding multiple properties of an object using props -->
  </div>
</template>

<style scoped>
.aquarium {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("/bg.jpg") no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
</style>
