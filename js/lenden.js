document.getElementById('deposit-button').addEventListener('click', function () {
    // diposit amount entry
    const dipositInput = document.getElementById('deposit-entry');
    const newDipositText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositText);

    // updated diposit total *** 

    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);
    const newDipositTotal = previousDipositAmount + newDipositAmount;

    dipositTotal.innerText = newDipositTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the diposit input
    dipositInput.value = '';

});

// withdraw amount 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-entry');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // setting withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear withdraw input 
    withdrawInput.value = '';

    // update balance after leneden 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


});


