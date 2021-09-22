import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";


import "./Portfolio.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjecDialog] = useState(false)

 
  return (
    <div>
      <Grid container className="section pt_45 pb_45">
        {/* Title */}
        <Grid item xs={12} className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text playfair">Portfolio</h6>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue === "All"
                  ? "customTabs_item active"
                  : "customTabs_item"
              }
            />
            {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue === tag
                      ? "customTabs_item active"
                      : "customTabs_item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>

        {/* projects */}
        <Grid item>
          <Grid container spacing={2}>
            {resumeData.portfolio.map((portfolios) => (
              <>
              {tabValue === portfolios.tag || tabValue === 'All' ? (<Grid item xs={12} sm={6} md={4} lg={3}>
                <Grow in timeout={1000}>
                  <Card className='customCard' onClick={() => setProjecDialog(portfolios)}>
                    <CardActionArea>
                      <CardMedia className='customCard_image' image={portfolios.image} title={portfolios.title} />
                      <CardContent>
                        <Typography className='customCard_title work_sans'>
                          {portfolios.title}
                        </Typography>
                        <Typography className='customCard_caption montserrat' variant='body2'>{portfolios.caption}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog maxWidth={'lg'} fullWidth open={projectDialog} onClose={() => setProjecDialog(false)} className='projectDialog'>
          <DialogTitle onClose={() => setProjecDialog(false)}>{projectDialog.title}</DialogTitle>
          <img src={projectDialog.image} alt="" className='projectDialog_image' />
          <DialogContent className='projectDialog_description'> {projectDialog.description} </DialogContent>
          <DialogActions className='projectDialog_actions'>
            {projectDialog?.links?.map(link => (
                <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
            ))}
          </DialogActions>
      </Dialog>
      </Grid>
    </div>
  );
};

export default Portfolio;
