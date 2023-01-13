const armstrong_no = 185;
const prime_no = 29;


const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        console.log("The number is not a prime number.");
        return;
      }
  
    }
    console.log("The number is a prime number.");
  }
const isArmstrong = (num) => {
  const strNum = String(num);
  let total = 0;
  for (let i = 0; i < strNum.length; i++) {
    total += Math.pow(Number(strNum[i]), 3);
  }
  console.log(total, num);
  if (total === num) {
    console.log("The number is an armstrong number.")
  } else {
    console.log("The number is NOT an armstrong number.");
  }
}