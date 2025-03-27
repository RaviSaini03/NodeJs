function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum
}
module.exports = {
    avg: average,
    name: "Ravi",
    repo: "Github"
}