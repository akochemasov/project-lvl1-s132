import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestion = () => `${getRndInteger(10)} ${operations[getRndInteger(operations.length)]} ${getRndInteger(10)}`;

const getCorrectAnswer = (question) => {
  const [a, operation, b] = question.split(' ');
  const num1 = Number(a);
  const num2 = Number(b);
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const generateTask = () => {
  const question = getQuestion();
  const correctAnswer = String(getCorrectAnswer(question));
  return [question, correctAnswer];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
