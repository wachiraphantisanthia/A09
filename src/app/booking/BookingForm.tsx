'use client'

import { useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel
} from '@mui/material'
import DateReserve from '@/components/DateReserve'
import { Dayjs } from 'dayjs'

export default function BookingForm() {

  const [formData, setFormData] = useState({
    nameLastname: '',
    contactNumber: '',
    venue: ''
  })

  const [date, setDate] = useState<Dayjs | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, date })
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Book Your Venue
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-10 space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Name - Lastname"
            variant="standard"
            fullWidth
            value={formData.nameLastname}
            onChange={(e) =>
              setFormData({ ...formData, nameLastname: e.target.value })
            }
            InputLabelProps={{ style: { color: '#e5e7eb' } }}
            inputProps={{ style: { color: '#e5e7eb' } }}
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:after': { borderBottomColor: '#6366f1' }
            }}
          />

          <TextField
            label="Contact Number"
            variant="standard"
            fullWidth
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
            InputLabelProps={{ style: { color: '#e5e7eb' } }}
            inputProps={{ style: { color: '#e5e7eb' } }}
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:after': { borderBottomColor: '#6366f1' }
            }}
          />
        </div>

        <FormControl fullWidth variant="standard">
          <InputLabel id="venue-label" style={{ color: '#e5e7eb' }}>
            Select Venue
          </InputLabel>
          <Select
            value={formData.venue}
            labelId="venue-label"
            onChange={(e) =>
              setFormData({ ...formData, venue: e.target.value })
            }
            sx={{
              color: '#e5e7eb',
              '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:hover:before': { borderBottomColor: '#e5e7eb' },
              '& .MuiInput-underline:after': { borderBottomColor: '#6366f1' },
              '& .MuiSvgIcon-root': { color: '#e5e7eb' }
            }}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <div>
          <p className="text-gray-300 mb-3 text-sm">Select Date</p>
          <DateReserve value={date} onChange={setDate} />
        </div>

        <div className="text-center pt-4">
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#4f46e5',
              color: 'white',
              padding: '14px 60px',
              fontSize: '18px',
              borderRadius: '30px',
              boxShadow: '0 10px 40px rgba(79,70,229,0.5)',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#4338ca',
                transform: 'scale(1.05)'
              }
            }}
          >
            Book Venue
          </Button>
        </div>
      </form>
    </div>
  )
}