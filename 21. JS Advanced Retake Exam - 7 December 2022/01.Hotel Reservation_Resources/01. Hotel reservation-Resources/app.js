window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastNmae = document.getElementById('last-name');
    let checkInDate = document.getElementById('date-in');
    const checkOutDate = document.getElementById('date-out');
    let numberOfGuests = document.getElementById('people-count');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(firstName.value != '' || lastNmae.value != '' || checkInDate.value != '' || checkOutDate.value != '' || numberOfGuests.value != '' && checkInDate.value < checkOutDate.value){
            
            const element = document.createElement('ul');
            element.innerHTML =`<h1>Reservation Info</h1>
            <ul class="info-list"> == $0
            <li class="reservation content">
            <article>
            <h3>Name: ${firstName.value} ${lastNmae.value}</h3>
            <p>From Date: ${checkInDate.value}</p>
            <p>To Date: ${checkOutDate.value}</p>
            <p>For ${numberOfGuests.value} people</p>
            </article>
            <button class="edit-btn>">Edit</button>
            <button class="continue-btn">Continue</button>
            </li>
        </ul>`}
        
        clearInputFields();

    });

    function clearInputFields() {
        firstName.value = '';
        lastNmae.value = '';
        checkInDate.value = '';
        checkOutDate.value = '';
        numberOfGuests.value = '';
    }


    }  



    
    
