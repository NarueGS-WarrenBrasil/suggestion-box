export default {
  numValidation: (score: string, age: string) => {
    return parseInt(score) < 11 &&
      parseInt(score) >= 0 &&
      parseInt(age) > 0 &&
      parseInt(age) < 199
      ? true
      : false;
  },
};
