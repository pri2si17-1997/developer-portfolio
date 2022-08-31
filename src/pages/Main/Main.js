import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            {/*
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Testimonials />*/}
        </div>
    )
}

export default Main
