
// 1. Type any word
// 2. When enter key or add button pressed, item is added below.
// 3. Each added element is a button, nested within li element.
// 4. When item is clicked it marks it's done by putting a css strike through the words.
// 5. Then item dissapers from the list.



var form = document.getElementById('add-todo')
var itemList = document.getElementById('todo-list')
var input = document.querySelector('input');


form.onsubmit = function(event) {
    // prevent the form submition
    event.preventDefault ()
// access form data
    var item = document.querySelector('input').value
    // and remove empty entries
    if(item.trim() !== "") {
       button.textContent = item
    var button = document.createElement('button')
    var list = document.createElement('li')

       item.appendChild(list)
       list.appendChild(button)

       // reset the form field
       input.value = ""
        var count = 0
       button.addEventListener ('click', e => {
        count++

        if(count === 1) {
            button.style.textDecoration = 'line-through' 
        } else uf (count === 2) {
            list.removeChild(button)
        }
    } )
}
        else {
            form.reset ()
             return
    }
}

