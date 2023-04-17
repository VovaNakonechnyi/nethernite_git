import { useCustomFetch } from "@/composables/fetch";
import { NPMPackagesApiResult } from "@/interfaces";
const npmSearch = "-/v1/search";
export default () => ({
  apiNpmSearchPackage(searchQuery: string): Promise<NPMPackagesApiResult> {
    return useCustomFetch(`${npmSearch}?text=${searchQuery}`, {
      method: "GET",
    });
  },
});
