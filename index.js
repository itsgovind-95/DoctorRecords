// fill in javascript code here
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    
    //getting values
    const name = document.getElementById("name").value;
    const id = document.getElementById("docID").value;
    const department = document.getElementById("dept").value;
    const experience = document.getElementById("exp").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mbl").value;

    if(name==="" || id==="" || 
        department==="" || experience==="" || 
        email==="" || mobile===""){
            alert("Please fill all the fields");
            return;
        }
     if(id < 0 ){
        alert("ID should be positive");
        return;
     }
     if(experience < 0) {
        alert("Experience should be positive");
        return;
     }
    if(mobile <= 0 ||mobile.length !== 10) {
        alert("Enter a valid Mobile Number!");
        return; 
    }

        //creating table body
    const tableBody = document.querySelector("table tbody");
    tableBody.setAttribute("class","tbodyStyle");
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const departmentCell = newRow.insertCell(2);
    const experienceCell = newRow.insertCell(3);
    const emailCell = newRow.insertCell(4);
    const mobileCell = newRow.insertCell(5);
    const roleCell = newRow.insertCell(6);
    const deleteCell = newRow.insertCell(7);

    // assigning values
    nameCell.innerHTML = name;
    idCell.innerHTML = id;
    departmentCell.innerHTML = department;
    experienceCell.innerHTML = experience;
    emailCell.innerHTML = email;
    mobileCell.innerHTML = mobile;
    if(experience < 0){
        roleCell.innerHTML = "";
    }else if(experience > 5) {
        roleCell.innerHTML = "Senior";
    }else if(experience > 2 && experience <=5){
        roleCell.innerHTML = "Junior";
    }else {
        roleCell.innerHTML = "Intern";
    } 
   const deleteButton = document.createElement("button");
   deleteButton.setAttribute("id", "button")
   deleteButton.innerHTML = "Delete";
   deleteCell.appendChild(deleteButton);
   deleteButton.addEventListener("click", function(){
    tableBody.parentNode.deleteRow(newRow.rowIndex);
   })

   document.querySelector("form").reset();

})

