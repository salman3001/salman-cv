<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="border-[1px] border-primary px-2 py-0.5 rounded-3xl inline">
    {{ title }}
  </div>
</template>
