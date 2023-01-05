// ichma ish arraylarni bitta arrayga aylantirish
///////// 1
// let arr = [[1], [[2]]];
// let arr2 = [];
// function func1(array) {
//     for (let i = 0; i < array.length; i++) {
//         const elm = array[i];
//         const isArray = JSON.stringify(...elm).includes('[');
//         console.log(elm, isArray);
//         if (isArray) {
//             func1(elm)
//         } else {
//             arr2.push(...elm)
//         }
        
//     }
// }
// func1(arr);
// console.log(arr2)

///////// 2

// let nastedArray = [[1], [[2, 3]], [[[4]]]];

// let a = [];
// let aa = (arr)=>{
//   for (let i = 0; i < arr.length; i++) {
// if(Array.isArray(arr[i])){
//   aa(arr[i])
// }else{
//   a.push(arr[i])
// }    
//   }
//   return a
// }


// console.log(aa(nastedArray),'aaa');

// =========================================== //
                //   ---------  //
// =========================================== //


// let strs = ["eat","tea","tan","ate","nat","bat"];
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(strs.map(v=>v.split('').sort()).map(v=>v.reduce((a,b)=>a+b)));



// =========================================== //
                //   ---------  //
// =========================================== //

// let nums = [1,2,3,3,1,1]
// console.log(nums.filter((v,i)=>i == nums.indexOf(v)),'heeyyy')
