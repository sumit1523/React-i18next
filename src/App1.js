import React from 'react';
import { useTranslation } from 'react-i18next';

const App1 = () => {
	const {t} = useTranslation();
	return (
		<div>
			{t('Hi')}
		</div>
	);
}

export default App1;
