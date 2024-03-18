

const audioCtx = new AudioContext()

export class MetronomePlayer {

    constructor() {
        this.loadSounds()
    }

    loadSounds = () => {
        this.loadSound('whistle.wav')
    }
    loadSound = (url) => {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(buffer => audioCtx.decodeAudioData(buffer))
            .then(audioBuffer => {
                this.audioBuffer = audioBuffer
            })
    }

    playSound = () => {
        const source = audioCtx.createBufferSource()
        source.buffer = this.audioBuffer
        source.connect(audioCtx.destination)
        source.start(0)
    }

    play = () => {


    }
}
