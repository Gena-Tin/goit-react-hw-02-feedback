//import { MainSection } from './MainSection/MainSection';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleStateNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleStateBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good) || 0;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>

        <button type="button" onClick={this.handleStateGood}>
          Good
        </button>
        <button type="button" onClick={this.handleStateNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleStateBad}>
          Bad
        </button>

        <h2>Statistic</h2>

        {this.countTotalFeedback() === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </>
        )}
      </div>
    );
  }
}
