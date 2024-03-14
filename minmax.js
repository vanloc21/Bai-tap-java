function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return [max, min];
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const [max, min] = findMinMax(numbers);
  
  console.log(`Số lớn nhất: ${max}`); // 5
  console.log(`Số bé nhất: ${min}`); // 1