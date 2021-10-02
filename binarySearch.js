const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1
    let times = 0 // not req
    let timer = new Date().getMilliseconds()

    while (low <= high) {
        times++ // not req

        const middle = Math.floor((low + high) / 2)
        const guess = list[middle]

        if (guess === item){
            return {
                time: new Date().getMilliseconds() - timer ,
                index: middle,
                times
            }
        }
        if (guess > item) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
    return null
}

module.exports = binarySearch
