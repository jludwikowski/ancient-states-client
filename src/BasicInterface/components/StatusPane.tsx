import React from "react";
import Resources from "../../Models/Resources";
import {BuildingCard} from "../../CityInterface/components/BuildingCard";

export const StatusPane: React.FunctionComponent<Resources> = (props) => (
             <div className="sidebar-sticky">
                 <ul className="flex-column">

                     {Object.entries(props).forEach(
                         ([key, value]) => (
                             <li className="item" key={value.label}>
                                 <span>{value.label}</span><span>: {value.value}</span>
                             </li>
                         )
                     )}

                     {/*Object.entries(props).map((key, index) => {
                         <li className="item" key={index}>
                             <span>{key}</span><span>: {props[key]}</span>
                         </li>
                     })*/}


                </ul>
            </div>

)
