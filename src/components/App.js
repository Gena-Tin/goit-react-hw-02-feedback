import React, { Component } from 'react';
import { Statistics } from './Section/Statistics/Statistics.jsx';
// import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Section/Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

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
        <Section title="Please leave feedback">
          {/* <FeedbackOptions options={} onLeaveFeedback={} /> */}
          <button type="button" onClick={this.handleStateGood}>
            Good
          </button>
          <button type="button" onClick={this.handleStateNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleStateBad}>
            Bad
          </button>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
