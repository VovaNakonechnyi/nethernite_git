<template>
  <div :class="`text-${classes}`">{{ text }}</div>
</template>

<script lang="ts" setup>
interface Props {
  classes: string;
  text: string;
}

withDefaults(defineProps<Props>(), {
  classes: "h1",
  text: "",
});
</script>

<style lang="scss" scoped></style>
