import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import dogsData from './Data/dogDatabase';
import catsData from './Data/catDatabase';

const App = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />

			<div className='flex gap-3 items-center mx-10'>
				<span className='text-lg font-bold'>Dogs</span>
				<span className='font-normal'>4</span>
			</div>

			<div className='grid grid-cols-4'>
				{dogsData.map((dog) => (
					<Card
						key={dog.id} // Provide a unique key for each element in the array
						type={dog.type}
						image={dog.image}
						count={dog.count}
					/>
				))}
			</div>
			<div className='flex gap-3 items-center mx-10'>
				<span className='text-lg font-bold'>Cats</span>
				<span className='font-normal'>4</span>
			</div>

			<div className='grid grid-cols-4'>
				{catsData.map((cat) => (
					<Card
						key={cat.id} // Provide a unique key for each element in the array
						type={cat.type}
						image={cat.image}
						count={cat.count}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
