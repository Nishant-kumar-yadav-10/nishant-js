const yNums = [1, 2, 3]
const ytotal= yNums.reduce( (acc,currentval)=> 
 acc+currentval
,0)
//console.log(ytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay=shoppingCart.reduce( (rahul,nishant)=> rahul+nishant.price,0)
console.log(pricetopay);
