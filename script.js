function openNav() {
    document.getElementById('navBar').style.width = "250px";
}

function closeNav() {
    document.getElementById('navBar').style.width = "0";
}


document.addEventListener("DOMContentLoaded", () => {
    const randomBtn = document.getElementById('random');
    const allCategories = ['mains', 'sides', 'appetizers', 'nons', 'alchs'];

    randomBtn.addEventListener('click', () => {
        let allDishes = [];

        allCategories.forEach(categoryId => {
            const categoryElement = document.getElementById(categoryId);
            if (!categoryElement) return; 
            const items = categoryElement.getElementsByTagName('li');

            for (let item of items) {
                allDishes.push(item.textContent);
            }
        });

        const resultDiv = document.getElementById('random-result');

        if (allDishes.length > 0) {
            const randomDish = allDishes[Math.floor(Math.random() * allDishes.length)];
            resultDiv.textContent = `Try this dish: ${randomDish}`;
        } else {
            resultDiv.textContent = "No dishes found!";
        }
    });

    
    const form = document.getElementById('preferencesForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedAllergies = Array.from(document.querySelectorAll('input[name="allergies"]:checked'))
            .map(cb => cb.value);
        const selectedMains = Array.from(document.querySelectorAll('input[name="main"]:checked'))
            .map(cb => cb.value);

        console.log('Selected Allergies:', selectedAllergies);
        console.log('Selected Main Preferences:', selectedMains);

        alert(`Preferences submitted!\nAllergies: ${selectedAllergies.join(', ')}\nMain: ${selectedMains.join(', ')}`);
    });
});


function selectAll(groupId) {
    const checkboxes = document.querySelectorAll(`#${groupId} input[type="checkbox"]`);
    checkboxes.forEach(cb => cb.checked = true);
}

function deselectAll(groupId) {
    const checkboxes = document.querySelectorAll(`#${groupId} input[type="checkbox"]`);
    checkboxes.forEach(cb => cb.checked = false);
}
