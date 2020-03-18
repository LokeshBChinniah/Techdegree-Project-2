//Global Variables
const studentsInList = document.querySelectorAll('.student-item.cf');
const studentsPerPage = 10;


//Hide all students except for ones corresponding to the ones on the page number
const showPage = (studentsInList, page) => {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   for (let i = 0; i < studentsInList.length; i += 1) {
      if (i >= startIndex && i < endIndex ) {
         studentsInList[i].style.display = '';
      } else {
         studentsInList[i].style.display = 'none';
      }
   }
}


// create and append functioning pagination links
const appendPageLinks = (studentsInList) => {
   const divPage = document.querySelector('.page');
   const totalPageNumber = Math.ceil(studentsInList.length / 10);
   
   const divLink = document.createElement('div');
   const ulLink = document.createElement('ul');
   divLink.className = 'pagination';

   // create pagination links
   for (let i = 1; i <= totalPageNumber; i += 1) {
       const li = document.createElement('li');
       const a = document.createElement('a');

       if (i === 1) {
          a.className = 'Active';
       }
       a.href = '#';
       a.textContent = i;

       // sets up a click event and calls a showPage() function whenever the click event occurs.
       a.addEventListener('click', (e) => {
           for (let i = 1; i <= totalPageNumber; i += 1) {
               a.className = '';
           }
           e.target.className = 'Active';
           showPage(studentsInList, e.target.textContent);
       });
       li.append(a);
       ulLink.append(li);
   }
   divLink.append(ulLink);
   divPage.append(divLink);
}
//calling functions to append links and show the first 10 students
showPage(studentsInList, 1);
appendPageLinks(studentsInList);

