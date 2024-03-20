import {NOTE_TYPES, SUBDIVISION_TYPES} from "../constants.js";


const initializeNoteSequence = () => {
    const noteSeq = {}
    noteSeq[SUBDIVISION_TYPES.QUARTER] = 'x'
    noteSeq[SUBDIVISION_TYPES.EIGHTH] = 'xx'
    noteSeq[SUBDIVISION_TYPES.TRIPLET] = 'xxx'
    noteSeq[SUBDIVISION_TYPES.SIXTEENTH] = 'xxxx'
    noteSeq[SUBDIVISION_TYPES.SWUNG] = 'x x'
    return noteSeq
}
const SUBDIVISION_NOTE_SEQUENCES = initializeNoteSequence()

export class SimpleSubdivision {

    constructor(subdivisionType) {
        this.noteSequence = []
        this.currentNext = 0;
        SUBDIVISION_NOTE_SEQUENCES[subdivisionType]
            .split('')
            .forEach(note => this.noteSequence.push(note === 'x' ? NOTE_TYPES.WEAK : NOTE_TYPES.NONE))
        this.noteSequence[0] = NOTE_TYPES.STRONG
    }

    nextNoteType = () => {
        if (this.currentNext >= this.noteSequence.length) {
            this.currentNext = 0
        }
        return this.noteSequence[this.currentNext++]
    }

    getTimeBetweenDivision = (tempo) => 60.0 / (this.noteSequence.length * tempo)

}