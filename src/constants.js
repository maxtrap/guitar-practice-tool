
export const COLORS = {
    PRIMARY: '#d465fc',
    SECONDARY: '#ab3dff',
    TERTIARY: '#e51ad2',
    QUATERNARY: '#27122F',

    FONT_COLOR: '#eee',
    ERROR_PRIMARY: '#800000',
    ERROR_SECONDARY: '#4d0000'
}

export const TEMPO_RANGE = {
    MIN_TEMPO: 30,
    MAX_TEMPO: 200
}

export const NOTIF_TYPES = Object.freeze({
    NONE: "",
    TEXT_ONLY: "Please enter an integer value",
    OUT_OF_RANGE: `Tempo must be between ${TEMPO_RANGE.MIN_TEMPO} and ${TEMPO_RANGE.MAX_TEMPO} beats per minute`
})