import React from 'react';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Counter from './components/counter.js';

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Counter/>
                <Footer/>
                </React.Fragment>
        );
    }
}

export default App;