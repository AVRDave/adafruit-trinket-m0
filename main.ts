let String2 = light.createStrip(pins.D4, 16)
String2.setMode(NeoPixelMode.RGB_RGB)
String2.setLength(16)
forever(function () {
    pixel.setBrightness(255)
    pixel.setColor(pixel.fade(PixelColors.Red, 128))
    String2.showAnimation(light.rainbowAnimation, 500)
    pause(100)
})
