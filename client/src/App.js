// vendors
import React, { Component } from 'react';

//style
import 'semantic-ui-css/semantic.min.css';
import './App.css';

// custom
import { createTimer } from './utils/timers';
import * as api from './api/timers';

// components
import EditableTimerList from './components/EditableTimerList';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import Loader from './components/Loader';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timers: [],
			isLoading: true
		};
	}

	componentDidMount() {
		api.fetchTimers(
			timers => this.setState({timers: timers}),
			err => console.log(err)
		).finally(() => {
			this.setState({ isLoading: false});
		});
	}

	handleCreateTimer = (timer) => {
		const newTimer = createTimer(timer.title, timer.project);
		this.setState((prevState, props) => {
			return {
				timers: prevState.timers.concat(newTimer)
			};
		});

		api.createTimer(
			newTimer,
			timers => this.setState({timers: timers}),
			err => console.log(err)
		);
	}

	handleUpdateTimer = (timer) => {
		if (!timer || !timer.id) {
			return;
		}

		this.setState({
			timers: this.state.timers.map(t => {
				if (timer.id === t.id) {
					return Object.assign({}, t, {
						title: timer.title,
						project: timer.project,
					  });
				} else {
					return t;
				}
			})
		});

		api.editTimer(
			timer,
			data => console.log(data),
			err => console.log(err)
		);
	}

	handleDeleteTimer = (id) => {
		this.setState({
			timers: this.state.timers.filter(t => {
				return id !== t.id;
			})
		});

		api.deleteTimer(
			{id: id},
			data => console.log(data),
			err => console.log(err)
		);
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

	pageLayout = () => {
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

	render() {
		if (this.state.isLoading) {
			return (
				<Loader>
					{ this.pageLayout() }
				</Loader>
			);
		} else {
			return this.pageLayout();
		}
	}
}

export default App;
