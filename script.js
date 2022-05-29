// diagonalDifference

function diagonalDifference(arr) {
    let difference = 0;
    
    for (let i = 0; i < arr.length; i++) {
      difference += arr[i][i];
      difference -= arr[i][arr.length - 1 - i];
    }
    return Math.abs(difference);
}
