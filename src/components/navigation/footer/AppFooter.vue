<template>
  <v-footer absolute inset app min-height="50" width="auto">
    <v-row>
      <v-col sm="6" cols="12">
        <v-row>
          <span>&copy; Nethernite - {{ new Date().getFullYear() }}</span>
        </v-row>
        <v-row>
          <p class="mr-2">Volodymyr Nakonechnyi</p>
          -
          <a
            class="mx-2"
            v-html="'https://github.com/VovaNakonechnyi'"
            href="https://github.com/VovaNakonechnyi"
          ></a>
        </v-row>
      </v-col>
      <v-col sm="6" cols="12">
        <v-row class="d-flex justify-center justify-sm-end">
          <img width="75" src="@/assets/i.jpg" alt="" />
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped></style>
