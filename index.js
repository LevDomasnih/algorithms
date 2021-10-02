const list = new Array(100).fill(null).map((_, i) => i + 1)

const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1
    let times = 0 // not req

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
            high = guess - 1
        }
        if (guess < item) {
            low = guess + 1
        }
    }
}

console.log(binarySearch(list, 50))