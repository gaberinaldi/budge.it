document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
  
    const income = document.getElementById('income').value;
    const rent = document.getElementById('rent').value;
    const car = document.getElementById('car').value;
    const utilities = document.getElementById('utilities').value;
    const groceries = document.getElementById('groceries').value;
    const gas = document.getElementById('gas').value;
    const additional = document.getElementById('additional').value;
    const total = income - rent - car - utilities - groceries - gas - additional;

    const savingsTotal = document.getElementById('savingsTotal');

    if (total < 0) {
      savingsTotal.innerHTML = 'Uh oh, you lost a total of ' + total + ' this month. You should consider cutting back on some expenses.';
    } else if (total > 0) {
        savingsTotal.innerHTML = 'Great job, you saved a total of '  + total +' this month!';
    }

    const rentIncome = (rent / income) * 100;
    const rentPercentage = document.getElementById('rentPercentage');
    rentPercentage.innerHTML = rentIncome.toFixed(2) + '%';

    const carIncome = (car / income) * 100;
    const carPercentage = document.getElementById('carPercentage');
    carPercentage.innerHTML = carIncome.toFixed(2) + '%'; 

    const utilitiesIncome = (utilities / income) * 100;
    const utilitiesPercentage = document.getElementById('utilitiesPercentage');
    utilitiesPercentage.innerHTML = utilitiesIncome.toFixed(2) + '%';

    const groceriesIncome = (groceries / income) * 100;
    const groceriesPercentage = document.getElementById('groceriesPercentage');
    groceriesPercentage.innerHTML = groceriesIncome.toFixed(2) + '%';

    const gasIncome = (gas / income) * 100;
    const gasPercentage = document.getElementById('gasPercentage');
    gasPercentage.innerHTML = gasIncome.toFixed(2) + '%';

    const additionalIncome = (additional / income) * 100;
    const additionalPercentage = document.getElementById('additionalPercentage');
    additionalPercentage.innerHTML = additionalIncome.toFixed(2) + '%';
  });