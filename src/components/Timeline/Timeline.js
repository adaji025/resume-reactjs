import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";

import WorkIcon from "@material-ui/icons/Work";
import "./Timeline.css";
import resumeData from '../../utils/resumeData'

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* timeline header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography> 
        </TimelineContent>
      </TimelineItem>

    {children}
      
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
          <TimelineDot  className={"timeline_dot"}/>
          <TimelineConnector />
    </TimelineSeparator>
)
export default CustomTimeline;
