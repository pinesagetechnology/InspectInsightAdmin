import React from 'react';
import {
    Dialog, DialogContent, AppBar, Toolbar, Typography, List, ListItem, Divider, Box
} from '@mui/material';
import { format } from 'date-fns';

import { Structure } from '../../entities/structure';

interface StructureDetailProps {
    structure: Structure | null;
    onClose: () => void;
}

const StructureDetail: React.FC<StructureDetailProps> = ({ structure, onClose }) => {
    if (!structure) return null;

    return (
        <Dialog open={!!structure} onClose={onClose} fullWidth maxWidth="sm">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        {structure.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent dividers>
                <Box sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 120px)', mt: 2 }}>
                    <List>
                        {/* Basic Information */}
                        <ListItem>
                            <Typography variant="h6" gutterBottom component="div">
                                Basic Information
                            </Typography>
                        </ListItem>
                        <Divider />
                        <List sx={{ pl: 2 }}>
                            <ListItem>
                                <Typography variant="subtitle2">Code</Typography>
                                <Typography variant="body2">{structure.code}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="subtitle2">Type</Typography>
                                <Typography variant="body2">{structure.type}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="subtitle2">Region</Typography>
                                <Typography variant="body2">{structure.location.region}</Typography>
                            </ListItem>
                        </List>

                        {/* Dimensions */}
                        <ListItem>
                            <Typography variant="h6" gutterBottom component="div">
                                Dimensions
                            </Typography>
                        </ListItem>
                        <Divider />
                        <List sx={{ pl: 2 }}>
                            <ListItem>
                                <Typography variant="subtitle2">Overall Length</Typography>
                                <Typography variant="body2">{structure.overalLength}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="subtitle2">Overall Width</Typography>
                                <Typography variant="body2">{structure.overalWidth}</Typography>
                            </ListItem>
                        </List>

                        {/* Metadata */}
                        {structure.metadata && (
                            <>
                                <ListItem>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Additional Details
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <List sx={{ pl: 2 }}>
                                    <ListItem>
                                        <Typography variant="subtitle2">Bridge Material</Typography>
                                        <Typography variant="body2">{structure.metadata.bridgeMaterial}</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="subtitle2">Year Built</Typography>
                                        <Typography variant="body2">{structure.metadata.yearBuilt}</Typography>
                                    </ListItem>
                                </List>
                            </>
                        )}

                        {/* Elements */}
                        <ListItem>
                            <Typography variant="h6" gutterBottom component="div">
                                Elements
                            </Typography>
                        </ListItem>
                        <Divider />
                        <List sx={{ pl: 2 }}>
                            {structure.elementMetadata.map((element) => (
                                <ListItem key={element.elementId} sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography variant="subtitle1">{element.description}</Typography>
                                    <Typography variant="caption">Code: {element.code}</Typography>
                                    <Typography variant="caption">
                                        Quantity: {element.quantity} {element.unit}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>

                        {/* Last Inspection */}
                        {structure.lastInspectionDate && (
                            <>
                                <ListItem>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Last Inspection
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Typography variant="body2">
                                        {format(new Date(structure.lastInspectionDate), 'MMMM d, yyyy')}
                                    </Typography>
                                </ListItem>
                            </>
                        )}
                    </List>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default StructureDetail;
