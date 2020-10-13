/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  

//#region Question#1

      let num1, num2;
      num1 = prompt("Enter First Number: ");
      num2 = prompt("Enter Second Number: ");
      if (num1 > num2) {
        alert(
          " -First Number is " +
            num1 +
            "\n -Second Number is " +
            num2 +
            "\n\n Large Number is " +
            num1
        );
      } else {
        alert(
          "-First Number is " +
            num1 +
            "\n -Second Number is " +
            num2 +
            "\n\n Large Number is " +
            num2
        );
      }
      
//#endregion


 /******* End Your Code ***********/

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
// #region Question#2

      var numbers = Array(3);
      var result = 1;
      for (let i = 0; i < 3; i++) {
        numbers[i] = prompt("Enter number [" + (i + 1) + "]");
        result *= numbers[i];
      }

      if (result > 0) {
        alert("-The sign is +");
      } else {
        alert("-The sign is - ");
      }
      
//#endregion

 /******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/
  
//#region Question#3

      var numbers = Array(3);
      var i, j, temp;
      for (i = 0; i < numbers.length; ++i) {
        numbers[i] = prompt("Enter number [" + (i + 1) + "]");
      }

      for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
          if (numbers[i] < numbers[j]) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
          }
        }
      }

       alert(numbers);

 //#endregion
  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
  
 //#region Question#4

      var nums = Array(5);
      let max, min;
      for (let i = 0; i < nums.length; i++) {
        nums[i] = prompt("Enter five numbers. \n number " + (i + 1));
      }
      max = nums[0];

      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
      }

      alert(max);

 //#endregion
  
  
 /******* End Your Code ********* */





 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/
  
  
//#region Question#5
      var x, y;
      x = prompt("Enter first number");
      y = prompt("Enter second number");

      if (x > y) {
        document.write("<h1> Hello World </h2>");
      } else alert("Goodbye");
      
 //#endregion
  
  
 /******* End Your Code ********* */



