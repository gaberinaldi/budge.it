document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
  
    const income = document.getElementById('income').value;
    const rent = document.getElementById('Rent').value;
    const car = document.getElementById('Car').value;
    const total = income - rent - car;
  
    console.log('Income:', income);
    console.log('Rent/Mortgage:', rent);
    console.log('Car Payment & Insurance:', car);
    console.log(total);

    const savingsTotal = document.getElementById('savingsTotal');
    savingsTotal.innerHTML = 'You saved a total of '  + total +'!';
  });