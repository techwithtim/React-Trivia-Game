import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';

export default createBoard({
    name: 'AnswerRed',
    Board: () => <Answer text="Timothy" color="red" disabled={true} />,
    isSnippet: true,
});
