import next from 'next';
import { createGameServer } from './game-server.mjs';

const dev = process.argv.includes('--dev');
const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOST || '0.0.0.0';
const app = next({ dev, hostname, port });
await app.prepare();
const game = createGameServer({ requestHandler: app.getRequestHandler(), upgradeHandler: app.getUpgradeHandler() });
await game.ready;
game.server.listen(port, hostname, () => console.log(`AimForge (${dev ? 'dev' : 'production'}) listening on ${hostname}:${port}`));
