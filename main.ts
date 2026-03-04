input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 1000))
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("A F E F E G F A ", 120), music.PlaybackMode.UntilDone)
})
input.onSound(DetectedSound.Loud, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 298, 869, 90, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 869, 869, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("A F E F A F E F ", 95), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 1, 518, 131, 255, 2000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P1, function () {
    music.stopAllSounds()
})
