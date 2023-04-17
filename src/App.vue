<template>
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <NPMGeneral />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from "@/components/navigation/footer/AppFooter.vue";
import NPMGeneral from "@/components/pages/home/npm/NPMGeneral.vue";
</script>
