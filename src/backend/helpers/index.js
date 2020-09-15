export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const fakeApi = (data, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = getRandomInt(9);
      const showRandomError =
        !process.env.REACT_APP_NO_ERR && (num === 5 || num === 8);

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        resolve(data);
      }
    }, timeout);
  });
};
