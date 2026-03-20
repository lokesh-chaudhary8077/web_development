const buttons = document.querySelectorAll('button');
const input = document.getElementById('display');

// Append button value to input or perform operation
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            input.value = '';
        } else if (value === '=') {
            try {
                // Remove leading zeros (except for decimals like 0.5)
                const sanitized = input.value.replace(/\b0+(\d)/g, '$1');
                input.value = Function(`"use strict"; return (${sanitized})`)();
            } catch {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    });
});
