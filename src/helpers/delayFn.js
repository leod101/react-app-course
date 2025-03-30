export const delayFn = async (delay = 1000) => {
  return await new Promise((resolve) => setTimeout(resolve, delay));
};
// This function returns a promise that resolves after the specified delay in milliseconds.
