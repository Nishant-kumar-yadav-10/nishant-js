const user={
    usernae:"nishant",
    prince:999,
    nishantfun:function nishant(){
        const a="i will becoe better"
        console.log(`y nae is ${this.usernae},and ${a}`);
        console.log(this);
        

    }
}
//user.nishantfun()
//user.usernae="san"
//user.nishantfun()
//console.log(this);
function thor(){
    const id=23
    console.log(this);
}
//thor()
/*const answer=(nu1,nu2)=>{
    return nu1+nu2
}*/
//const answer=(nu1,nu2)=>nu1+nu2
const answer=()=>({usernae:"nishant"})
//console.log(answer());



( (w) => {
    console.log(w);
} )("ez");

( (name) => {
    console.log(name);
} )("hitesh")

