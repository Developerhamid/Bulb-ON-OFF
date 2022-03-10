    const btnOn = document.querySelector('#btnOn');
    const btnOff = document.querySelector('#btnOff');
    const bulbOff = document.querySelector('#bulbOff');
    const bulbOn = document.querySelector('#bulbOn');

    const TurnOn = () =>{
        bulbOff.style.display = 'none';
        bulbOn.style.display = 'inline';
    };

    const TurnOff = () =>{
        bulbOff.style.display = 'inline';
        bulbOn.style.display = 'none';
    };

    btnOn.addEventListener('click',TurnOn);
    btnOff.addEventListener('click',TurnOff);