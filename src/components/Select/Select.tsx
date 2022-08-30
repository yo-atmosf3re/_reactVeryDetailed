import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import s from './Select.module.css'
import React, { Dispatch, SetStateAction, useState } from "react";

export type ItemsType = Array<ItemType>

export type ItemType = {
   value: number
   title: string
   country: string
   population: number
}

type SelectPropsType = {
   setTitleTown: Dispatch<SetStateAction<string>>
   titleTown: string
   items: ItemType[]
   collapsed: boolean
   setCollapsed: Dispatch<SetStateAction<boolean>>
}

// То, что должно быть в APP.tsx Для корретной работы
//
// let [collapsed, setCollapsed] = useState<boolean>(true)
// let [titleTown, setTitleTown] = useState('Select town')
// const items: ItemsType = [
//   {
//     title: 'Moscow',
//     value: 1
//   },
//   {
//     title: 'Minsk',
//     value: 2
//   },
//   {
//     title: 'Kiev',
//     value: 3
//   },
// ]

function SelectTown(props: SelectPropsType) {
   const selectedItem = props.items.find(i => i.title === props.titleTown)
   let titleItem = props.items.map(i => <div className={s.select + ' ' + (props.titleTown === i.title ? s.selected : ' ')} onClick={() => props.setTitleTown(i.title)}>{i.title}</div>)
   let onClickOnSelectHandler = () => {
      props.setCollapsed(!props.collapsed)
      setActive(!active)
   }
   let onBlurSelectTownHandler = () => {
      props.setCollapsed(false)
   }
   let [town, setTown] = useState('');
   let handleChange = (e: SelectChangeEvent) => {
      setTown(e.target.value as string)
   }
   let valueItem = props.items.map(i => i.title as string)
   console.log(valueItem[0])
   const [active, setActive] = useState<boolean>(false);


   return (<div>
      <div className={s.select} tabIndex={0} onClick={onClickOnSelectHandler} onBlur={() => { onBlurSelectTownHandler() }}>
         <div >{props.titleTown}</div>
         {props.collapsed && <div>{titleItem}</div>}
      </div>
      <div>
      </div>
   </div >);
}

export default SelectTown;

// Чтобы это работало, код ниже должен быть в App.tsx
// let [collapsed, setCollapsed] = useState<boolean>(true)
// let [titleTown, setTitleTown] = useState('Select town')
// const items: ItemsType = [
//   {
//     title: 'Moscow',
//     value: 1,
//     country: 'Russia',
//     population: 12000000,
//   },
//   {
//     title: 'Minsk',
//     value: 2,
//     country: 'Belorussia',
//     population: 2000000,
//   },
//   {
//     title: 'Kiev',
//     value: 3,
//     country: 'Ukrain',
//     population: 3000000,
//   },
//   {
//     title: 'Piter',
//     value: 4,
//     country: 'Russia',
//     population: 5000000,
//   },
//   {
//     title: 'Omsk',
//     value: 5,
//     country: 'Russia',
//     population: 1200000,
//   },
//   {
//     title: 'Kaliningrad',
//     value: 6,
//     country: 'Russia',
//     population: 500000,
//   },
//   {
//     title: "Harkov",
//     value: 7,
//     country: 'Ukrain',
//     population: 1500000,
//   },
//   {
//     title: 'Odessa',
//     value: 8,
//     country: 'Ukrain',
//     population: 1000000,
//   },
//   {
//     title: 'Brest',
//     value: 9,
//     country: 'Belorussia',
//     population: 300000,
//   },
//   {
//     title: 'Grodno',
//     value: 10,
//     country: 'Belorussia',
//     population: 400000,
//   },
// ]
// let newItemsFilteredLetters = items.filter(u => u.title.toLowerCase().indexOf('m') > -1)
// let newItemsFiltredPopulation = items.filter(u => u.population > 1500000)
// let newItemsFiltredCountry = items.filter(i => i.country === 'Russia');