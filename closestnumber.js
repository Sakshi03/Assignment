function closest (num, arr) {
    var mid;
    var low = 0;
    var high = arr.length - 1;
    while (high - low > 1) {
        mid = Math.floor ((low+ high) / 2);
        if (arr[mid] < num) {
            low = mid;
        } else {
            high = mid;
        }
    }
    if (num - arr[low] <= arr[high] - num) {
        return arr[low];
    }
    return arr[high];
   
}
array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];

number = 100;
document.getElementById("findnum").innerHTML= closest(number,array);
console.log (closest (number, array));