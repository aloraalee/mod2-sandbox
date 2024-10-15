//Example 1:
//Given a list of countries, write a function that returns an array of strings with the country code and name
// explainCodes(countries) // => ["AF stands for Afghanistan","AL stands for Albania","DZ stands for Algeria"]


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

function explainCodes() {

  var countryCodeStatements = countries.map( country => {
    return `${country.countryCode} stands for ${country.countryName}`
  }) 
  return countryCodeStatements
}

console.log(explainCodes(countries))