setInterval(setClock, 1000)  /* setInterval so we can call setClock function every second or as we write 1000 ms*/

const hourHand = document.querySelector('[data-hour-hand]')  /* querySelector is used for selecting atributes or elements from html so we can work on them */
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {

  const currentDate = new Date() /* Gets the time from our current date from the device */
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 /* secondsRatio is used so that our hands dont jump on the clock we want them to be smooth  as well down there with minutesRatio for the hour jump*/
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360) /* setProperty is used to take property from css and use it in js example here is "--rotation" var*/
  }

  setClock() /* We set our clock so it doesn't jump to the current time when we first load the site */

  const hiddenElements = document.getElementsByClassName('hidden');
  const elementsLength = hiddenElements.length;
  for (let i = 0; i < elementsLength; i++) {
    hiddenElements[0].classList.remove('hidden');
  }
