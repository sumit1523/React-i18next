import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
	const { t, i18n } = useTranslation();

	function handleClick(lang) {
		i18n.changeLanguage(lang)
	}

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<button className="button" onClick={() => handleClick('en')} > English </button>
					<button className="button" onClick={() => handleClick('hi')} > Hindi </button>
					<button className="button" onClick={() => handleClick('de')} > Germany </button>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<h3>{t('title')}</h3>
				<h2>{t('description')}</h2>
			</header>
		</div>
	);
}

export default App;
