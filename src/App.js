import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { loadLikes } from './api/AstronomyAPI';
import './App.css';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();

const App = () => {
	useEffect(() => {
		loadLikes();
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
