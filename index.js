document.addEventListener('DOMContentLoaded', () => {
  const one = document.querySelector('.one')
  const two = document.querySelector('.two')
  const three = document.querySelector('.three')
  const four = document.querySelector('.four')
  const five = document.querySelector('.five')

  let timer = 0;

  // Capturing

  one.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      one.classList.add('active')
        }, timer += 500)
  }, {capture: true})

  two.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      two.classList.add('active')
        }, timer += 500)
  }, {capture: true})

  three.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      three.classList.add('active')
        }, timer += 500)
  }, {capture: true})

  four.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      four.classList.add('active')
        }, timer += 500)
  }, {capture: true})

  five.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      five.classList.add('active')
        }, timer += 500)
  }, {capture: true})

  // Bubbling

  one.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      one.classList.remove('active')
        }, timer += 500)
  })

  two.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      two.classList.remove('active')
        }, timer += 500)
  })

  three.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      three.classList.remove('active')
        }, timer += 500)
  })

  four.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      four.classList.remove('active')
        }, timer += 500)
  })

  five.addEventListener('bubblingcapturing', () => {
    setTimeout(() => {
      five.classList.remove('active')
        }, timer += 500)
  })

  five.dispatchEvent(new CustomEvent('bubblingcapturing', {bubbles: true}))

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
