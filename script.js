
function findHighestAndLowest(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }

   
    let highest = arr[0];
    let lowest = arr[0];

 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }

    // Print the highest and lowest numbers
    console.log("Highest number:", highest);
    console.log("Lowest number:", lowest);
}


