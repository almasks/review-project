import React, { useState } from 'react'
import people from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FaChevronLeft} from 'react-icons/fa'
import {FaChevronRight} from 'react-icons/fa'


export default function Reviews() {
    const [index,setIndex] =useState(0)
    const {name,job,image,text}=people[index]
    const checkNumber=(n)=>{
        if(n>people.length-1){
            return 0
        }
        if(n<0){
            return people.length-1
        }return n
    }
    const preRev=()=>{
        setIndex((index)=>{
           const newIndex= index-1
            return checkNumber(newIndex)
        })
    }
    const nextRev=()=>{
        setIndex((index)=>{
            const newIndex= index+1
            return checkNumber(newIndex)
        })
    }
    const randomNumber=()=>{
        let randomNumber=Math.floor(Math.random()*people.length)

        if(randomNumber===index){
            randomNumber=index+1
        }
        setIndex( checkNumber(randomNumber))

        
        console.log(randomNumber)
    }
  return (
   <article className='reviews'>
    <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <FaQuoteRight className='quote-icon'/>
        <h4 className='author'>{name}</h4>
    </div>
    <div >
        <h2 className='job'>{job}</h2>
        <p className='info'>{text}</p>
    </div>
    <div className='btn-container' >
        <button onClick={preRev}>
            <FaChevronLeft className='prev-btn'/>         </button>
          
<button onClick={nextRev}>
                 <FaChevronRight className='next-btn'/>
    
</button>
        <button className='random-btn' onClick={randomNumber}>surprise me</button>
    </div>
   </article>
  )
}
