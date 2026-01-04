import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <article className="settingsContainer" >
        <h1 className="landingHeader">Play & Learn Languages Faster</h1>
        <div className="stylePara">
            {/* <p className="MJEdescription"> */}
            <div className="funContainer">
                <p className="redFont"> 
                This is another example of MJE web app by Lukasz Galik. 
                This instance proves that it is possible to fix some 
                logical errors related to the game mechanics. It also 
                adjust this piece of software to mobile view.
                On top of that Timer and a Score count are added.
                </p> 

                {/* MJE stands for MahJong Europa. It is a website that promotes alternative approach to learn 
                languages through gamification. MJE is a test approach created by Lukasz Galik - Edinburgh 
                Napier University student as part of the course. MahJong Europa will allow you to learn 
                most popular foreign languages and get enough vocabulary to achieve A2 level of language 
                comprehantion. The strength of MJE is that you can learn three languages at once. Thank you 
                for visiting this site and have fun. */}
            </div>
            {/* </p> */}
        </div>
        <Link to='/playfruits'>
            <button className="startBtn">
                Start
            </button>
        </Link>
    </article>
    </>
  )
}

export default Home