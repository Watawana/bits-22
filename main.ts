basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # # . # #
            # . # . #
            . # # # .
            # . # . #
            # # . # #
            `)
        music.playMelody("C5 G A E F C D C ", 120)
    } else {
        basic.clearScreen()
    }
})
