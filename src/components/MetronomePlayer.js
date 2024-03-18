let audioCtx

const SCHEDULE_INTERVAL = 25 //interval between note schedules in ms
const SCHEDULE_AHEAD_TIME = 0.1 //time to schedule ahead in seconds

export class MetronomePlayer {

    constructor(tempo) {
        this.loadSound('click.mp3')
        this.unlocked = false
        this.intervalId = null
        this.timeBetweenNotes = 60.0 / tempo
    }

    loadSound = (url) => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(buffer => audioCtx.decodeAudioData(buffer))
            .then(audioBuffer => {
                this.audioBuffer = audioBuffer
            })
    }

    toggleMetronome = () => {
        if (!audioCtx) {
            audioCtx = new AudioContext()
        }

        if (!this.unlocked) {
            const buffer = audioCtx.createBuffer(1, 1, 22050)
            const node = audioCtx.createBufferSource()
            node.buffer = buffer
            node.start(0)
            this.unlocked = true
        }


        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
            return
        }

        this.nextNoteTime = audioCtx.currentTime
        this.intervalId = setInterval(this.noteScheduler, SCHEDULE_INTERVAL)
    }

    setTempo = (newTempo) => {
        this.timeBetweenNotes = 60.0 / newTempo
    }

    noteScheduler = () => {
        while (this.nextNoteTime < audioCtx.currentTime + SCHEDULE_AHEAD_TIME) {
            this.scheduleNote()
            this.advanceNextNote()
        }
    }

    scheduleNote = () => {
        const source = audioCtx.createBufferSource()
        source.buffer = this.audioBuffer
        source.connect(audioCtx.destination)
        source.start(this.nextNoteTime)
    }

    advanceNextNote = () => {
        this.nextNoteTime += this.timeBetweenNotes
    }
}
