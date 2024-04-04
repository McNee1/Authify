export const applyClass = <T>(
  error: T,
  errorClass: string,
  validClass: string,
  isTouched?: boolean | undefined,
  defaultClass?: string | undefined
) => {
  if (isTouched === undefined) {
    return error ? errorClass : validClass;
  }
  if (error) {
    return errorClass;
  } else if (!isTouched && error === undefined) {
    return defaultClass;
  } else if (isTouched && error === undefined) {
    return validClass;
  }
};
