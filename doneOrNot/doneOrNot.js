function doneOrNot (board) {
  //debugger;
  var originalBoard = board.map(function (element) { return element.slice(); }); // makes a clone of orginal board so that it is not modified by our functions
  
  // checks whether an array contains each of the values 1-9 once
  var validArray = true;
  function arrayChecker (array) {
    var orderedString = [1, 2, 3, 4, 5, 6, 7, 8, 9].toString();
    var arrayString = array.sort(function(a,b) { return a-b; }).toString();
    if (orderedString !== arrayString) {
      validArray = false;
    }
  }
  
  // makes a new board rotated by 90 degrees so that columns can be validated
  var rotatedBoard = [[],[],[],[],[],[],[],[],[]];
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++){
            rotatedBoard[i].push(board[j][i]);
        }
    }

   var longArray = board.reduce(function(a, b) { return a.concat(b); });
   var board3 = [[],[],[],[],[],[],[],[],[]];

   for(var k = 0; k < 27; k += 9) {
     board3[0].push(longArray[k], longArray[k + 1], longArray[k + 2])
   }
   for(var k = 3; k < 30; k += 9) {
     board3[1].push(longArray[k], longArray[k + 1], longArray[k + 2])
   }
  
   if (!validArray)
     return 'Try again!';
   return 'Finished!';  
}

var result = doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
                        [3, 4, 5, 2, 8, 6, 1, 7, 9]]);

console.log(result);
                                
var result1 = doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]);

console.log(result1);