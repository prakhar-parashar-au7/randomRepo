//  async function doo() {

//      function hh(){ setTimeout(()=> {
//            console.log("heyy")
//           }, 3000)
//         }

//       await hh()
//       console.log("hi")
// }

// doo()




// let b = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()

//     }, 2000)
// }).then(() => {console.log("iii")})

// let i = 0;
// while (i<4) {
//     console.log("heuu")
//     i++
// }

let b = 0;
a = setInterval(()=> {
    console.log("hey")
    b++;
    if(b>3){
        clearInterval(a)
    }

}, 1000)