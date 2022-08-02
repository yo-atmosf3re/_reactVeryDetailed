import { useState } from "react";

export type UncontrolledAccordionPropsType = {
   titleValue: string
   // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
   let [collapsed, setCollapsed] = useState(true)

   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} />
         {!collapsed && <AccordionBody />}
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