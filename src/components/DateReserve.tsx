'use client'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'

interface DateReserveProps {
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
}

export default function DateReserve({ value, onChange }: DateReserveProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            variant: 'standard',
            fullWidth: true,
            InputLabelProps: { style: { color: '#e5e7eb' } },
            inputProps: { style: { color: '#e5e7eb' } }
          }
        }}
        sx={{
          '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
          '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
          '& .MuiInput-underline:after': { borderBottomColor: '#e5e7eb' },
          '& .MuiSvgIcon-root': { color: '#e5e7eb' }
        }}
      />
    </LocalizationProvider>
  )
}