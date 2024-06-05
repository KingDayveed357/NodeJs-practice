const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res', () => {
    console.log(`data received`);
})

customEmitter.on("res", () => {
  console.log(`other logic`);
});

customEmitter.emit('res')