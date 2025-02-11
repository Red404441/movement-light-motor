basic.forever(function () {
    if (input.acceleration(Dimension.X) < 3) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
        music.play(music.stringPlayable("C5 B - - - - - - ", 901), music.PlaybackMode.UntilDone)
        basic.pause(10000)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 100)
        music.play(music.stringPlayable("E F - - - - - - ", 901), music.PlaybackMode.UntilDone)
    }
})
