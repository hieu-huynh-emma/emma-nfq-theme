fetch('https://api.ipgeolocation.io/ipgeo?apiKey=760c76c456b645fd81eadecde19808ce')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        const popupEl = document.querySelector('.popupsmart');

        const userLocationEl = popupEl.querySelector('.user-location')

        userLocationEl.textContent = data.country_name
    })
    .catch(e => {
        console.error(e);
    });
