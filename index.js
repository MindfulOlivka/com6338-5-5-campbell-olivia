
// 1. Type any word
// 2. When enter key or add button pressed, item is added below.
// 3. Each added element is a button, nested within li element.
// 4. When item is clicked it marks it's done by putting a css strike through the words.
// 5. Then item dissapers from the list.


var input = document.querySelector('input')
var form = document.getElementById("add-todo")
var itemlist = document.getElementById("todo-list")
const todos = []


form.onsubmit = function(e){

  // prevent the form submition
  e.preventDefault()
  
  var item = input.value.trim()
  
  if (item !== '') {
    var button = document.createElement('button')
    var list = document.createElement('li')
    button.textContent = item

    //add items to list//
    itemlist.appendChild(list)
    list.appendChild(button)
    // reset the form field
    input.value = ""
    var count = 0
   
    
    button.addEventListener('click', (e) => {
      count++
      // on one click
      if (count === 1) {
        button.style.textDecoration = "line-through"
        // on 2 clicks
      } else if (count === 2) {
        var index = Array.from(itemlist.children).indexOf(list)
        todos.splice(index, 1)
        list.removeChild(button)
        todos.push(item);
      }
    })

    
  } else {
    form.reset()
    return;
  }
}



