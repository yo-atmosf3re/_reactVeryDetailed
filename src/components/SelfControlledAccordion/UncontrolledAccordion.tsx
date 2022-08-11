import { useReducer, useState } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

export type UncontrolledAccordionPropsType = {
   titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
   // let [collapsed, setCollapsed] = useState(false)
   let [state, dispatch] = useReducer(reducer, { collapsed: false })


   return (
      <div>
         {/* <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} /> */}
         <AccordionTitle title={props.titleValue} onClick={() => { dispatch({ type: TOGGLE_COLLAPSED }) }} />
         {!state.collapsed && <AccordionBody />}
      </div >
   )
}

type AccordionTitlePropsType = {
   title: string
   onClick: () => void
}



export function AccordionTitle(props: AccordionTitlePropsType) {
   const clickChangeTitle = () => {
      props.onClick()
   }

   return (
      <h3 onClick={clickChangeTitle}>{props.title}</h3>
   )
}

export function AccordionBody() {
   return (
      <div>
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </div>
   )
}

export default UncontrolledAccordion