import ReactDOM from 'react-dom/client';
import { Provider } from './app/index';
import './app/style/index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(<Provider />);
