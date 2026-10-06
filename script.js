let button = document.querySelector("button#submit-button")


function addItem() {
    //captures
    let inputTxt = document.getElementById('input-item')
    let input = String(inputTxt.value)

    if (inputTxt.value === '') {
        window.alert('Por favor, digite um item para adicionar na lista de compras')
        return
    }


    //pega total de itens da lista
    let lastItemListNumber = itemDiv.getElementsByClassName("item-checkbox").length
    let newLastItemListNumberIdName = "item" + String(lastItemListNumber + 1)

    //div's creation and appending
    let itemListDiv = document.createElement("div")
    itemListDiv.setAttribute("item-list-div")
    itemListDiv.classList.add("item-list-div")
    
    let itemDiv = document.createElement("div")
    itemDiv.setAttribute("item-div")
    itemDiv.classList.add("item-div")

    itemListDiv.appendChild(itemDiv)

    //creating input, label and button - CONTINUE TOMORROW!!
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", newLastItemListNumberIdName)
    checkbox.setAttribute("id", newLastItemListNumberIdName)
    checkbox.classList.add("item-checkbox")

}






