    // Add event listeners to input fields for the 'keydown' event
    document.getElementById("sl").addEventListener("keydown", handleEnterKey);
    document.getElementById("margin").addEventListener("keydown", handleEnterKey);
    document.getElementById("button").addEventListener("click", calculate);

    function handleEnterKey(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            calculate();
        }
    }

    function calculate() {
        // Check if any input field is empty
        if (
            document.getElementById("sl").value.trim() === "" ||
            document.getElementById("margin").value.trim() === ""
        ) {
            alert("Please enter values in all fields.");
            return;
        }

        let margin = parseNumber(document.getElementById("margin").value);
        let sl = parseNumber(document.getElementById("sl").value);
        

        // Check if values are not empty and are valid numbers
        if (isNaN(sl) || isNaN(margin)) {
            alert("Please enter valid numeric values.");
            return;
        }

        let percentage = sl / 100;
        let tp_answer = margin / percentage;
       

        // Display the result in the result label with two decimal places
        document.getElementById("resultLabel").textContent = "Your position size is " + tp_answer.toFixed(2);
    }

    // Helper function to parse numbers with different decimal separators
    function parseNumber(value) {
        // Return NaN for empty or undefined values
        return value ? parseFloat(value.replace(',', '.')) : NaN;
    } 
