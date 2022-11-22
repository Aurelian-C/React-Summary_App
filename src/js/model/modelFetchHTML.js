export const AJAX = async function (urlSource) {
  try {
    const response = await fetch(urlSource);
    const htmlString = await response.text();
    return htmlString;
  } catch (err) {
    throw err;
  }
};
