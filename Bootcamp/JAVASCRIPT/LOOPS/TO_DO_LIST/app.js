let input = prompt("what would you like to do?");
const todos = ['collect Data', 'Clean Data'];
while(input !== "quit" && input !== "q"){
    if(input === "list") {
        console.log("*************")
        for( let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*************")
    } else if (input === "new") {
        const newTodo = prompt("Ok, what is the new todo?")
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === "delete"){
        const index = prompt("Ok, enter an index to delete:");
        const index = parseInt(indexStr);
        const deleted = todos
    }
    input = prompt("what would you like to do?")
}
console.log("OK, YOU QUIT THE APP!")