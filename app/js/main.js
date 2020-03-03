const
    countryEl = document.querySelector('#nationality'),
    country_user = YMaps.location.country;

let country = [
    { id: '0', country: country_user },
    { id: '1', country: 'Россия' },
    { id: '2', country: 'Беларусь' },
    { id: '3', country: 'Украина' },
    { id: '4', country: 'America' }

];
countryEl.innerHTML = country.map(n => `<option value="${n.id}" class="form__line-option">${n.country}</option>`).join('');