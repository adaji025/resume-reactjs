import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from '@material-ui/icons/School';

import "./Resume.css";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from "@material-ui/lab";

const Resume = () => {
  return (
    <div>
      {/* Objective */}
      <Grid className="section pb_45">
        <Grid item xs={12} className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text playfair">Objectives</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="about_text work_sans">
            {resumeData.objective}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid className="section">
        <Grid item xs={12} className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text playfair">Resume</h6>
        </Grid>
        <Grid container xm={12}>
          {/* Experience */}
          <Grid item sm={12} md={6} className='resume_timeline'>
            <CustomTimeline title={"Work Experience"} icon={<WorkIcon />}>
              {resumeData.experiences.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                    <TimelineContent>
                        <Typography className='timeline_company'>{experience.company}</Typography>
                        <Typography className='timeline_title'>{experience.title}</Typography>
                        <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                        <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                    </TimelineContent>
                  
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          {/* Education  */}
          <Grid item sm={12} md={6}  className='resume_timeline'>
          <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
              {resumeData.educations.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                    <TimelineContent>
                        <Typography className='timeline_company'>{education.course}</Typography>
                        <Typography className='timeline_title'>{education.school}</Typography>
                        <Typography variant='caption' className='timeline_date'>{education.year}</Typography>
                        <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                    </TimelineContent>
                  
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid className="section"></Grid>

      {/* Objective */}
      <Grid className="section"></Grid>
    </div>
  );
};

export default Resume;
