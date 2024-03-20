import {SimpleSubdivision} from "./Subdivision.js";
import {NOTE_TYPES} from "../constants.js";

let audioCtx

const SCHEDULE_INTERVAL = 25 //interval between note schedules in ms
const SCHEDULE_AHEAD_TIME = 0.1 //time to schedule ahead in seconds

export class MetronomePlayer {

    constructor(tempo, subdivision, playAnimation) {
        if (!audioCtx) {
            audioCtx = new AudioContext()
        }

        const buffer = audioCtx.createBuffer(1, 1, 22050)
        const node = audioCtx.createBufferSource()
        node.buffer = buffer
        node.start(0)

        this.loadSound('mouthpop_hi.wav', (buffer) => this.strongBuffer = buffer)
        this.loadSound('mouthpop_lo.wav', (buffer) => this.weakBuffer = buffer)
        this.intervalId = null //Interval used for scheduling notes
        this.playAnimation = playAnimation //Callback for playing a pulse animation

        this.tempo = tempo
        this.subdivision = new SimpleSubdivision(subdivision)
        this.timeBetweenNotes = this.subdivision.getTimeBetweenDivision(tempo)
        this.nextNoteType = this.subdivision.nextNoteType()
    }

    loadSound = (url, load) => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(buffer => audioCtx.decodeAudioData(buffer))
            .then(audioBuffer => {
                load(audioBuffer)
            })
    }

    getNextNoteBuffer = () => {
        switch (this.nextNoteType) {
            case NOTE_TYPES.STRONG:
                return this.strongBuffer
            case NOTE_TYPES.WEAK:
                return this.weakBuffer
            default:
                return null
        }
    }

    toggleMetronome = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
            return
        }

        this.nextNoteTime = audioCtx.currentTime
        this.intervalId = setInterval(this.noteScheduler, SCHEDULE_INTERVAL)
    }

    setTempo = (newTempo) => {
        this.tempo = newTempo
        this.timeBetweenNotes = this.subdivision.getTimeBetweenDivision(newTempo)
    }

    setSubdivision = (subdivision) => {
        this.subdivision = new SimpleSubdivision(subdivision)
        this.timeBetweenNotes = this.subdivision.getTimeBetweenDivision(this.tempo)
        this.nextNoteType = this.subdivision.nextNoteType()
    }

    noteScheduler = () => {
        while (this.nextNoteTime < audioCtx.currentTime + SCHEDULE_AHEAD_TIME) {
            this.scheduleNote()
            this.schedulePulseAnimation()
            this.advanceNextNote()
        }
    }

    scheduleNote = () => {
        const buffer = this.getNextNoteBuffer()
        if (buffer) {
            const source = audioCtx.createBufferSource()
            source.buffer = buffer
            source.connect(audioCtx.destination)
            source.start(this.nextNoteTime)
        }
    }

    advanceNextNote = () => {
        this.nextNoteTime += this.timeBetweenNotes
        this.nextNoteType = this.subdivision.nextNoteType()
    }

    schedulePulseAnimation = () => {
        if (this.nextNoteType === NOTE_TYPES.STRONG) {
            setTimeout(this.playAnimation, this.nextNoteTime - audioCtx.currentTime)
        }
    }
}
