import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import { TimelineDot } from '@material-ui/lab'
import React from 'react'
import resumeData from '../../utils/resumeData'
import './About.css'

const About = () => {
    return (
        <div>
        <Grid className="section">
        <Grid item xs={12} className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text playfair">About Me</h6>
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body2' className='about_me_text'>{resumeData.about_me}</Typography>
        </Grid>
        </Grid>

        {/* service section */}
        <Grid className="section">
        <Grid item xs={12} className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text playfair">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing='3' justify='space-around'>
          {resumeData.services.map(service => (
            <Grid item xs={12} sm={6} md={4} >
              <div className='service'>
                <Icon className='service_icon'>{service.icon}</Icon><br />
                <Typography class='service_title work_sans' variant='6'>{service.title}</Typography>
                <Typography class='service_description' variant='body2'>{service.description}</Typography>
              </div>
            </Grid>
          ))}
          </Grid>
        </Grid>
        </Grid>

        {/* Skills section */}
        <Grid className="section">
        <Grid item xs={12} className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text playfair">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing='3' justify='center'>
          {resumeData.skills.map(skill => (
            <Grid item xs={12} sm={6} md={4} >
              <div className='skills'>
                <Paper elevation={0} className='skill graybg'>
                <Typography class='service_title work_sans' variant='6'>{skill.title}</Typography>
                <Typography class='service_description' variant='body2'>
                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot variant='outlined' className='timeline_dot' />
                      {element}
                    </Typography>
                  ))}
                </Typography>
                </Paper>
              </div>
            </Grid>
          ))}
          </Grid>
        </Grid>
        </Grid>
        </div>
    )
}

export default About
