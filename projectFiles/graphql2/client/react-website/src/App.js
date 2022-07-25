import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Results from './pages/results';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


function App() {
	const client = new ApolloClient({ cache: new InMemoryCache(), uri: "http://localhost:4000/graphql" });

return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/results' element={<Results/>} />
	</Routes>
	</Router>
);
}

export default App;
