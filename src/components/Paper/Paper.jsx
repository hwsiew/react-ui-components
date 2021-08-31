import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Wrapper with elevation shadow
 */
export default function Paper (props) {
	let {
		children,
		elevation = 1,
		style,
		className
	} = props;

	const rootCls = classnames('paper-default', className,  {
		'shadow-none': elevation === 0,
		'shadow-sm': elevation === 1,
		'shadow-md': elevation === 2, 
		'shadow-lg': elevation === 3, 
		'shadow-xl': elevation === 4, 
		'shadow-2xl': elevation === 5, 
	});

	return (
		<div className={rootCls} style={style}>
			{children}
		</div>
	)
}

Paper.propTypes = {
	elevation: PropTypes.oneOf([0,1,2,3,4,5])
}