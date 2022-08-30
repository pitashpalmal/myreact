import React from "react";

class button extends React.Component {
    //life cycle hook shouldComponentUpdate()
    shouldComponentUpdate(nextProps) {
        //Destructuring rename
        const { change:currentChange, locale:currentLocale } = this.props;
        const { change:nextChange, locale:nextLocale } = nextProps;

        if(currentChange === nextChange && nextLocale === currentLocale){
            return false;
        }

        return true;

    }

    render() {
        console.log('button component');
        const { change, locale } = this.props;
        return (
            // <button type="button" onClick={ change }>Click Here</button>
            <button type="button" onClick={ () => change(locale) }>Click Here</button>
        )
    }
}

export default button;