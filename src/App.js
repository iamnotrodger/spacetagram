import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { loadLikes } from './api/AstronomyAPI';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();

const App = () => {
	useEffect(() => {
		loadLikes();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
