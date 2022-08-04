
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import SelectInput, { SelectChangeEvent } from "@mui/material/Select/SelectInput";

import { title } from "process";
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

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
   let titleItem = props.items.map(i => <div className="selectblock" onClick={() => props.setTitleTown(i.title)}>{i.title}</div>)

   let titleItemCurrent = () => {
      titleItem.map(tI => <div>{tI}</div>)
   }

   let onClickOnSelectHandler = () => {
      props.setCollapsed(!props.collapsed)
   }

   let onBlurSelectTownHandler = () => {
      props.setCollapsed(false)
      // props.setTitleTown('Select town')
   }

   let [town, setTown] = useState('');
   let handleChange = (e: SelectChangeEvent) => {
      setTown(e.target.value as string)
   }

   let valueItem = props.items.map(i => i.title as string)
   console.log(valueItem[0])

   return (<div className='select' tabIndex={0} onClick={onClickOnSelectHandler} onBlur={() => { onBlurSelectTownHandler() }}>
      {props.titleTown}
      <div onClick={titleItemCurrent}></div>
      <div>{!props.collapsed && <div>{titleItem}</div>}</div>
      <Box>
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
      </Box>
   </div >);
}

export default SelectTown;