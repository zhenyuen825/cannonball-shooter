basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    -255
    )
    basic.pause(10000)
    SuperBit.Servo2(SuperBit.enServo.S1, 205)
    SuperBit.MotorStopAll()
    basic.pause(10000)
    SuperBit.Servo2(SuperBit.enServo.S1, 105)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    -255
    )
})
