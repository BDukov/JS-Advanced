window.addEventListener('load', solve);

function solve() {
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const furnitureList = document.getElementById('furniture-list');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let model = modelInput.value;
        let description = descriptionInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';

        if (modelInput.value === '' && descriptionInput.value === '') {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        let buyBtn = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.classList.add('moreBtn');

        moreInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                e.currentTarget.textContent = 'More Info';
                contentsRowElement.style.display = 'none';
            }
        });
        buyBtn.textContent = 'Buy it';
        buyBtn.classList.add('buyBtn');
        buyBtn.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            totalPriceElement.textContent = (currentTotalPrice + price).toFixed(2);

            rowElement.remove();
            contentsRowElement.remove();
        });

        actionsCellElement.appendChild(moreInfoBtn);
        actionsCellElement.appendChild(buyBtn);

        rowElement.classList.add('info');

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', '3');
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureList.appendChild(rowElement);
        furnitureList.appendChild(contentsRowElement);
    });
}