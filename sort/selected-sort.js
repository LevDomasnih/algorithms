// Сложность - O(n**2)

const findSmallestIndex = (arr) => {
    let smallestElement = arr[0]
    let smallestIndex = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            smallestElement = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

const selectedSort = (array) => {
    const sortingArray = [...array];
    const sortedArray = [];
    const length = sortingArray.length;

    for (let i = 0; i < length; i++) {
        const smallestIndex = findSmallestIndex(sortingArray)
        sortedArray.push(sortingArray.splice(smallestIndex, 1)[0])
    }
    return sortedArray
}

module.exports = selectedSort
