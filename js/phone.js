const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(data.data);
    displayPhones(phones);
}

const displayPhones = phones => {
    // console.log(phones.length);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // Display show all btn if there is more than 10 phones.
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length >12){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');

    }
    // to show a specific amount of phone
    phones = phones.slice(0, 10);

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card p-4 bg-gray-100 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

// Handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}





// loadPhone();