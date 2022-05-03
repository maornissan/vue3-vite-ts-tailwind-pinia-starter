<template>
  <div class="w-full h-screen flex justify-center items-center">
    {{ txt }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const txt = ref("Hello world");
</script>

<style></style>
