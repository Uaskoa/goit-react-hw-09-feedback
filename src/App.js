import { Component, useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions/';
import Section from './components/Section';
import Notification from './components/Notification';
import './App.scss'

// export default function App () {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);


//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     return Math.round((good * 100) / countTotalFeedback);
//   };

// ;

//    const handleFeedback = (option) => {
//      console.log(evt)
//     //  const { name } = evt.target;
//     //  switch (name) {
//     //    case "good":
//     //      setGood((prevState) => prevState + 1);
//     //      break;

//     //    case "neutral":
//     //      setNeutral((prevState) => prevState + 1);
//     //      break;

//     //    case "bad":
//     //      setBad((prevState) => prevState + 1);
//     //      break;

//     //    default:
//     //      break;
//     //  }
//   }


 
//     return (
//       <div className="container">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={[good, neutral, bad]}
//             onLeaveFeedback={handleFeedback}
//           />
//         </Section>

//         {countTotalFeedback() ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="No feedback given"></Notification>
//         )}
//       </div>
//     );
  
// }




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  handleFeedback = option => {
    
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {

    console.log(this.state);
    return (
      <div className='container'>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section  title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default App;
