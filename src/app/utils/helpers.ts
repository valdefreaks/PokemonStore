export const getActualRoute = (url: string) => {
  const route = url.split('/');
  return route[route.length - 1];
};
