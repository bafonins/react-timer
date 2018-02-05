import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import uuid from 'uuid';
import { createTimer } from './utils/timers';

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

	handleCreateTimer = (timer) => {
		const newTimer = createTimer(timer.title, timer.project);
		this.setState((prevState, props) => {
			return {
				timers: prevState.timers.concat(newTimer)
			};
		});
	}

	handleUpdateTimer = (timer) => {
		if (!timer || !timer.id) {
			return;
		}

		this.setState({
			timers: this.state.timers.map(t => {
				if (timer.id === t.id) {
					return Object.assign({}, timer, {
						title: timer.title,
						project: timer.project,
					  });
				} else {
					return t;
				}
			})
		});
	}

	handleDeleteTimer = (id) => {
		this.setState({
			timers: this.state.timers.filter(t => {
				return id !== t.id;
			})
		});
	}

	handleStartTimer = (id) => {
		this.setState({
			timers: this.state.timers.map(t => {
				if (id === t.id) {
					return Object.assign({}, t, {
						runningSince: Date.now()
					});
				} else {
					return t;
				}
			})
		});
	}

	handlePauseTimer = (id) => {
		this.setState({
			timers: this.state.timers.map(t => {
				if (id === t.id) {
					return Object.assign({}, t, {
						elapsed: t.elapsed + (Date.now() - t.runningSince),
						runningSince: null
					});
				} else {
					return t;
				}
			})
		});
	}

	render() {
		return (
			<div className="App ui three column centered grid">
				<div className="column">
					<EditableTimerList
						timers={ this.state.timers }
						submitEditForm={ this.handleUpdateTimer }
						deleteTimer={ this.handleDeleteTimer }
						startTimer={ this.handleStartTimer }
						pauseTimer={ this.handlePauseTimer }
					/>
					<ToggleableTimerForm
						submitEditForm={ this.handleCreateTimer }
					/>
				</div>
			</div>
		);
	}
}

export default App;
