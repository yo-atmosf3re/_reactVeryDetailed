import { Dispatch, SetStateAction } from "react"

type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onClick: Dispatch<SetStateAction<boolean>>
}

function Accordion(props: AccordionPropsType) {

   return (
      <div>
         <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
         {!props.collapsed && <AccordionBody />}
      </div>
   )

}

type AccordionTitlePropsType = {
   title: string
   onClick: Dispatch<SetStateAction<boolean>>
   collapsed: boolean
}

export function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3 onClick={() => { props.onClick(props.collapsed == true ? false : true) }}>{props.title}</h3>
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

export default Accordion