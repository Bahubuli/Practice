
async function fn()
{

    const res= fetch("https://jsonmock.hackerrank.com/api/inventory?barcode=74002314")

    const result =  await res.json()

    console.log(result);
}

fn();
