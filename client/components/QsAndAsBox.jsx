import React from 'react';
import QWithAs from './QWithAs';

// The large body section containing all the stored questions and answers, as well as the answer form and scroller.
class QsAndAsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollerPage: 1,
    };
  }

  render() {
    const { questions, restaurantID } = this.props;
    const { scrollerPage } = this.state;
    return (
      <div>
        {/* Selects the 3 questions that we want, depending on the scroller state. */}
        {questions.slice((scrollerPage - 1) * 3, ((scrollerPage - 1) * 3) + 3).map((question) => (
          <QWithAs question={question} restaurantID={restaurantID} />
        ))}
        <div>Scroller</div>
      </div>
    );
  }
}

export default QsAndAsBox;
