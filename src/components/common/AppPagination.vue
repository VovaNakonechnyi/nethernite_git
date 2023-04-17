<template>
  <v-pagination
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :length="Math.ceil(length)"
  ></v-pagination>
</template>
<script lang="ts" setup>
defineEmits(["update:modelValue"]);

interface Props {
  modelValue?: number;
  length?: number;
}

withDefaults(defineProps<Props>(), {
  modelValue: 1,
  length: 2,
});
</script>

<style lang="scss" scoped></style>
