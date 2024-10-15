// Given a list of countries, write a function that returns an array of all the country codes using .forEach.
// getCodes(countries) // => ["AF","AL","DZ"]

var countries = [
  {
    "countryCode": "AF",
    "countryName": "Afghanistan",
    "population": "29121286",
    "capital": "Kabul",
    "continentName": "Asia"
  },
  {
    "countryCode": "AL",
    "countryName": "Albania",
    "population": "2986952",
    "capital": "Tirana",
    "continentName": "Europe"
  },
  {
    "countryCode": "DZ",
    "countryName": "Algeria",
    "population": "34586184",
    "capital": "Algiers",
    "continentName": "Africa"
  },
]

function getCodes() {
  countries.forEach(country =>
    console.log('country code:', country.countryCode)
  )
}
getCodes(countries)