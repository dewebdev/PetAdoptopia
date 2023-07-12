import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faCat,
	faDog,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCat, faDog, faMagnifyingGlass);

const HeroSection = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			{/* Tagline and Paragraph Section Start */}
			<section className=' py-8 text-center'>
				<h2 className='text-3xl text-black'>
					Every pet deserves a loving home <br />
					<span className='text-yellow-500'>adopt</span> a pet today.
				</h2>
			</section>
			<section className='mx-10'>
				<p className='text-black w-[50%] text-center mx-auto'>
					Browse our available animals and learn more about the adoption
					process. Together, we can rescue, rehabilitate, and rehome pets in
					need. Thank you for supporting our mission to bring joy to families
					through pet adoption.
				</p>
			</section>
			{/* Tagline and Paragraph Section end  */}

			{/* Section 3 Start */}

			<div className='flex items-center gap-5 py-8'>
				{/* Search field Start */}
				<input
					type='text'
					placeholder='Search dogs or cats'
					className='p-2 border border-gray-300 rounded-md'
				/>

				{/* Search Field End  */}

				{/* Filter Button Start */}
				<div className='flex items-center gap-2'>
					<button className='p-2 border border-gray-300 rounded-full'>
						<FontAwesomeIcon icon={faDog} bounce />
					</button>
					<button className='p-2 border border-gray-300 rounded-full'>
						<FontAwesomeIcon icon={faCat} bounce />
					</button>
				</div>
				{/* Filter Button End  */}

				{/* Submit button Start */}
				<div>
					<button className='px-6 py-2 bg-black text-white rounded-md flex items-center justify-center gap-2'>
						<span>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</span>
						<span>Submit</span>
					</button>
				</div>
				{/* Submit Button End */}
			</div>

			{/* Section 3 End  */}
		</div>
	);
};

export default HeroSection;
