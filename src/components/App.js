import React, { Component } from 'react';
import css from './App.module.css';
import { Statistics } from './Section/Statistics/Statistics.jsx';
import { FeedbackOptions } from './Section/FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Section/Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good) || 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div className={css.feedbackSection}>
        <Section title="Please leave feedback">
          <FeedbackOptions  options={options}
            onLeaveFeedback={this.onLeaveFeedback} />
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
