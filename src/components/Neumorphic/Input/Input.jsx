import classNames from "classnames";
import styles from './input.module.css';
import PropTypes from 'prop-types';

export default function Input (props) {

	let {
		className,
		style,
		onChange,
		onFocus,
		...others
	} = props;

	const rootCls = classNames( className, styles.input );

	return (
		<input onChange={onChange} onFocus={onFocus} className={rootCls} {...others}></input>
	);
}

Input.propTypes = {
	onChange: PropTypes.func,
	onFocus: PropTypes.func
}