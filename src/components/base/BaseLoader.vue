<template>
  <div class="loader"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader {
  border: 4px solid rgb(89, 89, 89);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
