// Task 2: Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// method-1
const numbers = [12, 98, 5, 41, 23, 78, 46];

const evennumbers=[];


for(let i=0;i<numbers.length;i++){

    if(numbers[i]%2==0){
        evennumbers.push(numbers[i]);
       
    } 
   
      

}
console.log(evennumbers);
        


// method-2
const numbers1 = [12, 98, 5, 41, 23, 78, 46];

const evennumbers1=[];
for(let i=0;i<numbers1.length;i++){
    if(numbers1[i]%2!=1){
        evennumbers1.push(numbers1[i]);
       
    }

}
console.log(evennumbers1);



