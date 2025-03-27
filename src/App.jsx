import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zadanie3_1 from './Zadanie3_1.jsx'
import Zadanie3_2 from './Zadanie3_2.jsx'
import Zadanie3_3 from './Zadanie3_3.jsx'
import Zadanie3_4 from './Zadanie3_4.jsx'
import Zadanie3_5 from './Zadanie3_5.jsx'
import Zadanie3_6 from './Zadanie3_6.jsx'
import Zadanie3_7 from './Zadanie3_7.jsx'
import Zadanie3_8 from './Zadania3_8.jsx'
import Zadanie3_9 from './Zadanie3_9.jsx'
import Zadanie3_10 from './Zadanie3_10.jsx'
import Zadanie3_11 from './Zadanie3_11.jsx'
import Zadanie3_12 from './Zadanie3_12.jsx'

function App() {
    return(
    <section>
      <article style={{width: "97%", wordSpacing:"5px"}}>
      <p id='start'>Goto zadanie</p>
    <a href="#z1">Zadanie 1</a>
    <a href="#z2">  Zadanie 2</a>
    <a href="#z3">  Zadanie 3</a>
    <a href="#z4">  Zadanie 4</a>
    <a href="#z5">  Zadanie 5</a>
    <a href="#z6">  Zadanie 6</a>
    <a href="#z7">  Zadanie 7</a>
    <a href="#z8">  Zadanie 8</a>
    <a href="#z9">  Zadanie 9</a>
    <a href="#z10">  Zadanie 10</a>
    <a href="#z11">  Zadanie 11</a>
    <a href="#z12">  Zadanie 12</a>
    </article>
    <h1 id='z1' ><a href="#start">Zadanie 1</a></h1>
    <Zadanie3_1/>
    <h1 id='z2' ><a href="#start">Zadanie 2</a></h1>
    <Zadanie3_2/>
    <h1 id='z3' ><a href="#start">Zadanie 3</a></h1>
    <Zadanie3_3 text="Name"/>
    <h1 id='z4' ><a href="#start">Zadanie 4</a></h1>
    <Zadanie3_4/>
    <h1 id='z5' ><a href="#start">Zadanie 5</a></h1>
    <Zadanie3_5/>
    <h1 id='z6' ><a href="#start">Zadanie 6</a></h1>
    <Zadanie3_6/>
    <h1 id='z7' ><a href="#start">Zadanie 7</a></h1>
    <Zadanie3_7/>
    <h1 id='z8' ><a href="#start">Zadanie 8</a></h1>
    <Zadanie3_8/>
    <h1 id='z9' ><a href="#start">Zadanie 9</a></h1>
    <Zadanie3_9/>
    <h1 id='z10' ><a href="#start">Zadanie 10</a></h1>
    <Zadanie3_10/>
    <h1 id='z11' ><a href="#start">Zadanie 11</a></h1>
    <Zadanie3_11/>
    <h1 id='z12' ><a href="#start">Zadanie 12</a></h1>
    <Zadanie3_12/>
    </section>

    
  )
}

export default App
