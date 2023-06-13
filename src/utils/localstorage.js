const EXPIRED_TIME = 1000 * 60 * 60 * 24;

const get = (key) => {
  const item = localStorage.getItem(key);

  if (item) {
    const now = new Date().getTime();
    const { value, expiration } = JSON.parse(item);

    if (expiration && now > expiration) {
      localStorage.removeItem(key);

      return null;
    }

    return value;
  }

  return null;
};

const set = (key, value) => {
  const now = new Date().getTime();
  const expiration = now + EXPIRED_TIME;

  localStorage.setItem(key, JSON.stringify({ value, expiration }));
};

export default {
  get,
  set,
};
