<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> {{ btnTitle }} </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <slot name="body"></slot>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  btnTitle: string;
  minWidth?: string;
}

withDefaults(defineProps<Props>(), {
  btnTitle: "Open",
  minWidth: "600px",
});

const dialog = ref(false);
</script>

<style lang="scss" scoped></style>
