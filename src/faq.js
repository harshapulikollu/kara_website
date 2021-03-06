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
                        <Typography className={classes.heading}>How to Wishprr</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Just like shout click on <b>+</b> icon in your main feed page and select image or video you want to share and click next.
                            Once you click next, now click on advance settings to expand and show other options which are available for you.
                            In advance settings, you can toggle on or off whisprr option.
                            If you toggle on wishppr for the first time, App will prompt you to select close people.
                            Once you done with selection, now you can click on shout/wishprr button to uplaod content.
          </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>How to select or change close friends</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Adding user to close people list:

                            Just like shout click on + icon in your main feed page and select image or video you want to share and click next.
                            Once you click next, now click on advance settings to expand and show other options which are available for you.
                            In advance settings, you can see whisprr option.
                            Click on choose close people subtext of wishprr, If it's first time or you don't have any close people selected it will prompt you with instructions.
                            After that you can click on search button on bottom right and search for users, once you found the user
                            you can click on Add button to add that user to your close people list.

                            Removing user from close people list:

                            Follow same steps like add users, once you are in close people list page. You can already see all the close people you
                            selected in past. From the list you can click on remove button next to the user you want to remove from close people list.

                            Note:
                            User won't be notitifed if you are Adding and removing user to close people list.
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



                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>How to delete story</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            As of chillaavo client <b>v1.0.75</b>, we don't support deleting a posted story yet. We are working to add it as soon as possible.
          </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>What is ReShout</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Reshout is way of sharing others shouts for more reach. You can do a reshout in two ways.<br />
                            <ul>
                                <li>By clicking reshout button without adding any description to reshout.</li>
                                <li>By Adding description before clicking reshout button.</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>What is difference between ReShout and ReShout without description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The main difference between a ReShout and ReShout with description is for the only reshout the likes, comments and shares will be under the original shout user.
                            For reshout with description the likes, comments and shares were considered under your reshout with description.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>How to change/switch profile type from personal to business or public or viceversa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           It's very easy to change your profile type. <br /> Chillaavo has 3 types of profiles, Private, Public and Business.
                           <br /> In order to switch profile type navigate to edit profile page from your profile page by clicking on 'edit profile' button under your username.
                           After navigating to edit profile page, by scrolling to last, you can find a button a switch your profile.
                           Click on this, a new page with options will open, then select the appropiate profile for you and save to your changes.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <a href='/'>Home</a>
        </div>
    )
}
export default FAQ;