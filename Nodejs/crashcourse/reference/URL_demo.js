const url = require("url");

const myurl  = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

// Serialized URL
//console.log(myurl.href);

// host (root domain)
//console.log(myurl.host);

// hostname
//console.log(myurl.hostname)

// pathname
// console.log(myurl.pathname)

// Serialized query parameters
// console.log(myurl.search)

// Params Obj
//console.log(myurl.searchParams);

// append to params Obj
//myurl.searchParams.append('abc','123');

// traversr though the searchparams
//myurl.searchParams.forEach((value,name) =>console.log(`${name}: ${value}`))
