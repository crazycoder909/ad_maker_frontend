import * as React from 'react';

// import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react'

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function Campaigns({ campaignData, updateData  }) {

  const [localData, setLocalData] = useState(campaignData);

  useEffect(() => { updateData(localData); }, [localData, updateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12}}>
        <FormLabel htmlFor="campaignName" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="campaignName"
          name="campaignName"
          type="name"
          placeholder="Name this campaign"
          autoComplete="campaign name"
          required
          size="small"
          value={localData.campaignName || ""} // Bind the input value to state
          onChange={handleChange} // Upadate state on input change
        />
      </FormGrid>
    </Grid>
  );
}
