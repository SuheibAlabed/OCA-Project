 /* 1. Main Task
Write a program to calculate the marks of a student, the program should has the following:
- 6 variables for each subject (Math, English, Arabic, Bio, Computer, Religion)
- a constant of the subjects number
The program work flow should be as follow:
1. Ask student to enter his/her name
2. Ask student to enter the mark of each subject one by one (mark of 100).
3. the program will calculate the sum of all subjects marks
4. the program will calculate the average mark of the subjects
5. the program will print out the result average as follow:
a. 50 to 60 will print (Pass)
b. 60 to 70 will print (average)
c. 70 to 80 will print (good)
d. 80 to 90 will print (very good)
e. 90 to 100 will print (Excellent) */

/******* Start Your Code **********/
 
 //#region Task2

     //#region Task2

      const size = 6;
      var subject = Array(size);
      var mark = Array(size);
      var FullName;
      var total = 0,
        Avg = 0;

      subject = ["Math", "English", "Arabic", "Bio", "Computer", "Religion"];
      FullName = prompt("Please, Enter your Name");
      for (let i = 0; i < subject.length; i++) {
        mark[i] = prompt(subject[i]);
        total += parseInt(mark[i]);
      }

      Avg = total / size;

      document.write("<h1> Name:" + FullName);

      for (let i = 0; i < size; i++) {
        document.write(
          "<table border= 2><th>" +
            subject[i] +
            "</th><th>" +
            mark[i] +
            "</th></td>"
        );
      }
      document.write("</table>");

      document.write("total = " + total);
      document.write(", Avg = " + Avg);

      if (Avg >= 90 && Avg <= 100) {
        document.write("<h1> Ecellent </h1>");
      } else if (Avg >= 80 && Avg <= 90) {
        document.write("<h1> very good </h1>");
      } else if (Avg >= 70 && Avg <= 80) {
        document.write("<h1> good </h1>");
      } else if (Avg >= 60 && Avg <= 70) {
        document.write("<h1> average </h1>");
      } else if (Avg >= 50 && Avg <= 60) {
        document.write("<h1> + pass + </h1>");
      }
      //#endregion

 //#endregion
 
  /******* End Your Code ********* */
  
  
