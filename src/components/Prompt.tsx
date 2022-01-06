import {FC} from 'react';
import {usePrompt} from '@/hooks';

interface PromptProps {
    when: boolean;
    message: string;
}

const Prompt: FC<PromptProps> = ({when, message}) => {
    usePrompt(message, when);
    return null;
};

export default Prompt;
