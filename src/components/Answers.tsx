import { useState, useEffect } from 'react';
import { Question } from '../types';
import Answer from './Answer';
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [props.question]);

    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    };

    return (
        <div className={Answers_module.choices}>
            {props.question.choices.map((choice, idx) => {
                let color = '';

                if (showAnswer && props.question.correctAnswerIdx === idx) color = 'green';
                else if (showAnswer) color = 'red';

                return (
                    <Answer
                        text={choice}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}

export default Answers;
