// captures and conversions
let inputTxt = document.getElementById('input-item')
let input = String(inputTxt.value)
const footer = document.querySelector("footer")


//event listeners
inputTxt.addEventListener("click", () => {
    inputTxt.value = ""
})


function addItem() {
    
    if (inputTxt.value.trim() === '') {
        window.alert('Por favor, digite um item para adicionar na lista de compras')
        return
    }

    // get item list total and creates a string for name and id
    let lastItemListNumber = document.getElementsByClassName("item-checkbox").length
    let newLastItemListNumberIdName = "item-" + String(lastItemListNumber + 1)
    let newLastItemListNumberDivId = "item-div-" + String(lastItemListNumber+1)

    // div's creation and appending
    let itemDiv = document.createElement("div")
    itemDiv.setAttribute("id", newLastItemListNumberDivId)
    itemDiv.classList.add("item-div")


    // creating input, label and button
    let divCheckbox = document.createElement("input")
    divCheckbox.setAttribute("type", "checkbox")
    divCheckbox.setAttribute("name", newLastItemListNumberIdName)
    divCheckbox.setAttribute("id", newLastItemListNumberDivId)
    divCheckbox.classList.add("item-checkbox")

    let divLabel = document.createElement("label")
    divLabel.setAttribute("for", newLastItemListNumberIdName)
    divLabel.textContent = inputTxt.value

    let divButton = document.createElement("button")
    divButton.setAttribute("type", "button")
    divButton.setAttribute("onclick", "removeItem(this)")
    divButton.classList.add("remove-button")

    // input, label and button elements append to itemDiv
    itemDiv.append(divCheckbox, divLabel, divButton)

    // appends itemDiv to HTML body
    document.body.appendChild(itemDiv)
    

    // clears input
    inputTxt.value = ""

}

 


function removeItem(btn) {

    // removes task
    let item = btn.parentElement;
    item.remove()

    footer.classList.remove("hide-footer")

    // makes footer disappear after 5 seconds (5000 ms)
    setTimeout(() => {
        footer.classList.add("hide-footer")
    }, 5000)  

}

function closeFooter() {
    footer.classList.add("hide-footer")
}

