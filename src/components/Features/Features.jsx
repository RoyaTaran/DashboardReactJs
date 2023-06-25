import React from 'react'
import './Features.css'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
   <>
     <div className="mainfeatures">
       <div className="feature">
       <div className="title">
          درآمد
        </div>
        <div className="Revanue">
            <div className="priceReVanue">
               548.333<span>ریال</span> 
            </div>
            <div className="Percentage">
                <span>12.2</span>
                <div className='icon danger'>
                    <ArrowDownwardIcon/>
                </div>
            </div>
        </div>
        <div className="compared">
            <span>مقایسه یک ماهه گذشته</span>
        </div>
       </div>


       <div className="feature">
       <div className="title">
          فروش
        </div>
        <div className="Revanue">
            <div className="priceReVanue">
               48<span>ریال</span> 
            </div>
            <div className="Percentage">
                <span>1</span>
                <div className='icon '>
                    <ArrowUpwardIcon/>
                </div>
            </div>
        </div>
        <div className="compared">
            <span>مقایسه یک ماهه گذشته</span>
        </div>
       </div>


       <div className="feature">
       <div className="title">
          هزینه ها
        </div>
        <div className="Revanue">
            <div className="priceReVanue">
                58.333<span>ریال</span> 
            </div>
            <div className="Percentage">
                <span>2.2</span>
                <div className='icon danger'>
                    <ArrowDownwardIcon/>
                </div>
            </div>
        </div>
        <div className="compared">
            <span>مقایسه یک ماهه گذشته</span>
        </div>
       </div>
     </div>
   </>
  )
}
