function updatePaddingValue() {
    var padding = document.getElementById('padding').value;
    document.getElementById('paddingValue').textContent = padding;
}

function updateMarginValue() {
    var margin = document.getElementById('margin').value;
    document.getElementById('marginValue').textContent = margin;
}

function generateCard() {
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var padding = document.getElementById('padding').value + 'px';
    var margin = document.getElementById('margin').value + 'px';

    var businessCard = document.getElementById('businessCard');
    businessCard.style.padding = padding;
    businessCard.style.margin = margin;

    businessCard.innerHTML = `
        <h2>${name}</h2>
        <p>${title}</p>
        <p>${email}</p>
        <p>${location}</p>
    `;
}
