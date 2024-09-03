// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// method-1

const array=['red', 'blue', 'green', 'yellow', 'orange'];

const revarray=[];

for(const element of array){
    revarray.unshift(element);
    
}
console.log(revarray);


// method-2

const array3=['red', 'blue', 'green', 'yellow', 'orange'];

const revarray1=[];
for(let i=array.length-1;i>=0;i--){
    revarray1.push(array[i]);
}

console.log(revarray1);

// method-3

const array4=['red', 'blue', 'green', 'yellow', 'orange'];

const revarray2=array4.reverse();
console.log(revarray2);



