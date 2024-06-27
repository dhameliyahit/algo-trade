import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    //   width:400,
    transform: 'translate(-50%, -50%)',
    // bgcolor: '#fff',
    color:"white",
    boxShadow: 24,
    p: 4,
};

const TradeExecuteModal = ({ open, handleClose }) => {
    const [index, setIndex] = React.useState('');
    const [buySell, setBuySell] = React.useState('');
    const [intraday, setIntraday] = React.useState('');
    const [expiryOffset, setExpiryOffset] = React.useState('');

    const handleOrder = ()=>{
        toast.success("Order placed successfully")
        handleClose()
    }

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className='rounded-md w-3/4 bg-[#0B253D]' sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Trade Execute
                </Typography>
                <div className="flex">

                    <div className="index w-full mr-4 my-6">
                        <h1>Index</h1>
                        <FormControl style={{backgroundColor:"#e3e3f4",borderRadius:'10px'}} fullWidth margin="normal">
                            <InputLabel id="index-label">Index</InputLabel>
                            <Select labelId="index-label" value={index} onChange={(e) => setIndex(e.target.value)} label="Index">
                                <MenuItem value=""><em>Select Index</em></MenuItem>
                                <MenuItem value="Sensex">Sensex</MenuItem>
                                <hr/>
                                <MenuItem value="Nifty 50">Nifty 50</MenuItem>
                                <hr/>
                                <MenuItem value="Mid Cap">Mid Cap</MenuItem>
                                <hr/>
                                <MenuItem value="Small Cap">Small Cap</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="flex flex-col w-full mr-4 ">
                    <div className="status my-6">
                        <h1>Strick Price</h1>
                        <TextField style={{backgroundColor:"#e3e3f4",borderRadius:'10px'}} fullWidth margin="normal" label="Stock Price" variant="outlined" placeholder="E.g. 1000.00" />
                       </div> 
                       <h1>Intraday/Long Day</h1>
                        <FormControl style={{backgroundColor:"#e3e3f4",borderRadius:'10px'}} fullWidth margin="normal">
                            <InputLabel id="intraday-label">Intraday/Long Day</InputLabel>
                            <Select labelId="intraday-label" value={intraday} onChange={(e) => setIntraday(e.target.value)} label="Intraday/Long Day">
                                <MenuItem value=""><em>Select Intraday</em></MenuItem>
                                <hr/>
                                <MenuItem value="Intraday">Intraday</MenuItem>
                                <hr/>
                                <MenuItem value="Long Day">Long Day</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="status my-6">
                            <h1>Buy/Sell</h1>
                        <FormControl style={{backgroundColor:"#e3e3f4",borderRadius:'10px'}} fullWidth margin="normal">
                            <InputLabel id="buy-sell-label">Buy/Sell</InputLabel>
                            <Select labelId="buy-sell-label" value={buySell} onChange={(e) => setBuySell(e.target.value)} label="Buy/Sell">
                                <MenuItem value=""><em>Select Buy/Sell</em></MenuItem>
                                <hr/>
                                <MenuItem value="Buy">Buy</MenuItem>
                                <hr/>
                                <MenuItem value="Sell">Sell</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <h1>Expiry Offset</h1>
                        <FormControl style={{backgroundColor:"#e3e3f4",borderRadius:'10px'}} fullWidth margin="normal">
                            <InputLabel id="expiry-offset-label">Expiry Offset</InputLabel>
                            <Select labelId="expiry-offset-label" value={expiryOffset} onChange={(e) => setExpiryOffset(e.target.value)} label="Expiry Offset">
                                <MenuItem value=""><em>Select Offset</em></MenuItem>
                                <hr />
                                <MenuItem value="Offset 1">Offset 1</MenuItem>
                                <hr/>
                                <MenuItem value="Offset 2">Offset 2</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="mt-5 flex justify-center items-center">
                    <Button variant="contained" onClick={handleOrder} style={{ marginTop: '1rem',borderRadius:"8px",width:"281px",height:"49.81px" }}>
                        Place Order
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default TradeExecuteModal;
