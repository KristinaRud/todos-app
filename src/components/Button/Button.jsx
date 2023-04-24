import cx from "classnames";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({className, type, onClick, children, href, ...restProps}) => {

	let Component = href ? "a" : "button";

	return (
		<Component
			className={cx("btn", className)}
			{...restProps}
			href={href}
			type={href ? undefined : type}
			onClick={onClick}>
			{children}
		</Component>
	)
}

export default Button;

Button.defaultProps = {
	onClick: () => {
	},
	type: "button",
};

Button.propTypes = {
	onClick: PropTypes.func,
	href: PropTypes.string,
	type: PropTypes.string,
	to: PropTypes.string,
	className: PropTypes.string,
};
