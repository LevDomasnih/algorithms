const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1
    let times = 0 // not req

    console.log(list)
    while (low <= high) {
        times++ // not req

        const middle = Math.floor((low + high) / 2)
        const guess = list[middle]

        if (guess === item){
            return {
                index: middle,
                times // not req
            }
        }
        if (guess > item) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
}

module.exports = binarySearch
