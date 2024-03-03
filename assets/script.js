document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
  
    const income = document.getElementById('income').value;
    const rent = document.getElementById('rent').value;
    const car = document.getElementById('car').value;
    const utilities = document.getElementById('utilities').value;
    const groceries = document.getElementById('groceries').value;
    const gas = document.getElementById('gas').value;
    const savings = document.getElementById('savings').value;
    const total = income - rent - car - utilities - groceries - gas - savings;

    const savingsTotal = document.getElementById('savingsTotal');

    if (total < 0) {
      savingsTotal.innerHTML = 'Uh oh, you lost a total of ' + total + ' this month. You should consider cutting back on some expenses.';
    } else if (total > 0) {
        savingsTotal.innerHTML = 'Great job, you saved a total of $'  + total +' this month!';
    }

    const rentIncome = (rent / income) * 100;
    const rentPercentage = document.getElementById('rentPercentage');
    rentPercentage.innerHTML = rentIncome.toFixed(2) + '%';
    
    if (rentIncome <= 30) {
      rentGrade.innerHTML = 'Good';
      rentGrade.style.color = 'green';
     } else if (rentIncome > 30 && rentIncome < 35) {
        rentGrade.innerHTML = 'Average';
        rentGrade.style.color = 'orange';
      } else {
        rentGrade.innerHTML = 'Poor';
        rentGrade.style.color = 'red';
      }

    const carIncome = (car / income) * 100;
    const carPercentage = document.getElementById('carPercentage');
    carPercentage.innerHTML = carIncome.toFixed(2) + '%'; 

    if (carIncome <= 15) {
      carGrade.innerHTML = 'Good';
      carGrade.style.color = 'green';
     } else if (carIncome > 15 && carIncome < 20) {
        carGrade.innerHTML = 'Average';
        carGrade.style.color = 'orange';
      } else {
        carGrade.innerHTML = 'Poor';
        carGrade.style.color = 'red';
      }

    const utilitiesIncome = (utilities / income) * 100;
    const utilitiesPercentage = document.getElementById('utilitiesPercentage');
    utilitiesPercentage.innerHTML = utilitiesIncome.toFixed(2) + '%';

    if (utilitiesIncome <= 5) { 
      utilitiesGrade.innerHTML = 'Good';
      utilitiesGrade.style.color = 'green';
     } else if (utilitiesIncome > 5 && utilitiesIncome < 10) {
        utilitiesGrade.innerHTML = 'Average';
        utilitiesGrade.style.color = 'orange';
      } else {
        utilitiesGrade.innerHTML = 'Poor';
        utilitiesGrade.style.color = 'red';
      }

    const groceriesIncome = (groceries / income) * 100;
    const groceriesPercentage = document.getElementById('groceriesPercentage');
    groceriesPercentage.innerHTML = groceriesIncome.toFixed(2) + '%';

    if (groceriesIncome <= 10) {
      groceriesGrade.innerHTML = 'Good';
      groceriesGrade.style.color = 'green';
     } else if (groceriesIncome > 10 && groceriesIncome < 20) {
        groceriesGrade.innerHTML = 'Average';
        groceriesGrade.style.color = 'orange';
      } else {
        groceriesGrade.innerHTML = 'Poor';
        groceriesGrade.style.color = 'red';
      }

    const gasIncome = (gas / income) * 100;
    const gasPercentage = document.getElementById('gasPercentage');
    gasPercentage.innerHTML = gasIncome.toFixed(2) + '%';

    if (gasIncome <= 5) {
      gasGrade.innerHTML = 'Good';
      gasGrade.style.color = 'green';
     } else if (gasIncome > 5 && gasIncome < 10) {
        gasGrade.innerHTML = 'Average';
        gasGrade.style.color = 'orange';
      } else {
        gasGrade.innerHTML = 'Poor';
        gasGrade.style.color = 'red';
      }

    const savingsIncome = (savings / income) * 100;
    const savingsPercentage = document.getElementById('savingsPercentage');
    savingsPercentage.innerHTML = savingsIncome.toFixed(2) + '%';

    if (savingsIncome >= 20){
      savingsGrade.innerHTML = 'Good';
      savingsGrade.style.color = 'green';
    } else if (savingsIncome > 15 && savingsIncome < 20) {
      savingsGrade.innerHTML = 'Average';
      savingsGrade.style.color = 'orange';
    } else {
      savingsGrade.innerHTML = 'Poor';
      savingsGrade.style.color = 'red';
    }}); 