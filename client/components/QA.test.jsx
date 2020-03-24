import React from 'react';
import Enzyme from 'enzyme';
import QA from './QA';
import AskButton from './AskButton';
import AllQuestionsLink from './AllQuestionsLink';
import QsAndAsBox from './QsAndAsBox';
import AskForm from './AskForm';
import GuidelinesModal from './GuidelinesModal';
import LoginModal from './LoginModal';
import QWithAs from './QWithAs';
import Scroller from './Scroller';
import AnswerForm from './AnswerForm';
import VoteSwitch from './VoteSwitch';

it('exists and contains all the correct components', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.exists());
  expect(wrap.containsMatchingElement(<AskButton />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<AllQuestionsLink />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<QsAndAsBox />)).toBeTruthy();
  expect(wrap.containsMatchingElement(<Scroller />)).toBeTruthy();
});

it('renders and removes the AskForm when the corresponding buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<AskForm />)).toBeFalsy();
  wrap.find(AskButton).simulate('click');
  expect(wrap.containsMatchingElement(<AskForm />)).toBeTruthy();
  wrap.find('#ask-form .large-white-button').simulate('click');
  expect(wrap.containsMatchingElement(<AskForm />)).toBeFalsy();
});

it('renders and removes the GuidelinesModal when the AskForm buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
  wrap.find(AskButton).simulate('click');
  wrap.find('#ask-form .guidelines').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeTruthy();
  wrap.find('.modal-guidelines .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
});

it('renders and removes the LoginModal when the AskForm buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
  wrap.find(AskButton).simulate('click');
  wrap.find('#ask-form .large-black-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeTruthy();
  wrap.find('.modal-login .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
});

const mockData = [{"author":{"reviewsCount":{"1":6,"2":7,"3":2,"4":1,"5":2},"username":"Mr. Jammie Howell","avatarUrl":"https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg","level":75,"cakeYear":1994,"hometown":"Davontebury, Tonga","contributions":9,"citiesVisited":6,"helpfulVotes":1},"_id":"5e6bcc9d3e76d406e9d247ad","text":"Voluptatum similique qui ut cupiditate quia dolor est provident perspiciatis. Tempore saepe et libero odit. Eligendi ea commodi iusto quo eos sequi aut id eaque. Sint sunt incidunt natus fugiat.","restaurant_id":2,"date":"Fri Jul 12 2019 11:20:20 GMT-0700 (Pacific Daylight Time)","answers":[{"author":{"reviewsCount":{"1":9,"2":7,"3":4,"4":4,"5":3},"username":"Miss Donavon Wisozk","level":38,"cakeYear":"1983","hometown":"New Alek, Cape Verde","contributions":0,"citiesVisited":8,"helpfulVotes":7},"_id":"5e6bcc9d3e76d406e9d247ae","text":"Voluptatibus cum autem quidem dignissimos dolor quia sed dicta.","index":0,"votes":0},{"author":{"reviewsCount":{"1":8,"2":1,"3":4,"4":8,"5":4},"username":"Aurelie Pfannerstill","level":77,"cakeYear":"1986","hometown":"Carrollview, Senegal","contributions":8,"citiesVisited":0,"helpfulVotes":9},"_id":"5e6bcc9d3e76d406e9d247af","text":"Voluptas maxime accusamus error qui.","index":1,"votes":3}],"__v":0}];

it('renders information in state to the screen', () => {
  const wrap = Enzyme.mount(<QA />);
  expect(wrap.containsMatchingElement(<QWithAs />)).toBeFalsy();
  wrap.setState({ questions: mockData });
  expect(wrap.containsMatchingElement(<QWithAs />)).toBeTruthy();
});

it('renders and removes the AnswerForm when the corresponding buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockData });
  expect(wrap.containsMatchingElement(<AnswerForm />)).toBeFalsy();
  wrap.find('.question-with-answers .small-black-button').simulate('click');
  expect(wrap.containsMatchingElement(<AnswerForm />)).toBeTruthy();
  wrap.find('.answer-form-buttonbar .small-white-button').simulate('click');
  expect(wrap.containsMatchingElement(<AnswerForm />)).toBeFalsy();
});

it('renders and removes the GuidelinesModal when the AnswerForm buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockData });
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
  wrap.find('.question-with-answers .small-black-button').simulate('click');
  wrap.find('.answer-form .guidelines').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeTruthy();
  wrap.find('.modal-guidelines .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<GuidelinesModal />)).toBeFalsy();
});

it('renders and removes the LoginModal when the AnswerForm buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockData });
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
  wrap.find('.question-date + .small-black-button').simulate('click');
  wrap.find('.answer-form-buttonbar .small-black-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeTruthy();
  wrap.find('.modal-login .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
});

it('displays more answers when the "Show all answers" button is pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockData });
  expect(wrap.find(VoteSwitch)).toHaveLength(1);
  wrap.find('.question-with-answers .small-white-button').simulate('click');
  expect(wrap.find(VoteSwitch)).toHaveLength(2);
});

it('displays the login modal when the vote buttons are pressed', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockData });
  wrap.find('.upvote').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeTruthy();
  wrap.find('.modal-login .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
  wrap.find('.downvote').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeTruthy();
  wrap.find('.modal-login .modal-x-button').simulate('click');
  expect(wrap.containsMatchingElement(<LoginModal />)).toBeFalsy();
});

const mockDataFive = mockData.concat(mockData, mockData, mockData, mockData);

it('changes the page when Next and Previous are clicked', () => {
  const wrap = Enzyme.mount(<QA />);
  wrap.setState({ questions: mockDataFive });
  expect(wrap.find(VoteSwitch)).toHaveLength(3);
  wrap.find('#scroller .large-black-button').simulate('click');
  expect(wrap.find(VoteSwitch)).toHaveLength(2);
  wrap.find('#scroller .large-white-button').simulate('click');
  expect(wrap.find(VoteSwitch)).toHaveLength(3);
  expect(wrap.find('.scroll-number')).toHaveLength(1);
  expect(wrap.find('.scroll-number-selected')).toHaveLength(1);
});