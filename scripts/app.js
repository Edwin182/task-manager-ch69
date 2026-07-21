function saveTask()
{
    // get the values from the DOM
    const title = $("#txtTitle").val();
    const desc = $("txtDescription").val();
    const color = $("selColor").val();
    const date = $("selDate").val();
    const status = $("selStatus").val();
    const budget = $("numBudget").val();
    
    //Create the object
    const taskToSave = new Task(title, desc, color, date, status, budget);
    console.log(taskToSave);
}


function init(){
    console.log("hello from 106");
    $("#btnSave").click(saveTask);
}

window.onload = init;
// It forces the HTML and the CSS gets resolved before the logic gets executed