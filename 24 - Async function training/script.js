async function calculateSum (a,b) {
    return new Promise((resolve, reject) => {
        if (b !== 0) {
            resolve (a / b);
        } else {
            reject ("Uneti broj je jednak 0")
        }
    });
}
calculateSum(10,2)
.then(function (result) {
    console.log("result", result);
})
.catch(function (error) {
    console.log("error", error);
});