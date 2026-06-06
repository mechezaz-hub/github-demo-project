radio.onReceivedString(function (receivedString) {
    input.calibrateCompass()
    led.toggle(Math.map(90, 89, 24000, 90, 4), Math.sqrt(81))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("" + (Count))
})
let Count = 0
Count = 0
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 10))
    Count += 1
    if (input.pinIsPressed(TouchPin.P2)) {
        led.plotBarGraph(
        input.acceleration(Dimension.Y),
        4096,
        true
        )
    }
})
