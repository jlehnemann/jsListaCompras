// captures
let inputTxt = document.getElementById('input-item')
let input = String(inputTxt.value)

let button = document.querySelector("button#submit-button")

inputTxt.addEventListener("click", () => {
    inputTxt.value = ""
})


function addItem() {
    
    if (inputTxt.value.trim() === '') {
        window.alert('Por favor, digite um item para adicionar na lista de compras')
        return
    }

    // div's creation and appending
    let itemListDiv = document.createElement("div")
    itemListDiv.setAttribute("id", "item-list-div")
    itemListDiv.classList.add("item-list-div")
    
    let itemDiv = document.createElement("div")
    itemDiv.setAttribute("id", "item-div")
    itemDiv.classList.add("item-div")

    itemListDiv.appendChild(itemDiv)

    // get item list total and creates a string for name and id
    let lastItemListNumber = document.getElementsByClassName("item-checkbox").length
    let newLastItemListNumberIdName = "item" + String(lastItemListNumber + 1)

    // creating input, label and button
    let divCheckbox = document.createElement("input")
    divCheckbox.setAttribute("type", "checkbox")
    divCheckbox.setAttribute("name", newLastItemListNumberIdName)
    divCheckbox.setAttribute("id", newLastItemListNumberIdName)
    divCheckbox.classList.add("item-checkbox")

    let divLabel = document.createElement("label")
    divLabel.setAttribute("for", newLastItemListNumberIdName)

    let divButton = document.createElement("button")
    divButton.setAttribute("type", "button")
    divButton.setAttribute("id", "remove-button")

    // input, label and button elements append to itemDiv
    itemDiv.append(divCheckbox, divLabel, divButton)

    document.body.appendChild(itemListDiv)
    

    // clears input
    inputTxt.value = ""

}
