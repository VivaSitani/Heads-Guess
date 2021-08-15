def on_button_pressed_a():
    game.start_countdown(30000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    global index
    index = randint(0, len(text_list) - 1)
    basic.show_string("" + (text_list[index]))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_down():
    game.add_score(1)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_b():
    game.start_countdown(60000)
input.on_button_pressed(Button.B, on_button_pressed_b)

index = 0
text_list: List[str] = []
text_list = ["DOG",
    "CLOCK",
    "BABY",
    "CAT",
    "HOT",
    "FLASHLIGHT",
    "COLD",
    "SURFER",
    "SWIMMER",
    "STUDENT",
    "DANCER"]
basic.show_string("A=30 Sec B=60 Sec")