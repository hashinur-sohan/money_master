function callingByIdName(call) {
    const ipnut = document.getElementById(call);
    const ipnutText = ipnut.value;
    const output = parseFloat(ipnutText)
    return output;
}

document.getElementById('calculation-button').addEventListener('click', function () {
    //    calling function
    const incomeInput = callingByIdName('income-input');
    const foodInput = callingByIdName('food-input');
    const rentInput = callingByIdName('rent-input');
    const clothInput = callingByIdName('cloth-input');


    if (incomeInput <= 0 || isNaN(incomeInput)) {
        alert("Negative number or empty value or string not allowed...! ");
    }
    else if (foodInput <= 0 || isNaN(foodInput)) {
        alert("Negative number or empty value or string not allowed...! ");
    }
    else if (rentInput <= 0 || isNaN(rentInput)) {
        alert("Negative number or empty value or string not allowed...! ");
    }
    else if (clothInput <= 0 || isNaN(clothInput)) {
        alert("Negative number or empty value or string not allowed...! ");
    }
    else {

        const totalExpences = foodInput + rentInput + clothInput;
        if (totalExpences > incomeInput) {
            alert("Not Valid...! ");
        }
        else {
            // calculation total expences
            const getExpences = document.getElementById('total-expenses');
            const expencesInText = getExpences.innerText;
            const expences = parseFloat(expencesInText);
            getExpences.innerText = totalExpences;
            // calculating balance
            const balance = incomeInput - totalExpences;
            const getBalance = document.getElementById('balance');
            const getBalanceText = getBalance.innerText;
            const nowBalance = parseFloat(getBalanceText);
            getBalance.innerText = balance;
        }
    }

})


// svaing amount calculation function

document.getElementById('save-button').addEventListener('click', function () {
    // function calling
    const incomeInput = callingByIdName('income-input');
    const foodInput = callingByIdName('food-input');
    const rentInput = callingByIdName('rent-input');
    const clothInput = callingByIdName('cloth-input');

    // gating saving input
    const getSaveInput = document.getElementById('save-input');
    const saveInputText = getSaveInput.value;
    const saveInput = parseFloat(saveInputText);



    // calculation total expences
    const totalExpences = foodInput + rentInput + clothInput;
    // Balance
    const balance = incomeInput - totalExpences;
    // save amount calculation
    const saveAmount = (incomeInput * (saveInput / 100));
    // remaining Balance calcilation
    const remainingBalance = incomeInput - saveAmount - totalExpences;

    if (saveAmount > balance) {
        alert("This case is impossible");
    }
    else {
        // saving amount updating
        const getSavingAmount = document.getElementById('save-amount');
        const savingAmountText = getSavingAmount.innerText;
        const savingAmount = parseFloat(savingAmountText);
        getSavingAmount.innerText = saveAmount;

        // geting remaining balance
        const getRemainingBalance = document.getElementById('remaining-balance');
        const remainingBalanceText = getRemainingBalance.innerText;
        const updatedRemainingBalance = parseFloat(remainingBalanceText);

        // updating remaining balance amount
        getRemainingBalance.innerText = remainingBalance;

    }
})
