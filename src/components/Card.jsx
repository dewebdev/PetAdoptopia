import React from 'react';

const Card = (props) => {
	return (
		<div className='card shadow-md  flex justify-center flex-col rounded-md mx-10 my-5'>
			<img
				src={props.image}
				alt={props.type}
				className='rounded-t-md object-fill h-[200px]'
			/>
			<h1 className='text-lg font-bold'>{props.type}</h1>
			<p className='font-normal'>{props.count}</p>
		</div>
	);
};

export default Card;
