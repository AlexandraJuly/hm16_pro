const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(number, array) {
    let generate = '';
    for(let i = 0; i < number; i++) 
        generate += array[Math.round(Math.random() * (array.length - 1))];
    return generate;
}

console.log(generateKey(16, characters));
