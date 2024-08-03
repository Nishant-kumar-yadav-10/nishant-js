const mysym1=Symbol("key1")
const user={
    name:"nishant",
    full_name:"nishant kumar yadav",
    [mysym1]:"mykey1",
    age:18,
    location:"agra",
    lastlogindays:["monday","tuesday"],
    email:"nishant12ts@gail.com",


    

}
//console.log(user.name);
//console.log(user.lastlogindays[1]);
//console.log(user["name"]);
//console.log(user[mysym1]);
user.email="nishantbeastode@gail.com"
//console.log(user.email);
//Object.freeze(user);
user.email="nishantwillwin@gail.com"
//console.log(user.email);
//console.log(user.nishant());


user.greeting=function(){
    console.log(`my name is,${this.name}`);
}
console.log(user.greeting());