import React from 'react'

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer>
			<h5>Total Items: {length} {length === 1 ? "item" : 'items'}</h5>
			<p>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	)
}

export default Footer