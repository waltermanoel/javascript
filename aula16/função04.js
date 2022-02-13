function fat (num) {
    if (num == 1) {
        return num
    } else {
        return num * fat(num - 1)
    }
} 

let res = fat(5)

console.log(res)
