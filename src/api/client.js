const baseURL = "http://localhost:3000/api";

const client = {
  get: async (path) => {
    try {
      const response = await fetch(`${baseURL}${path}`, {
        method: "GET",
      });

      const data = await response.json();

      return data;
    } catch (err) {
      throw new Error("Server Error");
    }
  },
};

export default client;
