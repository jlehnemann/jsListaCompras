// captures and conversions
const inputTxt = document.getElementById('input-item')
const input = String(inputTxt.value)
const footer = document.querySelector("footer")
const itemListDiv = document.querySelector("#item-list-div")


//event listeners
inputTxt.addEventListener("click", () => {
    inputTxt.value = ""
})

inputTxt.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        addItem()
    }
})


function addItem() {
    
    if (inputTxt.value.trim() === '') {
        window.alert('Por favor, digite um item para adicionar na lista de compras')
        return
    }

    // get item list total and creates a string for name and id
    const lastItemListNumber = document.getElementsByClassName("item-checkbox").length
    const newLastItemListNumberIdName = "item-" + String(lastItemListNumber + 1)
    const newLastItemListNumberDivId = "item-div-" + String(lastItemListNumber+1)

    // div's creation and appending
    const itemDiv = document.createElement("div")
    itemDiv.setAttribute("id", newLastItemListNumberDivId)
    itemDiv.classList.add("item-div")


    // creating input, label and button
    const divCheckbox = document.createElement("input")
    divCheckbox.setAttribute("type", "checkbox")
    divCheckbox.setAttribute("name", newLastItemListNumberIdName)
    divCheckbox.setAttribute("id", newLastItemListNumberDivId)
    divCheckbox.classList.add("item-checkbox")

    const divLabel = document.createElement("label")
    divLabel.setAttribute("for", newLastItemListNumberIdName)
    divLabel.textContent = inputTxt.value

    const divButton = document.createElement("button")
    divButton.setAttribute("type", "button")
    divButton.setAttribute("onclick", "removeItem(this)")
    divButton.classList.add("remove-button")

    // input, label and button elements append to itemDiv
    itemDiv.append(divCheckbox, divLabel, divButton)

    // appends itemDiv to HTML body
    itemListDiv.appendChild(itemDiv)
    

    // clears input
    inputTxt.value = ""

}

 


function removeItem(btn) {

    // removes task
    const item = btn.parentElement;
    item.remove()

    footer.classList.remove("hide-footer")

    // makes footer disappear after 4 seconds (4000 ms)
    setTimeout(() => {
        footer.classList.add("hide-footer")
    }, 4000)  

}

function closeFooter() {
    footer.classList.add("hide-footer")
}

