'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import { Select, MenuItem, TextField} from "@mui/material"
import { useDefaultDates } from "@mui/x-date-pickers/internals"

export default function DateReserve() {
    const [ reserveDate, setReserveDate ] = useState(null)
    const [ location, setLocation ] = useState('Chula')

    return (
            <div className="bg-slate-100 rounded-1g space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white"/>
                </LocalizationProvider>

                <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px]" 
                value={location} onChange={(e)=>setLocation(e.target.value)} >
                    <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
            </div>

    );
}