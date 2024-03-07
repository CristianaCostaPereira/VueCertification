<script setup>
  import {ref} from "vue";
  import tuna from '../public/tuna.png'
  import tropical from '../public/tropical-fish.png'
  import guppie from '../public/guppie.png'
  import goldfish from '../public/goldfish.png'
  import purple from '../public/golden-purple-fish.png'
  // import {v4 as uuidv4} from 'uuid';

  const emit = defineEmits(['addFish']);

  const fishList = ref([
    // {type: 'golden', image: golden, selectedImage: goldenSelected, isSelected: false},
    {type: 'tuna', image: tuna, isSelected: false},
    {type: 'tropical', image: tropical, isSelected: false},
    {type: 'guppie', image: guppie, isSelected: false},
    {type: 'goldfish', image: goldfish, isSelected: false},
    {type: 'purple', image: purple, isSelected: false},
  ]);

  const fishName = ref('');

  const selectFish = () => {
    fishList.value.forEach(fish => {
      fish.isSelected = fish.type === type;
    });
  }

  const randomX = () => {
    return Math.floor(Math.random() * 800);
  }

  const randomY = () => {
    return Math.floor(Math.random() * 400);
  }

  const addFish = () => {
    const selectedFish = fishList.value.find(fish => fish.isSelected);

    if (!selectedFish || !fishName.value) {
      return;
    }

    const uniqueId = () => {
      (Math.random() + 1).toString(36).substring(7);
    }

    const payload = {
      type: selectedFish.type,
      name: fishName.value,
      startX: randomX(),
      startY: randomY(),
      id: uniqueId(),
    }

    fishList.value.forEach(fish => {
      fish.isSelected = false;
    });

    fishName.value = '';

    emit('addFish', payload);
  }
</script>

<template>
  <div class="fish-selector">
    <h1>Choose a fish:</h1>

    <div class="fish-list">
      <ul>
        <li
          v-for="fish in fishList"
          :key="fish.type"
          @click="selectFish(fish.type)"
          :class="fish.isSelected ? 'selected' : ''">

          <img :src="fish.isSelected ? fish.selectedImage :fish.image" :alt="fish.type"/>
        </li>
      </ul>
    </div>

    <form @submit.prevent="addFish">
      <input
        v-model="fishName"
        type="text"
        placeholder="Enter a name for your fish"
        required/>
      <!-- <br/> -->
      <div>
        <button type="submit">ADD FISH</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .fish-selector {
    text-align: center;
    height: 680px;
    width: 500px;
    border: 20px solid goldenrod;
    background-color: bisque;
  }

  h1 {
    font-family: "Rancho", serif;
    font-size: 3rem;
  }

  .fish-list {
    display: flex;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 1rem;
    margin: 5px;
  }

  li:hover {
    cursor: pointer;
  }

  img {
    width: 100px;
    margin: 1rem;
  }

  input[type=text] {
    width: 80%;
    margin: 0 0 1rem 0;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: whitesmoke;
    border-radius: 20px;
    font-family: "Times New Roman", serif;
    text-align: center;
  }

  ::placeholder {
    text-align: center;
  }

  button {
    height: 3rem;
    width: 6rem;
    border-radius: 50px;
    background-color: lightblue;
    font-weight: bold;
    font-size: 1rem;
    font-family: "Rancho", serif;
  }
</style>