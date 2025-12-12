/* Copyright (c) 2025 All rights reserved
 *
 * Created by: Aarav Singhal
 * Created on: Dec 2025
 * This program uses the bluetooth radios
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(247)
basic.showIcon(IconNames.Happy)

// receive
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// loop
while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P12,
        DigitalPin.P13,
        PingUnit.Centimeters
    )

    // if distance is less than 5
    if (distanceToObject < 5) {
        basic.clearScreen()
        basic.showNumber(distanceToObject)
        radio.sendString("Too close")
        basic.pause(1000)
    } else {
        basic.clearScreen()
        basic.showNumber(distanceToObject)
        radio.sendString("")
        basic.pause(1000)
    }
}