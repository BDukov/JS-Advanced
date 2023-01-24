function addItem() {
    input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    const list = document.getElementById('items');
    list.appendChild(newLi);
}