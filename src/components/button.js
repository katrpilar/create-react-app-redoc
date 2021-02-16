import React, { useState, useEffect, useContext, useRef } from "react";
import {Link} from "react-router-dom"

function ButtonDark({ ...props}) {

  // const 
  const smallerScreen = props.windowSize.breakpoint == 'sm' || props.windowSize.breakpoint == "xs" || props.windowSize.breakpoint == "md";
  // useEffect(() => { 
  //   // debugger;
  //  }, []
  //  );

  //  const handleDisable = () =>{
  //   //  debugger;
  //   return (props.currentStep + 1) > Object.keys(props.steps).length ? true : false
  //  }
  return (
    <>
      {/* <Button
        type="link"
        size={smallerScreen ? 'middle' : 'large'}
        icon={<LeftOutlined  />}
        shape="circle"
        // style={
        //   smallerScreen ? {} : {}
        // }
        onClick={(e) => {
        props.handleStepSlideChange(e, {stepTitle: Object.keys(props.steps)[props.currentStep - 1]});
        }}
        disabled={props.currentStep == 0 ? true : false}
      />
      <Button
        type="link"
        onClick={(e) => {
props.handleStepSlideChange(e, {stepTitle: Object.keys(props.steps)[props.currentStep + 1]});
        }}
        size={smallerScreen ? 'middle' : 'large'}
        icon={<RightOutlined  />}
        shape="circle"
        style={
          smallerScreen ? {} : { marginLeft: '15px' }
        }
        disabled={ (props.currentStep + 1) == Object.keys(props.steps).length ? true : false}
      /> */}
      <Link to={props.link}>
        <button name="button" style={{position: 'relative', zIndex: '3', overflow: 'hidden', padding: '15px 30px', borderRadius: '0px', backgroundColor: '#07183b', fontFamily: 'Lato, sans-serif', color: '#fff', fontSize: '12px', fontWeight: '500', letterSpacing: '2px', textDecoration: 'none',   textTransform: 'uppercase'}}>
          {props.text}
        </button>
      </Link>
    </>
  )
}
export default ButtonDark;  

