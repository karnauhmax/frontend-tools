<template>
  <button>
    <ContentCopy
      @click="copyHandler"
      fillColor="rgba(235, 235, 235, .6)"
      :size="18"
    />
  </button>
</template>

<script setup>
import ContentCopy from "vue-material-design-icons/ContentCopy.vue";

const props = defineProps({
  contentToCopy: {
    type: [String, Number],
    required: true
  }
});

const emits = defineEmits(["copied"]);

const copyHandler = () => {
  navigator.clipboard.writeText(props.contentToCopy);
  emits("copied");
};
</script>

<style lang="scss" scoped></style>
