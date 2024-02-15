import Statistic from 'components/Statistic/StatisticFeed';
import Option from 'components/FeedbackOption/Oprions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
const { Component } = require('react');

class FeedbackUser extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <Option
          onLeaveFeedback={this.handleLeaveFeedback}
          options={this.state}
        ></Option>
        <h2 style={{ fontSize: '56px', color: '#434455', fontWeight: 500 }}>
          Statistics
        </h2>
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          ></Statistic>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    );
  }
}
export default FeedbackUser;
