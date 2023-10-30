document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    const billTotalInput = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalWithTipInput = document.getElementById('totalWithTip');
    const tipPercentageInput = document.getElementById('tipPercentage');

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);

        if (isNaN(billTotal)) {
            alert('Please enter a valid number for Bill Total.');
            return;
        }

        const tipPercentage = parseInt(tipSlider.value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
        tipPercentageInput.value = `${tipPercentage}%`;
    }

    form.addEventListener('input', calculateTip);
    form.addEventListener('change', calculateTip); // Add change event listener
});