const detectScroll = (options = {}, targets = [], cb) => {
  const defaultOptions = {
    root: null,
    threshold: 0.2,
    ...options,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cb(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  targets.forEach((target) => {
    observer.observe(target);
  });
};

export default {
  detectScroll,
};
