const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi  = (weight/(height*height)).toFixed(2);

    const value = document.getElementById('value');

    let description = '';

    document.getElementById('infos').classList.remove('hidden');
  
    if(bmi < 18.5){
        description = 'Cuidado! Você estáa abaixo do peso'
    }else if(bmi >= 18.5 && bmi <= 25 ){
        description = "Você está no peso ideal"
    }else if(bmi > 30 && bmi <= 30){
        description = "Cuidado! Você está com sobrepeso!"
    }else if(bmi > 30 && bmi <= 35){
        description = "CUidado! Você está com obesidade moderada!"
    }else{
        description = "Cuidado! Você está com obesidade morbida!"
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
})