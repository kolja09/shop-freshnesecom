import React, { useState } from 'react';

import { CheckboxBlock, CheckStyle, InputCheckbox } from './styled';

const Checkbox = () => {
	const [checked, setChecked] = useState<boolean>(false);

	const handleChecked = () => {
		setChecked(!checked)
	};

	return (
		<>
			<InputCheckbox type={'checkbox'} />
			<CheckboxBlock onClick={handleChecked}>
				{checked ? <CheckStyle> </CheckStyle> : ''}
			</CheckboxBlock>
		</>
	);
};

export default Checkbox;
