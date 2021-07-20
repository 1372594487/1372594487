Promise.resolve().then(function F1(){
    console.log('promise1');
    Promise.resolve().then(function F4(){
        console.log('promise2');
        Promise.resolve().then(function F5(){
            console.log("promise4");
        }).then(function F6(){
            console.log('promise7');
        })
    }).then(function F7(){
        console.log('promise5');
    })
}).then(function F2(){
    console.log('promise3');
}).then(function F3(){
    console.log('promise6');
})

// let p1 = new Promise(function(resolve,reject){
//     resolve(42);
// });

// p1.then(function(value){
//     console.log(value);
//     let p2 = new Promise(function(resolve,reject){
//         resolve(43);
//     });

//     return p2;
// }).then(function(value){
//     console.log(value);
// })