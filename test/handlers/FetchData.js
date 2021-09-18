async function fetchData(barcode) {
  let upc = barcode.data;
  while (upc.length > 12) {
    upc = upc.substring(1);
  }
  const url =
    'https://api.nal.usda.gov/fdc/v1/foods/search?query=' +
    upc +
    '&pageSize=100&api_key=KTe9mejq22QDDFVCIcBjhvjqPEhmALDjqPhGGNVG';
  try {
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    return {didError: false, data};
  } catch (e) {
    console.log('Error Fetching Data');
    return {didError: true, error: e};
  }
}

export default fetchData;
