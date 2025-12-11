const task = document.getElementById("task");

const btn =  document.getElementById("submit");
const task_List =  document.getElementById("result");

  
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
    // Ask for confirmation
    const isConfirmed = confirm("Are you sure you want to delete this task?");
    
    // Only delete if user confirms
    if (isConfirmed) {
        task_Row.remove();
    }
});

         tickBtn.addEventListener("click", ()=>{
          task_Text.classList.toggle("tick");
            
        })


        editBtn.addEventListener("click", ()=>{
         const newText= prompt("Edit Task:", task_Text.textContent)

         if(newText !== null && newText.trim()!==""){
            task_Text.textContent = newText;
         }
            
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

    // clear input
    task.value = "";




      })


    
    
 
