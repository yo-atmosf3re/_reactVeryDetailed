import { Dispatch, SetStateAction } from "react"

export type AccordionPropsType = {
   /** Title of list */
   titleValue: string
   /** 
   * This condition of list, boolean
   */
   collapsed: boolean
   /** Callback responsible for opening and closing the list */
   onClick: Dispatch<SetStateAction<boolean>>
   /** Color of header text */
   color?: string
}

export function Accordion(props: AccordionPropsType) {

   return (
      <div>
         <AccordionTitle color={props.color} title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
         {!props.collapsed && <AccordionBody />}
      </div>
   )

}

export type AccordionTitlePropsType = {
   title: string
   onClick: Dispatch<SetStateAction<boolean>>
   collapsed: boolean
   color?: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3 style={{
         color: props.color ? props.color : 'black'
      }}
         onClick={(e) => { props.onClick(props.collapsed == true ? false : true) }}> {props.title}</h3 >
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