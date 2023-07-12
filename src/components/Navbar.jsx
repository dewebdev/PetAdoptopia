import React from 'react';
import navIcon from '../images/navIcon.png';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center px-10 py-6'>
			{/* Logo And Brand Name Section Start */}
			<div className='text-black font-bold flex items-center cursor-pointer'>
				<img src={navIcon} alt='Logo' className='w-8 h-8 mr-2' />
				<span>PetAdoptopia</span>
			</div>
			{/* Logo And Brand Name Section End  */}

			{/* Nav Link Section Start */}
			<div className='flex justify-center items-center gap-10 mr-20'>
				<a href='/#' className='text-black hover:text-gray-800'>
					About Us
				</a>
				<a href='/#' className='text-black hover:text-gray-800'>
					Donate
				</a>
				<a href='/#' className='text-black hover:text-gray-800'>
					Adopt
				</a>
				<a href='/#' className='text-black hover:text-gray-800'>
					Contact Us
				</a>
			</div>

			{/* Nav Link Section End  */}

			{/* Sign In Section Start */}

			<div>
				<a href='/#' className='text-black hover:text-gray-800'>
					Sign In
				</a>
			</div>

			{/* Sign In Section End  */}
		</nav>
	);
};

export default Navbar;
