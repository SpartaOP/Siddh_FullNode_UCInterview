const surnames = ["Geller", "Tribbiani", "Buay", "Green", "Bing", "Wheeler", "Hannigan"];

function generateRandomSurname(firstName) {
  if(firstName.length >= 4) {
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const sliceName = firstName.slice(0,4);
    return `${sliceName} ${randomSurname}`;
  } else {
    return "First name must be at least 4 characters long.";
  }
}   

const test = generateRandomSurname("sid");
console.log(test); // Expected output: Chandler + random surname from the list