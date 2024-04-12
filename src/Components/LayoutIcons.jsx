import React, {useState, useEffect} from 'react';
import { CiGrid41 } from "react-icons/ci";
import { BsGridFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";

const LayoutIcons = ({setLayout}) => {
    const [iconState, setIconState] = useState({
        grid: true,
        picture: false,
        list: false
    })

    useEffect(() => {
        for(const layout in iconState){
            if(iconState[layout] === true){
                setLayout(layout)
            }
        }
    }, [iconState])

    return (
        <div className="layout-icons">
          {(!iconState.grid && (iconState.picture || iconState.list)) && <CiGrid41 onClick={() => setIconState(prevStates => ({
            ...prevStates,
            grid: true, picture: false, list: false
          }))} className="layout-icons__icon"/>}
          {(iconState.grid && !iconState.picture && !iconState.list) && <BsGridFill className="layout-icons__icon"/>}

          {(!iconState.picture && (iconState.grid || iconState.list)) && <FaRegUser onClick={() => setIconState(prevStates => ({
            ...prevStates,
            grid: false, picture: true, list: false
          }))} className="layout-icons__icon"/>}
          {(iconState.picture && !iconState.grid && !iconState.list) && <FaUserAlt className="layout-icons__icon"/>}

          {(!iconState.list && (iconState.picture || iconState.grid)) && <CiCircleList onClick={() => setIconState(prevStates => ({
            ...prevStates,
            grid: false, picture: false, list: true
          }))} className="layout-icons__icon"/>}
          {(iconState.list && !iconState.picture && !iconState.grid) && <FaListUl className="layout-icons__icon"/>}
        </div>
    )
}

export default LayoutIcons;
