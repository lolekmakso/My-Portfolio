import "./style.css";
import CV from "./cvTarasov.pdf";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Maksym</em>
					</strong>
					<br />a frontend developer
				</h1>
				
				<a href={CV} target="_blank" download className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;