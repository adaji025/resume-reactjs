import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import CustomButton from '../../components/Button/Button'
import resumeData from '../../utils/resumeData'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Grid className='section'>
                <Grid container spacing={3}>
                
                    <Grid item xs={12} lg={7}>
                    <Grid item xs={12}>
                <Grid item xs={12} className="section_title mb_30 top_30">
                    <span></span>
                    <h6 className="section_title_text playfair">Contact Form</h6>
                </Grid>
                </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                            <TextField fullWidth label='Name' name='name' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField fullWidth label='Email' name='email' />
                            </Grid>
                        </Grid>
                            <Grid container>
                                <Grid item xs={12} className='msg'>
                                    <TextField fullWidth label='Message' name='message' multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12} className='msg'>
                                    <CustomButton text='Submit'/>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                    <Grid item xs={12} className="section_title mb_30 top_30">
                        <span></span>
                        <h6 className="section_title_text playfair">Contact Information</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                        <table>
                            <tr>
                                <td colSpan='2'>
                                    <span className='contactInfo_title'>Address: <s className='white'>:</s></span>
                                </td>
                                <td>
                                  {resumeData.address}  
                                </td>
                            </tr>
                        </table>
                             
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                        <table>
                            <tr>
                               <td><span className='contactInfo_title'>Email :</span></td>
                               <td> {resumeData.email}</td> 
                            </tr>
                        </table>
                            
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='contactInfo_item'>
                            <span className='contactInfo_title'>Phone :</span> {resumeData.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {Object.keys(resumeData.socials).map(key => (
                            <a href={resumeData.socials[key].link} target='_blank' className='contactInfo_s_icons'>
                            {resumeData.socials[key].icon}
                        </a>
                        ))}
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
