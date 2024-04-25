export const isURL = (value: string): boolean => {
  try {
    const url = new URL(value);

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return false;
    }

    const invalidCharsRegex = /[^\w-.~:/?#[\]@!$&'()*+,;=%]/;
    if (invalidCharsRegex.test(value)) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
