import React from 'react'
import { Box, Typography } from '@mui/material';

const LogoComponent: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 2 }}>
            <div style={{ width: 32, height: 32 }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 10.6V16L12 19L18 16V10.6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'white', display: 'flex' }}>
                Inspection <span style={{ color: '#FFD700' }}>Insight</span>
            </Typography>
        </Box>
    )
}

export default LogoComponent;
