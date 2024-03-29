import React from 'react';
import config from '../../config';
export default function Footer() {
	return (
		<section id="footer">
			<div className="inner">
				<h2 className="major">Get in touch</h2>
				<p>
					Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
					Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
					egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in
					tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
				</p>
				<form method="post" action="/#">
					<div className="fields">
						<div className="field">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="4"></textarea>
						</div>
					</div>
					<ul className="actions">
						<li>
							<input type="submit" value="Send Message" />
						</li>
					</ul>
				</form>
			</div>
		</section>
	);
}
