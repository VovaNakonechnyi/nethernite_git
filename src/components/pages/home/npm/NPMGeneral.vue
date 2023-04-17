<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="6" class="text-center">
          <AppTitle classes="h4" text="Search NPM package" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col xl="4" cols="8">
          <AppInput
            label="Ex: jquery"
            variant="underlined"
            hint="Min 2 letters"
            v-model.trim="search"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <AppLoader v-if="search.length && !packages.length" />
        <template v-else>
          <v-col
            md="6"
            lg="4"
            xl="3"
            cols="12"
            v-for="item in paginatedPackages"
            :key="item.version"
          >
            <NPMCard :item="item" />
          </v-col>
        </template>
      </v-row>
      <v-row v-if="packages.length">
        <v-col>
          <AppPagination
            v-model="currentPage"
            :length="paginationPagesNumbers"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import AppTitle from "@/components/common/AppTitle.vue";
import AppInput from "@/components/common/AppInput.vue";
import AppLoader from "@/components/common/AppLoader.vue";
import AppPagination from "@/components/common/AppPagination.vue";
import NPMCard from "@/components/pages/home/npm/NPMCard.vue";
import { Ref, ref, watch } from "vue";
import { useStore } from "vuex";
import { NPMPackage } from "@/interfaces";
import { computed } from "vue";
const store = useStore();

const fetchPackagesNpm = async (search: string): Promise<NPMPackage[]> =>
  await store.dispatch("npm/fetchNPMPackeges", search);
const packages: Ref<NPMPackage[]> = ref([]);

const search = ref("");
watch(search, async () => {
  if (search.value.length < 2) return;
  packages.value = await fetchPackagesNpm(search.value);
  if (!packages.value.length) return;
});

const currentPage = ref(1);
const itemsPerPage = ref(10);
const paginationPagesNumbers = computed(
  () => packages.value.length / itemsPerPage.value
);
const paginatedPackages = computed(() => {
  if (!packages.value.length) return;
  const from = (currentPage.value - 1) * itemsPerPage.value;
  const to = from + itemsPerPage.value;
  return packages.value.slice(from, to);
});
</script>

<style lang="scss" scoped></style>
