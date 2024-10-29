/*
Pair Practice 1 - Sales Data 

To run the code in this file, run the command:
  node practice_sessions/pair_practice_1_sales.js
*/ 
// console.log("pair_practice_1_sales.js is running")


const salesData = {
  north: [
    { name: 'Alex Johnson', totalSales: 200000, numClients: 35, rating: 'A' },
    { name: 'Casey Green', totalSales: 160000, numClients: 25, rating: 'B' },
    { name: 'Charlie Lewis', totalSales: 150000, numClients: 27, rating: 'B' },
    { name: 'Morgan Thompson', totalSales: 180000, numClients: 30, rating: 'A' },
    { name: 'Jamie Roberts', totalSales: 145000, numClients: 22, rating: 'B' }
  ],
  south: [
    { name: 'Taylor Brown', totalSales: 95000, numClients: 28, rating: 'C' },
    { name: 'Riley Black', totalSales: 130000, numClients: 32, rating: 'B' },
    { name: 'Dakota King', totalSales: 140000, numClients: 26, rating: 'A' },
    { name: 'Parker Davis', totalSales: 125000, numClients: 24, rating: 'B' },
    { name: 'Jordan Wright', totalSales: 135000, numClients: 29, rating: 'B' }
  ],
  east: [
    { name: 'Jordan Lee', totalSales: 220000, numClients: 40, rating: 'A' },
    { name: 'Avery Smith', totalSales: 180000, numClients: 29, rating: 'A' },
    { name: 'Quinn Harris', totalSales: 210000, numClients: 35, rating: 'B' },
    { name: 'Sydney Brown', totalSales: 170000, numClients: 33, rating: 'A' }
  ],
  west: [
    { name: 'Morgan White', totalSales: 80000, numClients: 15, rating: 'C' },
    { name: 'Jamie Clark', totalSales: 110000, numClients: 20, rating: 'C' },
    { name: 'Taylor Anderson', totalSales: 90000, numClients: 18, rating: 'C' },
    { name: 'Alex Martinez', totalSales: 105000, numClients: 19, rating: 'B' }
  ]
};



/*
LEVEL ONE
Write a function that takes in the name of a region and returns the total sales for that region.

getTotalSalesByRegion("east") -->  "Total sales for the east region were $780000 dollars."
getTotalSalesByRegion("west") -->  "Total sales for the west region were $385000 dollars."
*/

// function getTotalSalesByRegion(region) {
//   var regionArray = salesData[region]

//   var result = regionArray.reduce((acc, saleData) => {
//     acc += saleData.totalSales
//       return acc
//   },0)
//   return `Total sales for the ${region} region were $${result} dollars.`
// }
// console.log(getTotalSalesByRegion('east'))
// console.log(getTotalSalesByRegion('west'))


/*
LEVEL TWO
Modify your function so that it also takes in a rating. Your function should only 
return the total sales for that region by sales people with the given rating.

getTotalSalesByRegion("west", "B") -->  105000
getTotalSalesByRegion("east", "A") -->  570000
getTotalSalesByRegion("east", "C") -->  0
*/

function getTotalSalesByRegion(region, rating) {
    var regionArray = salesData[region]

    var byRating = regionArray.reduce((acc, sale) => {
      if(sale.rating == rating) {
        acc += sale.totalSales
      }
      return acc
    }, 0)
    return byRating
}
console.log(getTotalSalesByRegion("west", "B"))
console.log(getTotalSalesByRegion("east", "A"))
console.log(getTotalSalesByRegion("east", "C"))