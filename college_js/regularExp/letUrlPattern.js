let urlPattern = /^https?:\/\/www\.[a-zA-Z0-9]{2,}\.[a-z]{2,5}(\.[a-z] {2,5})?$/;
let url="https://www.gogli.com";
console.log(urlPattern.test(url));