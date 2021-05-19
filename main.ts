let throttle = 0
input.onButtonPressed(Button.A, function () {
    throttle += 10
    hoverbit.motor_power(list_motor.M0, throttle)
})
input.onButtonPressed(Button.AB, function () {
    hoverbit.stop_all_motors()
})
input.onButtonPressed(Button.B, function () {
    throttle += -10
    hoverbit.motor_power(list_motor.M0, throttle)
})
basic.forever(function () {
    basic.showNumber(throttle)
})
basic.forever(function () {
    hoverbit.servo_angle(input.rotation(Rotation.Roll), list_servo.S1)
})
