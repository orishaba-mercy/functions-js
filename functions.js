// You manage a grocery store and need to keep track of the inventory of various items. You will use 
// arrays to store the data and various functions to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum of 10.
let groceryArr =["onions","tomatoes","oranges","mangos","vegetables","bananas","beans","meat","cabbages","maizes"]


// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let quantities =[20,10,40,55,78,20,50,44,37,49]


// Write a function to add a new item to the inventory, updating both arrays.
function addition(groceryArr,quantities) {
    groceryArr.push("watermelon");
    console.log(groceryArr);
    quantities.push(99);
    console.log(quantities);   
}
addition(groceryArr,quantities);



// Write a function to update the stock quantity of an existing item.
function update(x,y) {
    let a = groceryArr.indexOf(x);
    if (a===-1){
        console.log("not available");
    } 
    
    quantities.push(y)
 console.log("updated");
}

update("watermelon",99)


// Write a function to calculate the total number of items in the inventory.
function totalIt() {
    let total =0
    for (let i = 0; i < quantities.length; i++) {   
        total+=quantities[i]
    }
console.log(total);
  
}
totalIt()



// Write a function to find the item with the lowest stock quantity.
function item( groceryArr,quantities) {
    
    for (let i = 0; i < quantities.length; i++) {
        let groceryArr  = groceryArr[i]

        let quantities  =quantities[i]
        if (lowestItem===null || quantities< lowquantity) {
            lowestItem = groceryArr
            lowquantity =quantities 
            
        }
    }
    return lowestItem
}
console.log();
item(groceryArr,quantities)