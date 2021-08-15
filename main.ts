input.onButtonPressed(Button.A, function () {
    game.startCountdown(30000)
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[index]))
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.startCountdown(60000)
})
let index = 0
let text_list: string[] = []
text_list = [
"DOG",
"CLOCK",
"BABY",
"CAT",
"HOT",
"FLASHLIGHT",
"COLD",
"SURFER",
"SWIMMER",
"STUDENT",
"DANCER"
]
basic.showString("A=30 Sec B=60 Sec")
