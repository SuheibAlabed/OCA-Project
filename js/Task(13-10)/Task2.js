 /* 1. Create a nested array, reverse an array, and print both */
/******* Start Your Code **********/
 
 //#region Task2

      const arr = [
        [1, 2],
        [3, 4],
      ];

      document.write("<h2>1) Original an array.</h2>");
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          document.write(arr[i][j]);
        }
      }
      document.write("<h2>2) Reverse an array.</h2>");
      for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - 1; j >= 0; j--) {
          document.write(arr[i][j]);
        }
      }

 //#endregion
 
  /******* End Your Code ********* */
  
  
