import { createClass } from 'asteroid'

const Asteroid = createClass();
const asteroid = new Asteroid({
    endpoint: 'ws://localhost:3001/websocket'
});

export default asteroid
