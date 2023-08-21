 const container = document.querySelector(".container");
 const URL = 'https://source.unsplash.com/random/';
const rows = 10;

for(int i=0;i<rows*3;i++)
{
    const img = document.createElement("img");
    img.src = `${URL}`
}

function getRanndom()
{
    return Math.floor(Math.random()*10)+300;
}
