<script setup>
  import Aquarium from "./Aquarium.vue";
  import FishForm from "./FishForm.vue";
  import {onMounted, ref} from "vue";
  
  const fishData = {
    name: '',
    type: '',
    startX: 0,
    startY: 0,
    id: '',
  }

  const minWidth = 1520;
  const minHeight = 860;
  const aquarium = ref([fishData.value]);
  const isAboveResolution = ref(false);

  // const reloadPage = () => {
  //   location.reload();
  // };

  onMounted(() => {
    isAboveResolution.value =
      window.innerWidth >= minWidth && window.innerHeight >= minHeight;
  });

  const addFish = (payload) => {
    aquarium.value.push(payload);
  }

  const removeFish = (id) => {
    const index = aquarium.value.findIndex(fish => fish.id === id);
    aquarium.value.splice(index, 1);
  }
</script>

<template>
  <!-- <div v-if="isAboveResolution">
    <header><h1 class="font-effect-shadow-multiple">VUEAquarium</h1></header>

    <main>
      <Aquarium :fish-tank-fish="aquarium" @remove-fish="removeFish"/>
      <FishForm @add-fish="addFish"/>
    </main>
  </div> -->

    <div>
      <header><h1 class="font-effect-shadow-multiple">VUEAquarium</h1></header>

      <main>
        <Aquarium :fish-tank-fish="aquarium" @remove-fish="removeFish"/>
        <FishForm @add-fish="addFish"/>
      </main>
    </div>
</template>