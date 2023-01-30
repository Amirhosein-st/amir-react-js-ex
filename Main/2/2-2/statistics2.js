function Avg(randomNumbers) {
    return randomNumbers.reduce((a, b, c) => a + b + c) / randomNumbers.length;
  }
 
export default Avg