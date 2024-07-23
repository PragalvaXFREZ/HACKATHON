let num;
let text;
switch (Math.floor(Math.random() * 10)) {
    case 0:
        num = 0.1;
        console.log("1");
        break;
    case 1:
        num = 0.2;
        console.log("1");
        break;
    case 2:
        num = 0.3;
        console.log("2");
        break;
    case 3:
        num = 0.4;
        console.log("3");
        break;
    case 4:
        num = 0.5;
        console.log("4");
        break;
    case 5:
        num = 0.6;
        console.log("5");
        break;
    case 6:
        num = 0.7;
        console.log("6");
        break;
    case 7:
        num = 0.8;
        console.log("7");
        break;
    case 8:
        num = 0.9;
        console.log("8");
        break;

    default:
        text = "Unexpected value";
        console.log(text);
}
