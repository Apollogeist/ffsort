/**
 * Sorts the given array in ascending order
 * @param {Array} arr The array to sort
 */
exports.ascending = function(arr, useVerbose) {
    if (useVerbose) console.log(`[${new Date().toISOString()}] Preparing sorting algorithm...`);
    for (let j=0; j<arr.length; j++) {
        if (useVerbose) console.log(`[${new Date().toISOString()}] Array continuity check (${j+1}/${arr.length})`);
        if (arr[j] > arr?.[j+1]) {
            if (useVerbose) console.log(`[${new Date().toISOString()}] Parity check failed, reshuffling.`);
            shuffled = shuffle(arr, useVerbose);
            if (useVerbose) console.log(`[${new Date().toISOString()}] Array reshuffled, recursing.`);
            return exports.ascending(shuffled, useVerbose);
        }
        if (useVerbose) console.log(`[${new Date().toISOString()}] Digit parity check succeeded.`);
    }
    if (useVerbose) console.log(`[${new Date().toISOString()}] Full parity check succeeded, array sorted, thank you for using ffsort!`);
    if (useVerbose) console.log(`[${new Date().toISOString()}] Sorted array: ${arr}`);
    return arr;
}

exports.descending = function(arr, useVerbose) {
    if (useVerbose) console.log(`[${new Date().toISOString()}] Preparing sorting algorithm...`);
    for (let j=0; j<arr.length; j++) {
        if (useVerbose) console.log(`[${new Date().toISOString()}] Array continuity check (${j+1}/${arr.length})`);
        if (arr[j] < arr?.[j+1]) {
            if (useVerbose) console.log(`[${new Date().toISOString()}] Parity check failed, reshuffling.`);
            shuffled = shuffle(arr, useVerbose);
            if (useVerbose) console.log(`[${new Date().toISOString()}] Array reshuffled, recursing.`);
            return exports.descending(shuffled, useVerbose);
        }
        if (useVerbose) console.log(`[${new Date().toISOString()}] Digit parity check succeeded.`);
    }
    if (useVerbose) console.log(`[${new Date().toISOString()}] Full parity check succeeded, array sorted, thank you for using ffsort!`);
    return arr;
}

function shuffle(array, useVerbose) {
    if (useVerbose) console.log(`[${new Date().toISOString()}] Initiating array shuffle.`);
    var currentIndex = array.length, temporaryValue, randomIndex;

    if (useVerbose) console.log(`[${new Date().toISOString()}] Beginning shuffle loop...`);
    while (0 !== currentIndex) {
        if (useVerbose) console.log(`[${new Date().toISOString()}] Shuffling index ${currentIndex}.`);
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        if (useVerbose) console.log(`[${new Date().toISOString()}] Decremented current index`);

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        if (useVerbose) console.log(`[${new Date().toISOString()}] Updated array with shuffled values.`);
    }
    if (useVerbose) console.log(`[${new Date().toISOString()}] Sorting complete.`);

    if (useVerbose) console.log(`[${new Date().toISOString()}] Returning array...`);
    return array;
}