import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import { useTranslation } from 'react-i18next';
import Particles from 'react-particles-js';
const App = () => {
	const { t, i18n } = useTranslation();

	const changeLang = lang => {
		i18n.changeLanguage(lang)
	}
	const style = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		overflow: "hidden"
	};
	return (
		<div className="App">
			<header className="App-header">
				<div style={style}>
					<Particles
						params={{
							"particles": {
								"number": {
									"value": 50
								},
								"size": {
									"value": 3
								}
							},
							"interactivity": {
								"events": {
									"onhover": {
										"enable": true,
										"mode": "repulse"
									}
								}
							}
						}} />
				</div>
				<div style={{ zIndex: 2 }}>
					<button className="button" onClick={() => changeLang('en')} > English </button>
					<button className="button" onClick={() => changeLang('hi')} > Hindi </button>
					<button className="button" onClick={() => changeLang('de')} > Germany </button>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<App1 />
				<h3>{t('title')}</h3>
				<h2>{t('description')}</h2>
			</header>
		</div>
	);
}

export default App;
