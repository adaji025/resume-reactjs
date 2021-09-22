import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import '../../utils/resumeData'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{resumeData.name}</Typography>
            </div>
            <div className="footer-right">
                <Typography className="footer_copyright">
                    Developed by <a href="">adaji Mukhtar</a>
                    <br />
                    clone idea from <a href="" target='_blank'>Travoline</a>
                </Typography>
                
            </div>
        </div>
    )
}

export default Footer
