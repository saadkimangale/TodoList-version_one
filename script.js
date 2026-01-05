const task = document.getElementById("task");
const popup = document.getElementById("popup");
const modapToPopup= document.getElementById("modapToPopup");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

const btn =  document.getElementById("submit");
const task_List =  document.getElementById("result");

let taskToDelete = "";
  
      task.addEventListener('keypress', (e)=>{
        if(e.key === "Enter"){
            btn.click();
        }

      })

      btn.addEventListener('click', ()=>{

        if(task.value.trim() === "") return;

        //create div for a row of data
        const task_Row = document.createElement("div")
        task_Row.className = "taskRow";

        //create div for a text and button
        const task_Button = document.createElement("div")
        task_Button.className = "taskButton";


        //create div for a text only
        const text_Only =  document.createElement("div")
        text_Only.className = "textOnly";
    
        //create div for a text element
        const task_Text = document.createElement("p")
        task_Text.className = "taskText";
        task_Text.textContent = task.value;

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit";
         editBtn.className = "edit-btn";

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        const tickBtn = document.createElement("button")
        tickBtn.textContent = "Tick";
        tickBtn.className = "tick-btn";


        // Add delete functionality

       deleteBtn.addEventListener("click", () => {

     taskToDelete = task_Row;

     popup.classList.remove("hidden");
     modapToPopup.classList.remove("hidden");


      document.body.style.overflow = "hidden";
  
});
          //  addTickfuntionality
         tickBtn.addEventListener("click", ()=>{
          task_Text.classList.toggle("tick");
            
        })
              

        // AddEditBtnFunctionality

        editBtn.addEventListener("click", ()=>{

        const edit_Text =  task_Text.textContent;  

        const input_btns =  document.createElement("div");
        input_btns.className = "input-Btns";
         
        // CreateInputType
        const input_Value = document.createElement("input");
        input_Value.type = "text"
        input_Value.className = "input-value";
        input_Value.value = edit_Text;


       const save_Btn =  document.createElement("button");
       save_Btn.textContent = "Save";
       save_Btn.className = "save-btn";

       const cancel_Btn =  document.createElement("button");
       cancel_Btn.textContent = "Cancel";
       cancel_Btn.className = "cancel-btn";

       input_btns.appendChild(input_Value)
       input_btns.appendChild(save_Btn)
       input_btns.appendChild(cancel_Btn)

           
      text_Only.replaceWith(input_btns);
      // task_Row.replaceChild(input_btns, task_Button);
      input_Value.focus();

      task_Button.classList.add("disabled");



      save_Btn.onclick = ()=>{

        const updated_Task =  input_Value.value.trim ();

        if(updated_Task !== "") {
          task_Text.textContent = updated_Task;
        }

        input_btns.replaceWith(text_Only);
        task_Button.classList.remove("disabled");
        
      }

      cancel_Btn.onclick = () => {

        input_btns.replaceWith(text_Only);
        task_Button.classList.remove("disabled");
      }
 
       input_Value.addEventListener("keydown", (e)=>{
        if(e.key == "Enter"){
          save_Btn.click()
        }

        if(e.key == "Escape"){
          cancel_Btn.click()
        }
       })

    
        })

          
    // Add text inside text div
    text_Only.appendChild(task_Text);

    // Add buttons to button container
    task_Button.appendChild(editBtn);
    task_Button.appendChild(deleteBtn);
    task_Button.appendChild(tickBtn);

    // Add everything to row
    task_Row.appendChild(text_Only);
    task_Row.appendChild(task_Button);

    // Add row to list
    task_List.appendChild(task_Row);
    


      Toastify({
        text: "Task Added",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

    // clear input
    task.value = "";

    btn.textContent = "Add Task";




      })
      

      


confirmDelete.onclick = () => {
  if (taskToDelete) {
    taskToDelete.remove();
    taskToDelete = null;
  }

  closeModel ();
}

cancelDelete.onclick = () => {
  closeModel ();
}

    
   function closeModel (){
    popup.classList.add("hidden");
    modapToPopup.classList.add("hidden");

   } 


   
      


