let text_list : string[] = []
text_list = ["DOG", "CLOCK", "BABY", "CAT", "HOT", "FLASHLIGHT", "COLD", "SURFER", "SWIMMER", "STUDENT", "DANCER"]
basic.showString("A=30 Sec B=60 Sec")
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    game.startCountdown(30000)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    game.startCountdown(60000)
})

input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    let index = randint(0, text_list.length - 1)
    basic.showString(text_list[index])
})
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    game.addScore(1)
})
