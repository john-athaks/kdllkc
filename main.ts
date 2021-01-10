let ζαρι = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(294, music.beat(BeatFraction.Eighth))
    ζαρι = randint(1, 3)
    if (1 == ζαρι) {
        basic.showIcon(IconNames.Butterfly)
    } else if (2 == ζαρι) {
        basic.showIcon(IconNames.Fabulous)
    } else if (3 == ζαρι) {
        basic.showIcon(IconNames.Silly)
    }
})
