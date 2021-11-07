import React from "react";

function Footer() {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className="footer">
			<p>Copyright &copy; {year}</p>
		</div>
	);
}

export default Footer;
