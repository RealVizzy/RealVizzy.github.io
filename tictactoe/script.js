sprites = ["img/swa.svg", "img/has.svg"]

onMove = false //false means player1

fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]

function fieldClicked(field) {
    if (fields[field] == null) {
        fields[field] = onMove
        document.getElementById("field" + (field + 1)).style.backgroundImage = "url(" + sprites[+onMove] + ")"
        onMove = !onMove
    }
}