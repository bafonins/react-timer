import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import uuid from 'uuid';

// components
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timers: []
		};
	}

	componentDidMount() {
		this.setState({
			timers: [
				{
					title: "test-title",
					project: "test-project",
					elapsed: 3562017,
					id: uuid.v4(),
					runningSince: null
				},
				{
					title: "test-title2",
					project: "test-project2",
					elapsed: 5123491,
					id: uuid.v4(),
					runningSince: null
				}
			]
		});
	}

	render() {
		return (
			<div className='App ui three column centered grid'>
				<div className='column'>
					<EditableTimerList
						timers={ this.state.timers }
					/>
					<ToggleableTimerForm

					/>
				</div>
			</div>
		);
	}
}

export default App;
