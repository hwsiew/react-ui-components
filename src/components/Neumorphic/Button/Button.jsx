import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button (props) {

	const {
		children,
		style,
		className,
		shadow = 'top-right',
		onClick
	} = props;

	let rootCls = classNames(styles.button, styles.light, className, {
		[styles[shadow]] : true
	});

	return (
		<button 
			onClick={onClick}
			className={rootCls} 
			style={style}
		>{children}</button>
	);

}

Button.propTypes = {
	onClick: PropTypes.func,
	shadow: PropTypes.oneOf(['top-right', 'top-left', 'bottom-left', 'bottom-right']),
}