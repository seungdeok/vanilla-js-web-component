import { InternetSeverError } from "../constants/httpError.js";

const baseURL = "http://localhost:3000/api";

const cache = {};

const fetchAPI = (base) => {
  return async (path, options) => {
    const url = `${base}${path}`;
    if (cache[url]) {
      return cache[url];
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new InternetSeverError(`Failed to fetch ${url}`);
    }

    const contentType = response.headers.get("content-type");
    const isAvailableJSONParsing = contentType && /json/.test(contentType);

    const data = isAvailableJSONParsing
      ? await response.json()
      : await response.text();

    return data;
  };
};

const fetchLocalAPI = fetchAPI(baseURL);

const client = {
  get: async (path) => {
    const response = await fetchLocalAPI(path, {
      method: "GET",
    });

    return response;
  },
};

export default client;
