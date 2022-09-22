export default function Text({addEmoji, addBracket}) {
    let text = 'I am JS Prog Language.';

    if(addEmoji) {
        text = addEmoji(text, 'emoji');
    }
    if(addBracket){
        text = addBracket(text);
    }

    // return <div>{addEmoji ? addEmoji(text, 'emoji') : text }</div>
    return <div>{ text }</div>
}