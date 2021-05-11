import React from 'react';

class Foo extends React.Component{
     
    shouldComponentUpdate(nextProps){
        const { clock } = nextProps;
        console.log("1:",clock);
        console.log("2:", clock % 5);

        if(clock % 5 === 0) return true;
        return false;
    }
    render() {
        const { clock } = this.props;
        console.log("1111:",clock);
        return( 
            <div>{clock}</div>
        )
    }
} 

export default Foo;