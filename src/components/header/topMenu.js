import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {CgMenuRight} from "react-icons/cg";
import {TbLetterW} from "react-icons/tb";
import { GoHome} from "react-icons/go";



export const TopMenu = () => {
    return(
      <div className="toolbar toolbar-bottom tabbar-labels">
      <div className="toolbar-inner">
        <Link className="link tab-link-active" to="/">
        <GoHome size="1.5em" />
          
        </Link>
        <Link className="link" to="/wortschatz-liste">
       <TbLetterW size="1.5em" />
        </Link>
        <Link className="link" to="/navigation">
        <CgMenuRight size="1.5em" />
          
        </Link>
      </div>
    </div>
    
    )
}