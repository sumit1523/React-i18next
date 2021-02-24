import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import { useTranslation } from 'react-i18next';

const App = () => {
	const { t, i18n } = useTranslation();

	const changeLang= lang => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<button className="button" onClick={() => changeLang('en')} > English </button>
					<button className="button" onClick={() => changeLang('hi')} > Hindi </button>
					<button className="button" onClick={() => changeLang('de')} > Germany </button>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<App1/>
				<h3>{t('title')}</h3>
				<h2>{t('description')}</h2>
			</header>
		</div>
	);
}

export default App;
