import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Data } from '../Constants/DataTable';
import { useState, useEffect } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





export default function TableAPP() {
    
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch(Data)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
        },[]);

        useEffect(() => {
            getData();
        },[]);

        const getData = () => {
            axios.get('/src/Constants/DataTable.jsx')
                .then(response => {
                    console.log('Data', response);
                    setData(response.data);
                })
                .catch(err => {
                    console.log('Error', err);
                });
        };

    
        const [search, setSearch] = useState('')
    return (
        <>
        
            <Container>
            
            <Form style={{width:'300px',height:'50px',border:'0px solid #2ecc71'}}>
                <InputGroup 
                    style={{backgroundColor:'#F0F8FF',border:'0px solid #2ecc71'}}
                    onChange={(e) => setSearch(e.target.value)}
                    align="center" 
                    className="my-3" 
                    >
                    <Form.Control align="center" style={{margin:'-3px',width:'300px',height:'50px',background:'transparent',borderRadius:'10px'}}placeholder="Search"/>
                </InputGroup>
            </Form>
            </Container>
        <div>
        <Paper sx={{ padding: 2, maxWidth: 1200, margin: 'auto' }}>
            <Table style={{border: '1px solid'}}>
            <TableBody>
            {Data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.id.
                toLocaleLowerCase().includes(search)
            }).map((row) => (

                    <TableRow
                        key={row.id} 
                        sx={{'&:last-child td , &:last-child th': { border:1, borderColor:'gray', borderWidth:2}}}
                    >   

                        <Typography style={{border: '0.5px solid gray'}} align="center" variant="h6" gutterBottom>
                            {row.Information}
                        </Typography>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080', width:400,backgroundColor:'#87CEFA'}} align="right"><strong>Entity Type:</strong></TableCell>
                            <TableCell style={{color: 'blue',width:300,backgroundColor:'#87CEFA'}}>{row.Entity_Type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>USDOT Status:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Status.USDOT_STATUS}</TableCell>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Out of Service Date:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Status.Out_Of_Service_Date}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>USDOT NUMBER:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Unumber.USDOT_NUMBER}</TableCell>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>State Carrier ID Number:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Unumber.State_Carrier_ID}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>MCS-150 Form Date:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.MDate.MCS_150_Form_Date}</TableCell>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>MCS-150 Mileage (Year):</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.MDate.MCS_150_Mileage_Year}</TableCell>
                        </TableRow>

                        
                        <Typography align="center" variant="h6" gutterBottom style={{ marginTop: 16, border: '0.5px solid gray',backgroundColor:'#87CEFA'}}>
                            OPERATING AUTHORITY INFORMATION
                        </Typography>
                        

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',width:400,backgroundColor:'#87CEFA'}} align="right"><strong>Operating Authority Status:</strong></TableCell>
                            <TableCell style={{color: 'blue',width:600}}>{row.Operating_Authority_Status} <Link href="#" style={{color:'#000080'}}>clicks here</Link>.</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>MC/MX/FF Number(s):</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.MC_MX_FF_Number}</TableCell>
                        </TableRow>
                        

                        <Typography align="center" variant="h6" gutterBottom style={{ marginTop: 16, border: '0.5px solid gray',backgroundColor:'#87CEFA'}}>
                            COMPANEY INFORMATION
                        </Typography>
                        
                        
                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA',width:500}} align="right"><strong>Legal Name:</strong></TableCell>
                            <TableCell style={{color: 'blue',width:500}}>{row.Legal_Name}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>DBA Name:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.DBA_Name}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Physical Address:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Physical_Address}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Phone:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Phone}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Mailing Address:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Mailing_Address}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>DUNS Number:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.DUNS_Number}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Power Units:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Units.Power_Units}</TableCell>
                            <TableCell style={{textDecoration:"underline", color: '#000080',backgroundColor:'#87CEFA'}} align="right"><strong>Drivers:</strong></TableCell>
                            <TableCell style={{color: 'blue'}}>{row.Units.Drivers}</TableCell>
                        </TableRow>
                    
                    </TableRow>
                    
                ))}
            </TableBody>
            </Table>

        </Paper>
        </div> 

        </>);    

}
