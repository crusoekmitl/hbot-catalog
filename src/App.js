import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// We will create these two pages in a moment
import PagelistComponent from './component/navbar/pagelist/pagelist'
import PagebodyComponent from './component/navbar/pagebody/pagebody';
export default function App() {
  return (
    <Router>
        <div>
          <div style={bodycontain}>
            <PagelistComponent />
            <PagebodyComponent />
            
          </div>
          <Switch>
            {/* <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/page" component={UserPage} />
            </div> */}
          </Switch>
        </div>
      </Router>
    
  )
}

const bodycontain = {
  display: 'flex',
  flexDirection: 'row',
};