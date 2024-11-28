// language and currency drop down
document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('languageButton');
    const currencyButton = document.getElementById('currencyButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const currencyDropdown = document.getElementById('currencyDropdown');

    languageButton.addEventListener('click', function () {
        languageDropdown.classList.toggle('hidden');
    });

    currencyButton.addEventListener('click', function () {
        currencyDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#languageButton') && !event.target.closest('#languageDropdown')) {
            languageDropdown.classList.add('hidden');
        }
        if (!event.target.closest('#currencyButton') && !event.target.closest('#currencyDropdown')) {
            currencyDropdown.classList.add('hidden');
        }
    });
});


