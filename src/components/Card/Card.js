import React from 'react'
import './Card.css'
import Chip from '../Chip/Chip'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'

const Card = () => {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_top_labels'>
                <Chip text="Frontend" color="green"/>
            </div>
                <MoreHorizontal/>
        </div>
        <div className='card_title'>
            lorem ipsum sdfdsfcsf s fs fs 
        </div>
        <div className='card_footer'>
            <p>
                <Clock/>
                23 sept
            </p>
            <p>
                <CheckSquare />
                1/4
            </p>
        </div>
    </div>
  )
}

export default Card