import React from 'react';
function clickMe() {
     
    let pro = new Promise((resolve, reject)=> {
       const resolve2 =   resolve("foo");
       console.log("resolve",resolve2);
    })
    .then(value=> console.log(value))
}
function ale() {
    console.log(5*5)
}
function clickMe2() {
     
  setTimeout(()=>{
    ale()
  },2000)
}
export default function Pro () {
    return(
     
    <div>
        <button type='button' onClick={clickMe2}> Click Me</button>
    </div>                
        
    )

}