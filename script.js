const checkBoxContainer = document.querySelector('.check-box-container');
const bulbSwitch = document.querySelector('.bulb-switch');
const bulbContainer =document.querySelector('.bulbs');
const bulbs = bulbContainer.querySelectorAll('.bulb');
const durationControl = document.querySelector('.duration-control');

const pinkLight = document.getElementById('pink');
const pinkLightTwo = document.getElementById('pink-2');
const pinkLightThree = document.getElementById('pink-3');

const greenLight = document.getElementById('green');
const greenLightTwo = document.getElementById('green-2');
const greenLightThree = document.getElementById('green-3');

const yellowLight = document.getElementById('yellow');
const yellowLightTwo = document.getElementById('yellow-2');
const yellowLightThree = document.getElementById('yellow-3');

const redLight = document.getElementById('red');
const redLightTwo = document.getElementById('red-2');
const redLightThree = document.getElementById('red-3');

const blueLight = document.getElementById('blue');
const blueLightTwo = document.getElementById('blue-2');
const blueLightThree = document.getElementById('blue-3');

const bulbSwitchState = document.querySelector('.switch-state');
const bulbSwitchStatus = {
    on: 'off',
    off: 'on'
};

checkBoxContainer.addEventListener('click', e => {
    e.target.classList.toggle('active');
    bulbSwitch.click();
    
    pinkLight.style.animationDelay = ".3s";
    pinkLightTwo.style.animationDelay = ".3s"
    pinkLightThree.style.animationDelay = ".3s"

    greenLight.style.animationDelay = ".15s";
    greenLightTwo.style.animationDelay = ".15s"
    greenLightThree.style.animationDelay = ".15s"

    yellowLight.style.animationDelay = ".12s";
    yellowLightTwo.style.animationDelay = ".12s"
    yellowLightThree.style.animationDelay = ".12s"

    redLight.style.animationDelay = ".9s";
    redLightTwo.style.animationDelay = ".9s"
    redLightThree.style.animationDelay = ".9s"

    blueLight.style.animationDelay = ".6s";
    blueLightTwo.style.animationDelay = ".6s"
    blueLightThree.style.animationDelay = ".6s"
});

bulbSwitch.addEventListener('change', () => {
    bulbContainer.classList.toggle('on');
    bulbSwitchState.textContent = bulbSwitchStatus[bulbSwitchState.textContent];
});

durationControl.addEventListener('change', e => {
    const duration = e.target.value;
    bulbs.forEach(lightBulb => {
        lightBulb.style.animationDuration = `${duration}s`;
    });
});