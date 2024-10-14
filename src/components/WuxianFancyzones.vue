<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();

console.log('this is Wuxian Fancyzones', props.msg);
</script>

<template>
  <div class="wuxian-fancyzones">{{ msg }}</div>
</template>

<style lang="scss">
.wuxian-fancyzones {
  background-color: red;
}
</style>
