for (let Index = 0; Index <= 4; Index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - Index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("Go")
basic.forever(function () {
	
})
