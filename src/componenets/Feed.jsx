import { useState, useEffect } from "react";
import {Box, Stack, Typography} from '@mui/material';
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Box sx={{height: {sx: 'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2022 CSK Media
        </Typography>

      </Box>
    </Stack>
  )
}

export default Feed