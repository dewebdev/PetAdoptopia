import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<div>
				Dogs <span>150</span>
			</div>

			<div>
				Cats <span>150</span>
			</div>
		</div>
	);
};

export default App;
