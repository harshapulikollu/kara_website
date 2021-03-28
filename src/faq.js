import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function FAQ() {
    const classes = useStyles();

    return (
        <div className="Policies-background">
            <p>
                <strong>FAQs</strong>
            </p>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>What is shout</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            In Chillaavo, shout is same as post in other social media apps. 
                            When you upload a image or video to followers in Chillaavo we call it as a shout.
          </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>What is Wishprr</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Wishprr is same as shout but it will show up in the certain users/followers feed you selected as close people.
          </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>What is Story</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Story is way of uploading media to your followers and stories will last only 24hours from the time 
                            you uplaod it.
          </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <a href ='/'>Home</a>
        </div>
    )
}
export default FAQ;