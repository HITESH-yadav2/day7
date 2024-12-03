// console.log("---welcome to js----")
// const title = document.getElementById("title");
// console.log(title)

// title.innerText="hii i'm .....";
// const desc= document.getElementsByClassName("desc");
// console.log(desc)
// desc.innerText="my name is hitesh";
// const heading= document.getElementsByClassName("heading");
// for(let i=0;i<=10;i++){
//     if(i%2===0) {
//      heading[i].innerText="even";
//      console.log(heading);
//     }
//     else{
//      heading[i].innerText="odd";
//      console.log(heading);
//     }
// }
// console.log(heading);
let s=0;
const array =[10,9,8,7,6,5,4,3,2,1];
console.log(array[4]);
len= array.length;
console.log(len);
for(let j=0;j<=array.length;j++){
    if(j%2===0){
        s=array[j];
        console.log(s);
    }
}
