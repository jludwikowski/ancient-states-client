import React from 'react';
import Resources from '../../Models/Resources';

export const StatusPane: React.FunctionComponent<Resources> = (props) => (
     <div className='sidebar-sticky'>
         <ul className='flex-column nav'>
             { Object.keys(props).map((key:any, index) => {
                     return (
                         <li className='item' key={index}>
                             <img src={props[key].imageUrl} className="icon" />
                             <span> {props[key].label}</span><span>: {props[key].value}</span>
                         </li>
                     )
                 }
             )}
        </ul>
    </div>

)
