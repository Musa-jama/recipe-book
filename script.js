function openNav() {
    document.getElementById("navBar").style.width = "250px";
}

function closeNav() {
    document.getElementById("navBar").style.width = "0";
}

function selectAll(containerId) {
    const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
    checkboxes.forEach(checkbox => checkbox.checked = true);
}

function deselectAll(containerId) {
    const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

// Optional: Random button functionality
document.addEventListener('DOMContentLoaded', () => {
    const randomBtn = document.getElementById('random');
    const resultDiv = document.getElementById('random-result');

    randomBtn.addEventListener('click', () => {
        const mains = Array.from(document.querySelectorAll('#mainPrefs input:checked')).map(el => el.value);
        if (mains.length > 0) {
            const choice = mains[Math.floor(Math.random() * mains.length)];
            resultDiv.textContent = `You should try: ${choice}`;
        } else {
            resultDiv.textContent = "Please select at least one preference to randomize.";
        }
    });
});
