// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   const promise = new Promise(((resolve, reject) => {
//     console.log(7);
//     resolve();
//   })).then(() => {
//     console.log(8);
//   });
// }, 1000);
// setTimeout(() => {
//   console.log(10);
//   const promise = new Promise(((resolve, reject) => {
//     console.log(11);
//     resolve();
//   })).then(() => {
//     console.log(12);
//   });
// }, 0);
// const promise = new Promise(((resolve, reject) => {
//   console.log(3);
//   resolve();
// })).then(() => {
//   console.log(4);
// }).then(() => {
//   console.log(9);
// });
// console.log(5);

// console.log('start')
// new Promise(resolve => {
// console.log('promise1')
// setTimeout(() => console.log('setTimeout1'))
// Promise.resolve().then(() =>
// console.log('promise2'))
// resolve()
// })
// .then(() => {
// console.log('promise3')
// new Promise((resolve) => {
// resolve()
// console.log('promise5')
//  })
// .then(() => {
// console.log('promise6')
// return Promise.resolve()
// })
// .then(() => console.log('end'))
// }).then(() => console.log('promise4'))


div.addEventListener('click', () => {   
    console.log('1')   
    Promise.resolve().then(() => console.log('p1'))  
})  
div.addEventListener('click', () => {   
    console.log('2')   
    Promise.resolve().then(() => console.log('p2'))  
})  
div.click()