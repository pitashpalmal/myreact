import Emoji from './Emoji';

export default class Text extends Emoji {
    //eslint-disable-next-line no-useless-constructor
    constructor (props) {
        super(props);
        //The supper keyword refers to the parent class(Emoji).
    }

    render(){
        const decoratedText = this.addEmoji('I am JS language', 'icon');
        return super.render(decoratedText);
    }
}