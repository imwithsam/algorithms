// Merge Sort
//
// Part I: Divide
// Keep dividing array in halves until lengths are <= 1
//
// Part II: Conquer (Sort & Merge)
// Take the 1 length arrays and compare them to one another to make sorted 2
//   length arrays.
// Take the 1-2 length arrays and compare them to one another to make sorted 3-4
//   length arrays.
// And so on... until you have one fully sorted array.

const original = [5,4,1,7,2,6,3];
console.log('original:', original);
console.log('');

const final = divide(original);
console.log('final:', final);

function divide(array) {
  const n = array.length;

  if (n < 2) {
    return array;
  }

  const left = array.slice(0, Math.floor(n/2));
  const right = array.slice(Math.floor(n/2), n);

  console.log('divide');
  console.log('left:', left);
  console.log('right:', right);
  console.log('');

  return sortMerge(divide(left), divide(right));
}

function sortMerge(left, right) {
  const n = left.length + right.length;
  let i = 0; // left starting index
  let j = 0; // right starting index
  let sortMerged = [];

  console.log('sortMerge');
  console.log('left:', left);
  console.log('right:', right);

  for (let k = 0; k < n; k++) {
    if (left[i] < right[j] || right[j] === undefined) {
      console.log(`left: ${left[i]} < right: ${right[j]} => take left (${left[i]})`);
      sortMerged[k] = left[i];
      i++;
    } else if (right[j] < left[i] || left[i] === undefined) {
      console.log(`left: ${left[i]} > right: ${right[j]} => take right (${right[j]})`);
      sortMerged[k] = right[j];
      j++;
    }
  }

  console.log('sorted & merged:', sortMerged);
  console.log('');

  return sortMerged;
}
