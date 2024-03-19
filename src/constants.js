
export const COLORS = Object.freeze({
    PRIMARY: '#d465fc',
    SECONDARY: '#a22dff',
    TERTIARY: '#e51ad2',
    QUATERNARY: '#27122F',

    FONT_COLOR: '#eee',
    ERROR_PRIMARY: '#800000',
    ERROR_SECONDARY: '#4d0000',

    PRIMARY_DARK: '#662f79',
    SECONDARY_DARK: '#541f7c',
    FONT_COLOR_DARK: '#575757',
})

export const TEMPO_RANGE = Object.freeze({
    MIN_TEMPO: 30,
    MAX_TEMPO: 280
})

export const NOTIF_TYPES = Object.freeze({
    NONE: "",
    OUT_OF_RANGE: `Tempo must be between ${TEMPO_RANGE.MIN_TEMPO} and ${TEMPO_RANGE.MAX_TEMPO} beats per minute`,
    NOT_A_NUMBER: "Tempo must be a number"
})

export const BUTTON_TYPES = Object.freeze({
    PLUS: 1,
    MINUS: 2
})