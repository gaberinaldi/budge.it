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
  });