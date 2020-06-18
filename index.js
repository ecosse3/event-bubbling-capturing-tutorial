document.addEventListener('DOMContentLoaded', () => {
  const one = document.querySelector('.one')
  const two = document.querySelector('.two')
  const three = document.querySelector('.three')
  const four = document.querySelector('.four')
  const five = document.querySelector('.five')

  one.addEventListener('bubblingcapturing', event => {
    console.log(`Otrzymano zdarzenie - el. 1. Faza ${translatePhase(event.eventPhase)}`)
  }, {capture: true})

  two.addEventListener('bubblingcapturing', event => {
    console.log(`Otrzymano zdarzenie - el. 2. Faza ${translatePhase(event.eventPhase)}`)
  }, {capture: true})

  three.addEventListener('bubblingcapturing', event => {
    console.log(`Otrzymano zdarzenie - el. 3. Faza ${translatePhase(event.eventPhase)}`)
  }, {capture: true})

  four.addEventListener('bubblingcapturing', event => {
    console.log(`Otrzymano zdarzenie - el. 4. Faza ${translatePhase(event.eventPhase)}`)
  }, {capture: true})

  five.addEventListener('bubblingcapturing', event => {
    console.log(`Otrzymano zdarzenie - el. 5. Faza ${translatePhase(event.eventPhase)}`)
  }, {capture: true})

  five.dispatchEvent(new CustomEvent('bubblingcapturing'))

})

function translatePhase(eventPhase) {
  switch (eventPhase) {
    case 1:
      return 'capturing';
    case 2:
      return 'at target';
    case 3:
      return 'bubbling';

  }
}
