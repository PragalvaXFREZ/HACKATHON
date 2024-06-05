for (let a = 0; a < 100; a++) {
    if (a % 5 == 0 && a % 3 == 0) {
        console.log("Fizz Buzz");
    }
    else if (a % 3 == 0) {
        console.log("Fizz");
    }
    else if (a % 5 == 0) {
        console.log("Buzz");
    }
    else
        console.log(a);

}
