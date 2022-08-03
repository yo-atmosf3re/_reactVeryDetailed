import React, { ChangeEvent, FormEvent } from "react";

type ItemType = {
   title: string
   value: any
}

type SelectPropsType = {
   value: any
   onClick: (value: any) => void
   items: ItemType[]
   select: boolean
   onChange: (e: FormEvent<HTMLDivElement>) => void
}

function Select(props: SelectPropsType) {
   let onClickOnSelectHandler = () => {
      props.onClick(!props.select)
   }
   return (<div>
      <div onChange={props.onChange} onClick={onClickOnSelectHandler}>{props.items.title}</div>
      {props.items.map(i => <div>{i.title}</div>)}
   </div>);
}

export default Select;