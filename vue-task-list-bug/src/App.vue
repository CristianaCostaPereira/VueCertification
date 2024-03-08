<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { reactive, ref } from "vue";

let tasks = ref([
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
]);
const addTask = () => {
  const newTask = { id: Math.random(), name: `Task ${tasks.value.length + 1}` };
  tasks.value.push(newTask);
};
// const removeTask = (id) => {
//   tasks = tasks.value.filter((task) => task.id !== id);
// };

// Will filter the tasks array based on the provided id and update the tasks ref with the new filtered array. This should trigger the reactivity in your Vue.js component and reflect the changes in the template.
const removeTask = (id) => {
  // Filter the tasks array to remove the task with the specified id
  let updatedTasks = tasks.value.filter((task) => {
    return task.id !== id;
  });

  // Update the tasks ref with the new filtered array to trigger a reactivity update
  tasks.value = updatedTasks;

  // Another solution
  // tasks.value = tasks.value.filter((task) => task.id !== id); 
};
</script>

<template>
  <div class="wrapper">
    <h1>Task List</h1>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id">

        <input type="text" v-model="task.name" />

        <button @click="removeTask(task.id)" data-test="button-remove">
          <XMarkIcon class="w-full h-full" />
        </button>
      </li>
    </ul>
    <button @click="addTask" data-test="button-add">Add Task</button>
  </div>
</template>
