import React from 'react';
import QUESTION from '../../constant/QUESTION';
import DrawerCard from './DrawerCard';

const Drawer = () => {
    return (
        <div>
            {
                QUESTION.map(ques => <DrawerCard
                    key = {ques.key}
                    question = {ques.qus}
                    ans = {ques.ans}
                    />)
            }
        </div>
    );
};

export default Drawer;