const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPageSpeedReport = async (url, device) => {
  const data = await fetchData(
    `${import.meta.env.VITE_PAGESPEED_REPORT_URL}${url}&strategy=${device}`
  );

  return data;
};

export { getPageSpeedReport };
