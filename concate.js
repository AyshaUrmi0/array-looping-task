// Use a for...of loop to concatenate an array's elements into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'



const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let str = '';

for (const element of numbers) {
    str += element;
}

console.log(str); // TomTimTinTik


