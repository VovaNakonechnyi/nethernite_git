<template>
  <v-text-field
    :disabled="disabled"
    :label="label"
    :variant="variant"
    :hint="hint"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  ></v-text-field>
</template>

<script lang="ts" setup>
defineEmits(["update:modelValue"]);
interface Props {
  disabled?: boolean;
  label?: string;
  variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | undefined;
  hint?: string | undefined;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  label: "Ex: something...",
  variant: "underlined",
  hint: "Some hints",
  modelValue: "",
});
</script>

<style lang="scss" scoped></style>
