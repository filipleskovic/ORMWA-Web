const apiKey = 'SBQsLSMIG4/bUjiI9YM8Jw==2o2PnzeHyRD29KR7'; // Zamijenite s vašim API ključem
const apiUrl = 'https://api.api-ninjas.com/v1/dogs'; // Zamijenite s vašim URL-om API-ja

const dataList = document.getElementById('dataList');

fetch(apiUrl, {
  headers: {
    'X-API-Key': apiKey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Prikaz podataka u obliku liste
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.image_link; // Prilagodite ovaj dio prema strukturi podataka koje dobivate
      dataList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });