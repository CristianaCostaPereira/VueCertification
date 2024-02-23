<script setup>
// Start here your app logic
import { ref } from 'vue';

const current = ref(0);
const operator = ref(null);

function clear() {
  current.value = ''
}

function percentage() {
  current.value = `${parseFloat(current.value)/100}`
}

function append(number) {
  current.value = `${current.value}${number}`
}

function dot(params) {
  if (current.value.indexOf('.') === -1) {
    append('.')
  }
}

function equal(params) {
  current.value = eval(current.value);
}
</script>

<template>
  <!--	Start here your template -->
  <div class="min-w-screen min-h-screen bg-zinc-600 flex items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" style="max-width:300px">
      <div class="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
        <div class="w-full py-5 px-6 text-6xl text-white font-thin">
          {{ current || 0 }}
        </div>
      </div>

      <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
        <div class="flex w-full">
            <!-- Clear -->
            <div class="w-2/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                @click="clear">
                C
              </button>
            </div>

            <!-- Percentage -->
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                @click="percentage('%')">
                %
              </button>
            </div>

            <!-- Division -->
            <div class="w-1/4 border-r border-b border-indigo-400">
              <button
                class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light"
                @click="append('/')">
                ÷
              </button>
            </div>
        </div>

        <div class="flex w-full">
          <!-- Number 7 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('7')">
              7
            </button>
          </div>

          <!-- Number 8 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button 
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('8')">
              8
            </button>
          </div>

          <!-- Number 9 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('9')">
              9
            </button>
          </div>

          <!-- Multiplication -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('*')">
              *
            </button>
          </div>
        </div>

        <div class="flex w-full">
          <!-- Number 4 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('4')">
              4
            </button>
          </div>

          <!-- Number 5 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('5')">
              5
            </button>
          </div>

          <!-- Number 6 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('6')">
              6
            </button>
          </div>

          <!-- Substraction -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('-')">
              -
            </button>
          </div>
        </div>

        <div class="flex w-full">
          <!-- Number 1 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('1')">
              1
            </button>
          </div>

          <!-- Number 2 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('2')">
              2
            </button>
          </div>

          <!-- Number 3 -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('3')">
              3
            </button>
          </div>

          <!-- Add -->
          <div class="w-1/4 border-r border-b border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('+')">
              +
            </button>
          </div>
        </div>

        <div class="flex w-full">
          <!-- Number zero -->
          <div class="w-1/4 border-r border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="append('0')">
              0
            </button>
          </div>

          <!-- Decimal / dot -->
          <div class="w-1/4 border-r border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
              @click="dot()">
              .
            </button>
          </div>

          <!-- Equal -->
          <div class="w-2/4 border-r border-indigo-400">
            <button
              class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
              @click="equal()">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>