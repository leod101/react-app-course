import { delayFn } from "../helpers/delayFn"; // Assuming you have a delay function in helpers
import { useState } from "react";

export const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFn = async (agr) => {
    try {
      setLoading(true);
      setError(""); // Reset error state before fetching
      await delayFn(); // Simulate a delay

      const response = await callback(agr);

      return response;
    } catch (error) {
      setError(error.message); // Set error state if there's an error
    } finally {
      setLoading(false);
    }
  };

  return [fetchFn, isLoading, error];
};
