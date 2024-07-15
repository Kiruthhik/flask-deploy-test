function popupFn() {
    document.getElementById(
        "overlay"
    ).style.display = "block";
    document.getElementById(
        "popupDialog"
    ).style.display = "block";
}
function closeFn() {
document.getElementById(
        "overlay"
).style.display = "none";
    document.getElementById(
        "popupDialog"
).style.display = "none";
}
document.addEventListener("DOMContentLoaded", (event) => {
const latitude = 37.7749; // Static latitude
const longitude = -122.4194; // Static longitude
const apiKey = 'AIzaSyCOvCZr0GgzzjKbdeGiP_W7v4mHx_QCaTs'; // Replace with your API key if needed

const systemModulesWatts = document.getElementById("system_modules_watts");
const systemModulesRange = document.getElementById("system_modules_range");
const modulesRangeDisplayQty = document.getElementById("modules_range_display_qty");
const modulesCalculatorDisplay = document.getElementById("modules_calculator_display");

function updateRange(rangeElement, displayElement) {
    displayElement.innerHTML = rangeElement.value;
}

function calculate_output(rangeElement, wattsElement, displayElement) {
    var totalWatts = Number(rangeElement.value) * Number(wattsElement.value);
    var totalKilowatts = (totalWatts / 1000).toFixed(2);
    displayElement.innerHTML = totalKilowatts + " kW";
}

systemModulesRange.addEventListener("input", () => {
    updateRange(systemModulesRange, modulesRangeDisplayQty);
    calculate_output(systemModulesRange, systemModulesWatts, modulesCalculatorDisplay);
});

// Initial calculation
updateRange(systemModulesRange, modulesRangeDisplayQty);
calculate_output(systemModulesRange, systemModulesWatts, modulesCalculatorDisplay);
});