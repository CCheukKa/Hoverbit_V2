## Makecode Extension for hover:bit, the micro:bit hovercraft

Hover:bit is a swift, environmental friendly diy hovercraft for micro:bit.
Learn more at about hover:bit at https://www.makekit.no/hoverbit and you can order from https://shop.makekit.no or a distributor.

Full building instructions and videos at www.makekit.no/docs

This library provides a Microsoft Makecode extension for MakeKit Hover:bit

https://www.makekit.no/hoverbit

## Control motors
You start the cushion motor on P0 with start_cushion.
You control the pusher power of motor M2 with a number between 0 and 100.
Use the variable arm to turn motors on and off.

```
// Motor control
if (arm) {
        hoverbit.start_cushion_simple()
        hoverbit.forward_power_simple(throttle)
    } else {
        hoverbit.stop_all_motors()
    }
```

## Control the rudder
You control the rudder with a servo on P1. Input is a number between -90 and 90.

```
basic.forever(function () {
	hoverbit.direction_simple(roll)
})
```

## Choose the servo
If you want to connect a servo to another pin (P0-P2). 
```
hoverbit.servo_angle(roll, list_servo.S1)
```

## Manual cushion control
Set the cushion motor on P0 between 0 and 100.

```
hoverbit.cushion_power(10)
```

## Set any motor power
Control the speed on any motor (P0-P2)
```
hoverbit.motor_power(list_motor.M0, 0)
```

## Stop cushion
Stop the cushion motor only with
```
hoverbit.stop_cushion_simple()
```


## Supported targets

* for PXT/microbit

## License
MIT
