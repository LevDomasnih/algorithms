const quickSort = (array) => {
    if (array.length < 2) return array

    let pivot = array[0]
    let less = array.slice(1).filter(el => el <= pivot)
    let greater = array.slice(1).filter(el => el > pivot)

    return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
    ]
}

console.log(quickSort([10, 5, 2, 3]))