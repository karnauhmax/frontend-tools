const pxToRem = (value) => {
  const x = 16;
  return `${(1 / x) * value}`;
};

export { pxToRem };
