export const applyClass = <T>(
  error: T,
  errorClass: string,
  validClass: string,
  isTouched?: boolean | undefined,
  defaultClass?: string | undefined
) => {
  if (error) {
    return errorClass;
  } else if (!isTouched) {
    return defaultClass;
  } else {
    return validClass;
  }
};
