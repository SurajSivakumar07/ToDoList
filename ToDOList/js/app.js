//Selecting
const inputEl=document.getElementById("input")
const inputBtn=document.getElementById("click")
const listField=document.querySelector(".list")

//Function
inputBtn.addEventListener("click",function(){
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    //Creating a list 
    const li=document.createElement("li")
    li.innerText=inputEl.value
    inputEl.value=""
    li.classList.add("list-todo")
    todoDiv.appendChild(li)
    //Creating a button check
    const btn=document.createElement("button")
    btn.classList.add("complete")
    btn.innerHTML=`<i class="fas fa-check"></i>`
    todoDiv.appendChild(btn)
    //Creating a button trash
    const trashbtn=document.createElement("button")
    trashbtn.classList.add("trash")
    trashbtn.innerHTML=`<i class="fas fa-trash"></i>`
    todoDiv.appendChild(trashbtn)
    listField.appendChild(todoDiv)
})
inputEl.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        const todoDiv=document.createElement("div")
        todoDiv.classList.add("todo")
        //Creating a list 
        const li=document.createElement("li")
        li.innerText=inputEl.value
        inputEl.value=""
        li.classList.add("list-todo")
        todoDiv.appendChild(li)
        //Creating a button check
        const btn=document.createElement("button")
        btn.classList.add("complete")
        btn.innerHTML=`<i class="fas fa-check"></i>`
        todoDiv.appendChild(btn)
        //Creating a button trash
        const trashbtn=document.createElement("button")
        trashbtn.classList.add("trash")
        trashbtn.innerHTML=`<i class="fas fa-trash"></i>`
        todoDiv.appendChild(trashbtn)
        listField.appendChild(todoDiv)
    }
})

listField.addEventListener("click",function(e){
    const item=e.target
    if(item.classList[0]==="trash"){
        const todo1=item.parentElement;
        todo1.remove();
    }
    if(item.classList[0]==="complete"){
        const todo2=item.classList.toggle("Completed")
    }
});

