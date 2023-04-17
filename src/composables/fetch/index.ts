export const useCustomFetch = (url: string, options?: object): any => {
  return fetch(`https://registry.npmjs.org/${url}`, {
    ...options,
  }).then((resp) => resp.json());
};
