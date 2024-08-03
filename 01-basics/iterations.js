 //for (let index = 1; index <= 20; index++) {
   // if (index == 5) {
       // console.log(`Detected 5`);
        // break
     //}    
    // console.log(`Value of i is ${index}`);
    
//}

//for (let index = 1; index <= 20; index++) {
    //if (index == 5) {
        //console.log(`Detected 5`);
        //continue
    //}
   //console.log(`Value of i is ${index}`);
    
//}
//const array1=[1,2,3,4,5]
//for (const nishant of array1) {
   // console.log(nishant);
    
//}

const string1="nishant"
for (const deepak of string1) {
    //console.log(deepak);
    
}
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const [key,Value] of map) {
    //console.log(Value,":-" ,key);
    
}

//for in used for objects
const obj1={
    user:"nishant",
    userid:12312312,
    js:"javascript",
    rb:"ruby"
}

for (const key in obj1) {
    //console.log(obj1[key]);
  
}

const arry2=["adasf","asdfsafsafwewfs","yhtgy","qedadd"]
for (const key in arry2) {
    //console.log(arry2[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val1) {
    //console.log(val1);
    
});

//coding.forEach(
   // (ite,index,arr) => { console.log(ite,index,arr);

    
//});

const nishant=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
nishant.forEach((ites)=>{
    //console.log(ites.languageFileName);
})
//const language=coding.forEach( function (val1) {
    //console.log(val1);
   // return val1
    
//})

//console.log(language);

const arr=[1,2,3,4,5,6,7,8,9]
const newarr=arr.filter( (ites)=> ites>6)
//console.log(newarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let userbooks=books.filter( (ites)=> ites.genre==="Fiction")
  //console.log(userbooks);
  let userbooks=books.filter( (ites)=> {
    return ites.publish<=2000 && ites.genre==="Non-Fiction"
  })
  console.log(userbooks);