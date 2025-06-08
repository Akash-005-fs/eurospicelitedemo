import React from 'react'
import "../styles/home.css"
import Land from '../components/Land'
import ShowAll from '../components/ShowAll'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
// import Parallax from '../components/Parallax'
import FooterHome from '../components/FooterHome'
function Home() {
  return (
    <div>

<div className='homewrapper'>


<Land />

<Section1 />
<ShowAll />
<Section2 />
{/* <Parallax /> */}
<Section3 />
{/* <Parallax /> */}
<Section4 />
{/* <Parallax /> */}
<Section5 />
<FooterHome />


</div>


    </div>
  )
}

export default Home