/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Sep 2024
 * This program will show our current temperature.
*/
let temprature = input.temperature()


basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    temprature = input.temperature()

    temprature = temprature + 273.15 
    temprature = Math.round(temprature)

    basic.showString('The temprature is: ' + temprature.toString() + 'K.')
    
    basic.showNumber(temprature)
    


})