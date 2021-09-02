import Paper from '../Paper';
import classnames from 'classnames';
import 'boxicons';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

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

	const rootCls = classnames( styles.root, className, {
		[focusClass]: focus,
		[styles['white-border']]: !focusClass || !focus,
		[styles.disabled]: disabled
	});
	const inputCls = classnames( styles.input, {
		[styles.disabled]: disabled
	});
	const buttonCls = classnames( styles.button, {
		[styles.disabled]: disabled
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