import { useState } from "react";
import { pages } from "../utils/Constants";
import Page0 from './../components/Page0';
import Page1 from './../components/Page1';
import Page2 from './../components/Page2';
import Page3 from './../components/Page3';
import Page4 from './../components/Page4';
import Page5 from './../components/Page5';


function Home() {
    const allPages = pages;
    const [selectedPage, setSelectedPage] = useState(0);
    const changeSelected = (id) => {
        setSelectedPage(id);
    }
    return (
        <div className="home">
            <div className="headerBar">Top Bar</div>
            <div className="body">
                <div className="sideBar">
                    {
                        allPages.map((element, id) => (
                            <button key={id} onClick={()=>changeSelected(id)}>{element}</button>
                        ))
                    }
                </div>
                <div className="contentDiv">
                    { selectedPage === 0 && <Page0 /> }
                    { selectedPage === 1 && <Page1 /> }
                    { selectedPage === 2 && <Page2 /> }
                    { selectedPage === 3 && <Page3 /> }
                    { selectedPage === 4 && <Page4 /> }
                    { selectedPage === 5 && <Page5 /> }
                </div>
            </div>
        </div>
    );
}

export default Home;