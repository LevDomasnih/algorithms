const sum = (arr) => {
    if (arr.length === 0) return 0
    if (arr.length === 1) return arr[0]

    const firstEl = arr.splice(0, 1)

    return +firstEl + sum(arr)
}

console.log(sum([1, 2, 3, 4, 5]))