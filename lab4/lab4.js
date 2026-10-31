let tasks =[];

function addtask(){
    const input = document.getElementById("task").value;
    T= tasks.push(input);

    render();
}

function render(){
    document.getElementById("tasks").innerHTML = "";
    for (let i=0; i<tasks.length; i++){
        const x = tasks[i]
        const p=document.createElement("p");
        p.textContent = tasks[i];
        document.getElementById("tasks").appendChild(p);
    }
}