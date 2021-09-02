import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Paper.module.css';

/**
 * Wrapper with elevation shadow
 */
export default function Paper (props) {
	let {
		children,
		elevation = 1,
		style,
		className,
		rounded
	} = props;

	const rootCls = classnames( styles.root, className, {
		[styles[`elevation-${elevation}`]]: true,
		[styles['rounded']]: rounded
	});

	return (
		<div className={rootCls} style={style}>
			{children}
		</div>
	)
}

Paper.propTypes = {
	elevation: PropTypes.oneOf([0,1,2,3,4,5,6,7,8,9,10,11,12]),
	rounded: PropTypes.bool
}