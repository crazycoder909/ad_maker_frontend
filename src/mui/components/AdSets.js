import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Grid2';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react'

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AdSets({ adsetData,updateData  }) {
  const [localData, setLocalData] = useState({
    ...adsetData,
    gender: adsetData.gender || [],
    age: adsetData.age || []
  });

  useEffect(() => {
    setLocalData({
      ...adsetData,
      gender: adsetData.gender || [],
      age: adsetData.age || []
    });
  }, [adsetData]);

  useEffect(() => {
    updateData(localData); // Update parent state on every localData change
  }, [localData, updateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category, index) => {
    setLocalData((prev) => {
      const currentIndexes = prev[category] || []; // Ensure currentIndexes is an array
      if (currentIndexes.includes(index)) {
        // Remove the index if it's already selected
        return {
          ...prev,
          [category]: currentIndexes.filter((i) => i !== index),
        };
      } else {
        // Add the index if it's not already selected
        return {
          ...prev,
          [category]: [...currentIndexes, index],
        };
      }
    });
  };

  return (
    <Grid container spacing={3} sx={{ height: { xs: '100%' } }}>
    <FormGrid size={{ xs: 12}}>
      <FormLabel htmlFor="adsetName" required>
        Name
      </FormLabel>
      <OutlinedInput
        id="adsetName"
        name="adsetName"
        type="name"
        placeholder="Name this ad set"
        autoComplete="adset name"
        required
        size="small"
        value={localData.adsetName || ""} // Bind the input value to state
        onChange={handleChange} // Upadate state on input change
      />
    </FormGrid>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <div
        // row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="unlimited"
      >
        {["unlimited", "male", "female"].map((value, index) => (
          <FormControlLabel
            key={value}
            control={
              <Checkbox
                checked={localData.gender ? localData.gender.includes(index) : false}
                onChange={() => handleCheckboxChange("gender", index)}
              />
            }
            label={value.charAt(0).toUpperCase() + value.slice(1)} // Capitalize the label
          />
        ))}
      </div>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Age</FormLabel>
      <div
        // row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="unlimited"
      >
        {["unlimited", "18-30", "31-44", "45-64", "65+"].map((value, index) => (
          <FormControlLabel
            key={value}
            control={
              <Checkbox
                checked={localData.age ? localData.age.includes(index) : false}
                onChange={() => handleCheckboxChange("age", index)}
              />
            }
            label={value}
          />
        ))}
      </div>
    </FormControl>
    {/* <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="dailyBudget" required>
        Daily budget
      </FormLabel>
      <OutlinedInput
        id="dailyBudget"
        name="dailyBudget"
        type="dailyBudget"
        placeholder="min 10"
        autoComplete="daily budget"
        required
        size="small"
        value={localData.dailyBudget || ""} // Bind the input value to state
        onChange={handleChange} // Upadate state on input change
      />
    </FormGrid>
    <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="bidRate" required>
        Bid rate
      </FormLabel>
      <OutlinedInput
        id="bidRate"
        name="bidRate"
        type="bidRate"
        placeholder="0.5 - 150"
        autoComplete="bid rate"
        required
        size="small"
        value={localData.bidRate || ""} // Bind the input value to state
        onChange={handleChange} // Upadate state on input change
      />
    </FormGrid>
    <FormGrid size={{ xs: 12, md: 4 }}>
      <FormLabel htmlFor="frequencyCapp" required>
        Frequency cap
      </FormLabel>
      <OutlinedInput
        id="frequencyCap"
        name="frequencyCap"
        type="frequencyCap"
        placeholder=""
        autoComplete="frequency cap"
        required
        size="small"
        value={localData.frequencyCap || ""} // Bind the input value to state
        onChange={handleChange} // Upadate state on input change
      />
    </FormGrid> */}
  </Grid>
  );
}
