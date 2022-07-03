import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
    const newInputValue = inputValue.trim();

		if (newInputValue.length <= 1) return;

		onNewCategory(newInputValue);
		setInputValue("");
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Find Gifs"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
