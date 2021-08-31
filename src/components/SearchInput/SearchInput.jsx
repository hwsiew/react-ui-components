import Paper from '../Paper';
import classnames from 'classnames';
import 'boxicons';
import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Input box for search
 */
export default function SearchInput (props) {

	const {
		className,
		style,
		focusClass,
		onSearch,
		disabled
	} = props;

	let [query, setQuery] = useState('');
	let [focus, setfocus] = useState(false);

	const rootCls = classnames('searchInput-default', className, {
		[focusClass]: focus,
		'bg-gray-50 border-gray-50': disabled
	});
	const inputCls = classnames('flex-auto', 'outline-none', {
		'bg-gray-50': disabled
	});
	const buttonCls = classnames("flex", "items-center", {
		'text-gray-300': disabled
	});

	const handleEnter = function(event){
		if(!query) return;
		if(event.key === 'Enter') {
			onSearch(event)
		}
	}

	return (
		<Paper className={rootCls} style={style} elevation={2}>
			<input 
				type="text"
				value={query}
				className={inputCls}
				onFocus={() => setfocus(true)} 
				onBlur={() => setfocus(false)}
				onChange={(e) => setQuery(e.target.value)}
				onKeyUp={handleEnter}
				disabled={disabled}
			></input>
			<button 
				className={buttonCls}
				onClick={onSearch}
				disabled={disabled}
			>
				<box-icon name='search' color="currentColor"></box-icon>
			</button>
		</Paper>
	);
}


SearchInput.propTypes = {
	onSearch: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	focusClass: PropTypes.string
};