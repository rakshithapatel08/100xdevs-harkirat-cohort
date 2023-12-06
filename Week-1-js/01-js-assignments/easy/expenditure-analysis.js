/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // transaction is an array of objects

  if(transactions.length ===0)return [];
  let j;
  let output = [{
    category:transactions[0].category,
    totalSpent:transactions[0].price
  }];
  for(let i=1; i<transactions.length; i++)
  {
    for(j=0;j<output.length;j++)
    {  
      //already present
       if(transactions[i].category === output[j].category)
       {
        output[j].totalSpent += transactions[i].price;
        break;
       }       
    } 
    // not present
    if(j === output.length){
      output.push({category:transactions[i].category,totalSpent:transactions[i].price})
    }   
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
