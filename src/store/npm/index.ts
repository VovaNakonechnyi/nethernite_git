import api from "@/api";
import { NPMPackagesApiResult, NPMPackage } from "@/interfaces";
const { npm } = api;
const state = () => ({});
const getters = {};
const mutations = {};
const actions = {
  async fetchNPMPackeges(ctx: any, payload: string): Promise<NPMPackage[]> {
    try {
      return await npm
        .apiNpmSearchPackage(payload)
        .then((data: NPMPackagesApiResult) =>
          data.objects.map((item) => item.package)
        );
    } catch (error) {
      throw error;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
