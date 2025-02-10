import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';
import { Toaster } from './components/ui/toaster.tsx';
import Page from './app/dashboard/page.tsx';
import About from './app/dashboard/about.tsx';

export function App() {

    return (
        <LocationProvider>
            <ErrorBoundary>
                <>
                    <Router>
                        <Route path="/" component={Page} />
                        <Route path="/inbox/:id" component={Page} />
                        <Route path="/about" component={About} />
                    </Router>
                    <Toaster />
                </>
            </ErrorBoundary>
        </LocationProvider>
    )
}
