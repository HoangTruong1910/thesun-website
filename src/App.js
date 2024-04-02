import { Fragment } from "react";
import { BrowserRouter as Router,  Routes , Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import {DefaultLayout} from "./components/Layout";
function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    //Set default layout :
                    let Layout = DefaultLayout
                    //Logic for setting layout : 
                    if(route.layout){
                        Layout = route.layout
                    }else if (route.layout===null){
                        Layout = Fragment
                    }
                    
                    //Get value of componemt : 
                    const Page = route.component
                    return <Route key={index} 
                            path={route.path} 
                            element= {
                                <Layout>
                                    <Page/>
                                </Layout>}
                            />
                })}
            </Routes>
         
        </div>
    </Router>
  );
}

export default App;
