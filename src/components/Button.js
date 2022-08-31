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
        const { change, locale, show, enable } = this.props;
        if(!enable) return null;
        return (
            <>
            <button type="button" onClick={ () => change(locale) }>{ locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন '}</button>
            { show && <p>Hello</p> }
            </>
        )
    }
}

export default button;