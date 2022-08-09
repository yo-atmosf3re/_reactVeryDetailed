import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import s from './Select.module.css'
import React, { Dispatch, SetStateAction, useState } from "react";

type ItemType = {
   title: string
   value: any
}
type SelectPropsType = {
   setTitleTown: Dispatch<SetStateAction<string>>
   titleTown: string
   items: ItemType[]
   collapsed: boolean
   setCollapsed: Dispatch<SetStateAction<boolean>>
}

function SelectTown(props: SelectPropsType) {
   let titleItem = props.items.map(i => <div onClick={() => props.setTitleTown(i.title)}>{i.title}</div>)
   let titleItemCurrent = () => {
      titleItem.map(tI => <div>{tI}</div>)

   }
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
         <div>{props.titleTown}</div>
         <div onClick={titleItemCurrent}></div>
         {
            active &&
            <div className={s.items}>{!props.collapsed && <div>{titleItem}</div>}</div>
         }
      </div>
      <div>
         {/* <Box>
            <FormControl fullWidth={true}>
               <InputLabel id='demo-simple-select-standard-label'>Town</InputLabel>
               <Select
                  labelId="demo-simple-select-standard-label"
                  id='demo-simple-select-standard'
                  value={town}
                  label='Town'
                  onChange={handleChange}>
                  <MenuItem value={'Moscow'}>Moscow</MenuItem>
                  <MenuItem value={'Kiev'}>Kiev</MenuItem>
                  <MenuItem value={'Minsk'}>Minsk</MenuItem>
               </Select>
            </FormControl>
         </Box> */}
      </div>
   </div >);
}

export default SelectTown;