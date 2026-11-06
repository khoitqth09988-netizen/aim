import { createRoot } from 'react-dom/client';
import Game from '../src/app/Game';

const root = document.getElementById('root');
if (root) createRoot(root).render(<Game />);
