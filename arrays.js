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

    return result;
}

console.log(everyOtherItem(['kat','marissa','andrew','ashley']))

// 3. smallestNItems
function smallestNItems(items, n) {
    
    if (items.length >= n) {
       const sortedNItems = items.sort((a, b) => a - b).slice(0, n)
       return sortedNItems.reverse();
    }
}

console.log(smallestNItems([1, 30, 4, 21, 100000], 3))
