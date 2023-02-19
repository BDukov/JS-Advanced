window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const numOfPeopleInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');

    const nextStepBtn = document.getElementById('next-btn');

    nextStepBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const numOfPeople = numOfPeopleInput.value;
        const fromDate = fromDateInput.value;;
        const days = daysInput.value;


        if (firstName.value === '' ||
            lastName.value === '' ||
            numOfPeople.value === '' ||
            fromDate.value === '' ||
            days.value === '') {
            return;
        }
        console.log('ok');

        const ticketInfoList = document.querySelector('.ticket-info-list');
        const ticketItem = document.createElement('li');

        const editBtn = document.createElement('button');
        const continueBtn = document.createElement('button');

        const article = document.createElement('article');;
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.classList.add('continue-btn');

        h3.textContent = `Name: ${firstName} ${lastName}`;
        p1.textContent = `From date: ${fromDate}`;
        p2.textContent = `For ${days} days`;
        p3.textContent = `For ${numOfPeople} people`;

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            numOfPeopleInput.value = numOfPeople;
            fromDateInput.value = fromDate;
            daysInput.value = days;
            ticketInfoList.removeChild(ticketItem);
            nextStepBtn.disabled = false;
        });

        continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextStepBtn.disabled = true;
            editBtn.remove();
            continueBtn.remove();
            const confirmTicket = document.querySelector('.confirm-ticket');
            const confirmBtn = document.createElement('button');
            const cancelBtn = document.createElement('button');

            confirmBtn.textContent = 'Confirm';
            confirmBtn.classList.add('confirm-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.classList.add('cancel-btn');
            confirmTicket.appendChild(article);
            confirmTicket.appendChild(confirmBtn);
            confirmTicket.appendChild(cancelBtn);
            confirmBtn.addEventListener('click', (e) => {
                e.preventDefault();
                ticketInfoList.removeChild(ticketItem);
                confirmTicket.removeChild(article);
                confirmTicket.removeChild(confirmBtn);
                confirmTicket.removeChild(cancelBtn);
                nextStepBtn.disabled = false;
            });
            cancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                confirmTicket.removeChild(article);
                confirmTicket.removeChild(confirmBtn);
                confirmTicket.removeChild(cancelBtn);
                nextStepBtn.disabled = false;
            });
            confirmBtn.addEventListener('click', (e) => {
                const main = document.getElementById('main');
                main.remove();
                const element = document.createElement('h1');
                element.getAttribute('id', 'thank-you');
                const thanks = document.getElementById('thank-you');
                thanks.textContent = 'Thank you, have a nice day!';

                const tnkBtn = document.createElement('button');
                tnkBtn.textContent = 'Back';
                tnkBtn.classList.add('back-btn');

                tnkBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    thanks.remove();
                    const main = document.getElementById('main');
                    main.style.display = 'block';
                    nextStepBtn.disabled = false;
                });

                element.appendChild(thanks);
            });

        });


        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        ticketItem.appendChild(article);
        ticketItem.appendChild(editBtn);
        ticketItem.appendChild(continueBtn);



        ticketInfoList.appendChild(ticketItem);

        firstNameInput.value = '';
        lastNameInput.value = '';
        numOfPeopleInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';
        nextStepBtn.disabled = true;
    });


}




