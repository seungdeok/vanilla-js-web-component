const baseURL = "http://localhost:3000/api";

const cache = {};

const client = {
  get: async (path) => {
    try {
      const url = `${baseURL}${path}`;
      if (cache[url]) {
        return cache[url];
      }

      const response = await fetch(url, {
        method: "GET",
      });

      const data = await response.json();
      cache[url] = data;

      return data;
    } catch (err) {
      throw new Error("Server Error");
    }
  },
};

export default client;
