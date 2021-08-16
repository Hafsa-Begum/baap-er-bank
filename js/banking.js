document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');

    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText)

    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;
    //update balance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposite input field
    depositeInput.value = '';
})
//withdraw update
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value
    const newWithdrawAmount = parseFloat(newWithdrawText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    //console.log(previousWithdrawAmount);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;
    //update balance after withdraw
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    console.log(newBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw input
    withdrawInput.value = '';
})
