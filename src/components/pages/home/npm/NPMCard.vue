<template>
  <v-card :min-height="minHeight" class="d-flex flex-column mx-auto">
    <v-card-text>
      <div>{{ item.author?.name }}</div>
      <p class="text-h4 text--primary">{{ item.name }}</p>
      <template v-if="item.keywords?.length">
        <span
          v-for="keyword in item.keywords.slice(0, 3)"
          :key="keyword"
          class="text-h6 text-blue"
        >
          {{ keyword }},
        </span>
      </template>
      <p>Date: {{ item.date }}</p>
      <div class="text--overline text-subtitle-1">
        {{ item.description }}
      </div>
    </v-card-text>
    <AppModal btn-title="Learn More">
      <template #body>
        <v-row class="my-1">
          <v-col>
            <v-row justify="center" align="center">
              <div class="text-h5 mx-2">Publisher</div>
              :

              <div class="mx-2">{{ item.publisher?.username ?? "-" }}</div>
            </v-row>
            <v-row justify="center" align="center">
              <div class="text-h5 mx-2">Email</div>
              :

              <div class="mx-2">{{ item.publisher?.email ?? "-" }}</div>
            </v-row>
            <v-row justify="center" align="center">
              <div class="text-h5 mx-2">Version</div>
              :

              <div class="mx-2">{{ item.version ?? "-" }}</div>
            </v-row>
            <v-row justify="center" align="center">
              <div class="text-h5 mx-2">Link</div>
              :
              <div class="mx-2">
                <a
                  class="wrap-link"
                  v-if="item.links.npm"
                  v-html="item.links.npm"
                  :href="item.links.npm"
                ></a>
                <template v-else> - </template>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </template>
    </AppModal>
  </v-card>
</template>

<script lang="ts" setup>
import AppModal from "@/components/common/AppModal.vue";
import { NPMPackage } from "@/interfaces";
interface Props {
  item: NPMPackage;
  minHeight?: string;
}

withDefaults(defineProps<Props>(), {
  minHeight: "300px",
});
</script>

<style lang="scss" scoped>
.wrap-link {
  word-break: break-all;
}
</style>
