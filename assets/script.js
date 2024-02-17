document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault();
  
    var income = document.getElementById('income').value;
    var rent = document.getElementById('Rent').value;
    var car = document.getElementById('Car').value;
  
    console.log('Income:', income);
    console.log('Rent/Mortgage:', rent);
    console.log('Car Payment & Insurance:', car);
    console.log('Total:', income - rent - car);
  });