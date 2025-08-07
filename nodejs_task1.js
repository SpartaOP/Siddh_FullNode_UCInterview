const surnames = ["Geller", "Tribbiani", "Buay", "Green", "Bing", "Wheeler", "Hannigan"];

function generateRandomSurname(firstName) {
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const sliceName = firstName.slice(0,4);
  return `${sliceName} ${randomSurname}`;
}   

const test = generateRandomSurname("Chandler");
console.log(test); // Expected output: Chandler + random surname from the list