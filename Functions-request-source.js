// This function fetches the latest carbon emissions from openweathermap API
// Args include the zipcode of your location, ISO 3166 country code
// units- unit in which we want the temperature (standard, metric, imperial)

if (!secrets.apiKey) {
  throw Error("Price API Key is not available!")
}

url = 'https://v6.exchangerate-api.com/v6/'

const priceRequest = Functions.makeHttpRequest({
  url: `${url}/${secrets.apiKey}/pair/USD/INR`,
  method: "GET"
})

const priceResponse = await priceRequest

if (priceResponse.error) {
  console.error(priceResponse.error)
  throw Error("Request failed, try checking the params provided")
}

const price = priceResponse.data.conversion_rate

return Functions.encodeUint256(price * (10**8)) 