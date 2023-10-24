const remToPx = (rem) => {
  const FONT_SIZE = 16;

  const px = rem / (1 / FONT_SIZE);

  return px;
};

export { remToPx };
