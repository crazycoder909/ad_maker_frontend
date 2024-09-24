import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState, useEffect } from 'react'

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function CustomComponentPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`radio-panel-${index}`}
      aria-labelledby={`radio-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomComponentPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function Ads({ adData, updateData }) {
  const [localData, setLocalData] = useState(adData)

  useEffect(() => {
    updateData(localData)
  }, [localData, updateData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setLocalData((prev) => ({ ...prev, [type]: file })); // Use dynamic key to set image or logo
      console.log(type, file)
    }
  };

  const [value, setValue] = useState('Single_image');

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    setLocalData((prev) => ({ ...prev, adType: newValue })); // Save selected value to localData
    console.log(newValue); // Print the selected value
  };


  return (
    <Grid container spacing={3} sx={{ height: { xs: '100%' } }}>
      <FormGrid size={{ xs: 12}}>
        <FormLabel htmlFor="adName" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="adname"
          name="adName"
          type="name"
          placeholder="Name this ad"
          autoComplete="ad name"
          required
          size="small"
          sx={{marginBottom: 3}}
          value={localData.adName || ""}
          onChange={handleChange}
        />
      </FormGrid>
      {/* <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
        <TextField 
          fullWidth 
          label="Title (Max of 90 characters)" 
          id="titleS"
          name="titleS"
          multiline
          rows={3}
          variant="standard" 
          value={localData.titleS || ""}
          onChange={handleChange}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
        >
          Image/GIF (Max size 5M)
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => handleFileChange(event, 'imageS')}
            multiple
          />
        </Button>
        <TextField 
          fullWidth label="Description (Max of 90 characters)" 
          id="descS"
          name="descS"
          multiline
          rows={3}
          variant="standard" 
          value={localData.descS || ""}
          onChange={handleChange}
        />
          <FormGrid size={{ xs: 12}} sx={{ marginTop: '20px' }}>
            <FormLabel htmlFor="textS" required>
              Text on button
            </FormLabel>
            <OutlinedInput
              id="textS"
              name="textS"
              type="name"
              placeholder=""
              autoComplete="text"
              required
              size="small"
              value={localData.textS || ""}
              onChange={handleChange}
            />
          </FormGrid> 
            <TextField 
              fullWidth label="Brand name (Max of 25 characters)" 
              id="brandS"
              name='brandS'
              multiline
              rows={3}
              variant="standard" 
              value={localData.brandS || ""}
              onChange={handleChange}
            />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
          >
            Logo (Max size 5M, 40*40)
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleFileChange(event, 'logoS')}
              multiple
            />
          </Button>
            <TextField 
              fullWidth label="Landing page URL (Make sure it works)" 
              id="urlS"
              name="urlS"
              multiline
              rows={3}
              variant="standard" 
              value={localData.urlS || ""}
              onChange={handleChange}
            />
        <RadioGroup
          value={value}
          onChange={handleRadioChange}
          aria-label="radio button group"
          name="radio-buttons-group"
          sx={{ flexDirection: 'row' }} // Display radio buttons inline
        >
          <FormControlLabel value="Single_image" control={<Radio />} label="Single image" />
          <FormControlLabel value="Carousel ads" control={<Radio />} label="Carousel ads" />
          <FormControlLabel value="Video" control={<Radio />} label="Video" />
        </RadioGroup>
          <CustomComponentPanel value={value} index="Single_image">
            <TextField 
              fullWidth 
              label="Title (Max of 90 characters)" 
              id="titleS"
              name="titleS"
              multiline
              rows={3}
              variant="standard" 
              value={localData.titleS || ""}
              onChange={handleChange}
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Image/GIF (Max size 5M)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'imageS')}
                multiple
              />
            </Button>
            <TextField 
              fullWidth label="Description (Max of 90 characters)" 
              id="descS"
              name="descS"
              multiline
              rows={3}
              variant="standard" 
              value={localData.descS || ""}
              onChange={handleChange}
            />
          <FormGrid size={{ xs: 12}} sx={{ marginTop: '20px' }}>
            <FormLabel htmlFor="textS" required>
              Text on button
            </FormLabel>
            <OutlinedInput
              id="textS"
              name="textS"
              type="name"
              placeholder=""
              autoComplete="text"
              required
              size="small"
              value={localData.textS || ""}
              onChange={handleChange}
            />
          </FormGrid> 
            <TextField 
              fullWidth label="Brand name (Max of 25 characters)" 
              id="brandS"
              name='brandS'
              multiline
              rows={3}
              variant="standard" 
              value={localData.brandS || ""}
              onChange={handleChange}
            />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
          >
            Logo (Max size 5M, 40*40)
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => handleFileChange(event, 'logoS')}
              multiple
            />
          </Button>
            <TextField 
              fullWidth label="Landing page URL (Make sure it works)" 
              id="urlS"
              name="urlS"
              multiline
              rows={3}
              variant="standard" 
              value={localData.urlS || ""}
              onChange={handleChange}
            />
          </CustomComponentPanel>

          <CustomComponentPanel value={value} index="Carousel ads" > 
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Logo (Max size 5M, 40*40)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'logoC')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Brand name (Max of 25 characters)" 
                id="brandC"
                name="brandC"
                multiline
                rows={3}
                variant="standard" 
                value={localData.brandC || ""}
                onChange={handleChange}
              />
              <TextField 
                fullWidth label="Primary text (Max of 200 characters)" 
                id="primaryC"
                name="primaryC"
                multiline
                rows={3}
                variant="standard" 
                value={localData.primaryC || ""}
                onChange={handleChange}
              />
              <TextField 
                fullWidth label="See more URL (Make sure it works)" 
                id="seeC"
                name='seeC'
                multiline
                rows={3}
                variant="standard" 
                value={localData.seeC || ""}
                onChange={handleChange}
              />
          </CustomComponentPanel>

          <CustomComponentPanel value={value} index="Video">
                <TextField 
                  fullWidth label="Title (Max of 90 characters)" 
                  id="titleV"
                  name='titleV'
                  multiline
                  rows={3}
                  variant="standard" 
                  value={localData.titleV || ""}
                  onChange={handleChange}
                />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Upload Video
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'videoV')}
                multiple
              />
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Poster image (Max size 5M)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'poster_imageV')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Description (Max of 90 characters)" 
                id="descV"
                name="descV"
                multiline
                rows={3}
                variant="standard" 
                value={localData.descV || ""}
                onChange={handleChange}
              />
            <FormGrid size={{ xs: 12}} sx={{ marginTop: '20px' }}>
              <FormLabel htmlFor="textV" required>
                Text on button
              </FormLabel>
              <OutlinedInput
                id="textV"
                name="textV"
                type="name"
                placeholder=""
                autoComplete="text"
                required
                size="small"
                value={localData.textV || ""}
                onChange={handleChange}
              />
            </FormGrid> 
              <TextField 
                fullWidth label="Brand name (Max of 25 characters)" 
                id="brandV"
                name='brandV'
                multiline
                rows={3}
                variant="standard" 
                value={localData.brandV || ""}
                onChange={handleChange}
              />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              style={{ marginLeft: '10px', marginTop: '20px', marginBottom: '10px'}}
            >
              Logo (Max size 5M, 40*40)
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleFileChange(event, 'logoV')}
                multiple
              />
            </Button>
              <TextField 
                fullWidth label="Landing page URL (Make sure it works)" 
                id="urlV"
                name='urlV'
                multiline
                rows={3}
                variant="standard" 
                value={localData.urlV || ""}
                onChange={handleChange}
              />
          </CustomComponentPanel>
      </FormControl> */}
  </Grid>
  );
}
