import React from 'react';
import Resources from '../../Models/Resources';

export const StatusPane: React.FunctionComponent<Resources> = (props) => {
    console.log(props);
    return(
     <div className='sidebar-sticky'>
         <ul className='flex-column nav'>
             <li className='item' key='0'>
                 <img src='images/icons/icons8-wheat-30.png' className="icon" />
                 <span>Food</span><span>: {props.food}</span>
             </li>
             <li className='item' key='1'>
                 <img src='images/icons/icons8-steel-bars-48.png' className="icon" />
                 <span>Iron</span><span>: {props.iron}</span>
             </li>
             <li className='item' key='2'>
                 <img src='images/icons/icons8-wood-64.png' className="icon" />
                 <span>Timber</span><span>: {props.timber}</span>
             </li>
             <li className='item' key='3'>
                 <img src='images/icons/icons8-rock-30.png' className="icon" />
                 <span>Stone</span><span>: {props.stone}</span>
             </li>
             <li className='item' key='4'>
                 <img src='images/icons/icons8-coins-30.png' className="icon" />
                 <span>Gold</span><span>: {props.gold}</span>
             </li>
             <li className='item' key='5'>
                 <img src='images/icons/icons8-museum-30.png' className="icon" />
                 <span>Influence</span><span>: {props.influence}</span>
             </li>
        </ul>
    </div>

)}
