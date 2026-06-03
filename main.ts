radio.onReceivedString(function (receivedString) {
    input.calibrateCompass()
    led.toggle(Math.map(90, 89, 24000, 90, 4), Math.sqrt(81))
})
let Count = 0
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 10))
    Count += 1
    radio.sendString("" + (Count))
})
