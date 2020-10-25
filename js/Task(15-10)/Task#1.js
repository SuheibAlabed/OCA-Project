// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts
​
// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/
​
​
	var nums = [1, 2, 3, 8, 9];
      var oddArr = [];
      oddArray(nums);
      function oddArray(num) {
        for (let i = 0; i < num.length; i++) {
          if (num[i] % 2 != 0) {
            oddArr.push(num[i]);
          }
        }

        for (let i = 0; i < oddArr.length; i++) {
          document.write(oddArr[i] + " ,");
        }
      }
	

/******* End Your Code ********* */
​
​
​
​
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array
​
// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6
​
// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6
​
// ** solve it one time using for loop and another using while loop
// **try more cases by your self
​
​
/******* Start Your Code *********/
​
​
//#region Question#2

      var nums1 = Array(5);
      var nums2 = Array(6);
      var sum = 0,
        Avg = 0;

      read(nums1, 1);
      read(nums2, 2);

//#region Using For Loop
      function read(temp, order) {
        for (let i = 0; i < temp.length; i++) {
          temp[i] = prompt("Enter Number: " + (i + 1));
          temp[i] = parseInt(temp[i]);
        }
        avg(temp, order);
      }

      function avg(nums, order) {
        Avg = 0;
        sum = 0;
        for (let i = 0; i < nums.length; i++) {
          sum += nums[i];
        }
        Avg = sum / nums.length;
        document.write("<h1>The Avg Array #" + order + ":" + Avg + "</h1>");
      }
//#endregion


//#region Using While loop

      function read(temp, order) {
        let i = 0;
        while (i < temp.length) {
          temp[i] = prompt("Enter Number: " + (i + 1));
          temp[i] = parseInt(temp[i]);

          ++i;
        }
        avg(temp, order);
      }

      function avg(nums, order) {
        Avg = 0;
        sum = 0;
        let i = 0;

        while (i < nums.length) {
          sum += nums[i];
          ++i;
        }
        Avg = sum / nums.length;
        document.write("<h1>The Avg Array #" + order + ":" + Avg + "</h1>");
      }

//#endregion

//#endregion

/******* End Your Code ********* */
​
​
​
​
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
​
​
​
/******* Start Your Code *********/
​
​	
var fact = 1;
      var num = prompt("Enter the number: ");
      factorial(num);

      function factorial(temp) {
        let i = temp;
        if (i != 0) {
          while (i > 0) {
            fact *= i;
            i--;
          }
          document.write("<h1> factorial (" + temp + ") =>" + fact + "</h1>");
        }
      }



/******* End Your Code ********* */
