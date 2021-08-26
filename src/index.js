import React from 'react';

import ReactDOM from 'react-dom';
import Notes from './pages/Notes';
import NotesContext from './context/notescontext';
import List from './components/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'



const AppRouter = ({ notes }) => {
    return (
        <>

            <Router>
                <NavBar />
                <Switch>
                    <Route path='/list'>
                        <List />
                    </Route>
                    <Route path='/'>
                        <Notes notes={notes} />
                    </Route>

                </Switch>
            </Router>

        </>
    )
}




const App = () => {

    const [notes] = React.useState([
        {
            id: 1,
            description: 'Note 1',
            done: false
        },
        {
            id: 2,
            description: 'Note 2',
            done: false
        }, {
            id: 3,
            description: 'Note 3',
            done: false
        },
        {
            id: 3,
            description: 'Note 3',
            done: false
        },
        {
            id: 3,
            description: 'Note 3',
            done: false
        },

    ])

    return (
        <>
            <NotesContext.Provider value={notes} >
                <AppRouter notes={notes} />
            </NotesContext.Provider>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));