function divideArray(arr, maxSum) {
  const result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= maxSum) {
      current.push(num);
      currentSum += num;
    } else {
      if (current.length > 0) result.push(current);
      current = [num];
      currentSum = num;
    }
  }

  if (current.length > 0) result.push(current);
  return result;
}

function handleDivide() {
  const input = document.getElementById("arrayInput").value;
  const maxSum = parseInt(document.getElementById("maxSum").value);
  const outputDiv = document.getElementById("output");

  if (!input || isNaN(maxSum)) {
    outputDiv.textContent = "Please enter a valid array and max sum.";
    return;
  }

  const array = input.split(",").map(x => parseInt(x.trim()));
  const chunks = divideArray(array, maxSum);
  outputDiv.textContent = JSON.stringify(chunks, null, 2);
}
