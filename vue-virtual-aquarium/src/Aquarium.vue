<script setup>
  import Fish from "./Fish.vue";

  // const fishData = {
  //   name: string,
  //   type: string,
  //   startX: number,
  //   startY: number,
  //   id: string,
  // }

  const props = defineProps({
    aquarium: {
      type: Array,
      required: true,
    }
  });

  const emit = defineEmits(['addFish', 'removeFish']);

  const addFish = () => {
    emit('addFish');
  };

  const removeFish = (id) => {
    emit('removeFish', id);
  }
</script>

<template>
  <div class="aquarium" ref="fishTank">
    <Fish
      v-for="fish in props.aquarium"
      :key="fish.id"
      :name="fish.name"
      :type="fish.type"
      :start-x="fish.startX"
      :start-y="fish.startY"
      :id="fish.id"
      @remove-fish="removeFish">
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
