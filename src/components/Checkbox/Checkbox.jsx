
import './Checkbox.scss';

const Checkbox = ({checked, onChange, children}) => {
	return (
		<label className="g-checkbox">
			<input type="checkbox" checked={checked} onChange={onChange}/>
			<div className="label">
				<div className="label-content">
					{children}
				</div>
			</div>
		</label>
	);
};

export default Checkbox;
