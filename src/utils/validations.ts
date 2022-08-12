export default {
  numValidation: (score: string, age: string) => {
    return parseInt(score) < 11 &&
      parseInt(score) >= 0 &&
      parseInt(age) > 0 &&
      parseInt(age) < 199
      ? true
      : false;
  },
  stringValidation: (str: string) => {
    const reg = new RegExp("^([a-zA-Zà-úÀ-Ú])+$");
    return reg.test(str) ? true : false;
  },
};
