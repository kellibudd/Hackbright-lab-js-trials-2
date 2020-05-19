"use strict";


// 1. printIndices
function printIndices(items) {

    for (const idx in items) {
        console.log(`${items[idx]} ${idx}`);
    }
}

// 2. everyOtherItem
function everyOtherItem(items) {

    const result = []

    for (const idx in items) {
        if (idx % 2 === 0) {
            result.push(items[idx]);
        }
    }

    console.log(result)
}

// def every_other_item(items):
//     """Print a list of every other item in `items`

//     Start with index 0.

//     Arguments:
//         items (list)
//     """

//     result = []

//     for i in range(len(items)):
//         if i % 2 == 0:
//             result.append(items[i])

//     print(result)


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
