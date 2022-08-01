import React , {useState, } from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import Support from './pages/support';
import Stores from './pages/storesNear';
import Cart from './pages/cart';
import Account from './pages/Account';
import Results from './pages/results';
import Details from './pages/details';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
	const client = new ApolloClient({ cache: new InMemoryCache(), uri: "http://localhost:4000/graphql" });

	return (
		<ApolloProvider client={client}>

			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/support' element={<Support />} />
					<Route path='/Account' element={<Account />} />
					<Route path='/storesNear' element={<Stores />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/results' element={<Results />} />
					<Route path='/details' element={<Details />} />

				</Routes>
			</Router>		
		</ApolloProvider>
	);
}

export default App;