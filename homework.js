let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    even = 'even index'
    for(let i = 0; i < arr.length; i++) {
        if (i%2 == 0) {
            arr.splice(i, 1, even)
        }
    }
    return arr
}

console.log(replaceEvens(arr))



// exercise #2
let arrr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arrr){
    even = 'even index'
    for(let i = 0; i < arrr.length; i++) {
        if (i%2 == 0) {
            arrr.splice(i, 1, even)
        }
    }
    return arrr
}

console.log(replaceEvens(arrr))