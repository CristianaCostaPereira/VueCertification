<script setup>
defineProps({
  label: String,
  number: Number,
});
</script>

<template>
  <div class="text-center segment">
    <div class="relative pt-10 overflow-hidden">
      <transition>
        <!-- It enables Vue.js to perform efficient updates and transitions as the countdown progresses because the countdown values are going to change dynamically. -->
        <span
          :key="number"
          class="numbers text-green absolute top-0 left-[50%]">

          {{ number }}
        </span>
      </transition>
    </div>

    <span class="block pt-2 label">{{ label }}</span>
  </div>
</template>

<style>
.segment {
  width: 80px;
}
.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}
.label {
  font-size: 16px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from {
  transform: translateY(-100%) translateX(-50%);
}
.v-leave-to {
  transform: translateY(100%) translateX(-50%);
}
.v-enter-to,
.v-leave-from {
  transform: translateY(0px) translateX(-50%);
}
.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
}
</style>
