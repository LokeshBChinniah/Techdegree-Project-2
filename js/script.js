//Global Variables
const studentsInList = document.getElementsByClassName('student-item');
const studentsPerPage = 10;

//Hide all students except for ones corresponding to the ones on the page number
const hideStudents = (studentsInList, page) => {
   var startIndex = (page * studentsPerPage) - studentsPerPage;
   var endIndex = page * studentsPerPage;

   for (let i = 0; i < startIndex.length; i += 1) {
      if (i >= startIndex && i < endIndex ) {
         studentsInList[i].style.display = '';
      } else {
         studentsInList[i].style.display = none;
      }
   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (studentsInList) => {
   const numOfPages = Math.ceil(studentsInList.length / studentsPerPage);

}




// Remember to delete the comments that came with this file, and replace them with your own code comments.