import './Dashboard.scss'

const Dashboard = ({children}) => {
	return (
		<div className="dashboard">
			<div className="dashboard-container">
				{children}
			</div>
		</div>
	);
};

export default Dashboard;
