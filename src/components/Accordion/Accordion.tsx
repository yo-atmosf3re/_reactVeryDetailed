import { Dispatch, SetStateAction } from "react"

type ItemType = {
   title: string
   value: any
}

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onClick: Dispatch<SetStateAction<boolean>>
   color?: string
   items: Array<ItemType>
   OnClickLiHandler: (value: any) => void
}

export type AccordionTitlePropsType = {
   title: string
   onClick: Dispatch<SetStateAction<boolean>>
   collapsed: boolean
   color?: string
}

export type AccordionBodyPropsType = {
   items: Array<ItemType>
   OnClickLiHandler: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
   return (
      <div>
         <AccordionTitle color={props.color} title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed} />
         {!props.collapsed && <AccordionBody OnClickLiHandler={props.OnClickLiHandler} items={props.items} />}
      </div>
   )
}

export function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3 style={{
         color: props.color ? props.color : 'black'
      }}
         onClick={() => { props.onClick(props.collapsed == true ? false : true) }}> {props.title}</h3 >
   )
}

export function AccordionBody(props: AccordionBodyPropsType) {
   return (
      <div>
         {props.items.map((i, index) => <li onClick={() => { props.OnClickLiHandler(i.value) }} key={index}>{i.title}</li>)}
      </div>
   )
}

export default Accordion