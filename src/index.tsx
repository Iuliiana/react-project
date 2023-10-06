import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';
import App from './app/App';
import '@/shared/configs/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Нет root контейнера'); // или createRoot(container!)
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <App />
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
