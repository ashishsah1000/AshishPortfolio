import React from 'react'
import "./css/bigCard.css"
import { Typography, Box, Card } from '@material-ui/core'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { GitHub } from '@mui/icons-material';
import { Button } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BigCard({
    title = "EduBird | E-Learning",
    technology = [
        {
            url: "https://picsum.photos/200/300",
            name: "React"
        },
        {
            url: "https://picsum.photos/200/300",
            name: "TypeScript"
        }
    ],
    content = "This is the content part of the card",
    date = "21 sep 1998"
}) {
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <div className="card-container">
                <div className="card-box">
                    <div className="one">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="two">
                        <div><Typography variant='h1'>{title}</Typography></div>
                        <div style={{ marginTop: "10px" }}>
                            <Stack direction="row" spacing={1}>
                                {technology.map((x) => {
                                    return (
                                        <Chip style={{ color: "orange" }}
                                            avatar={<Avatar alt="Natacha" src={x.url} />}
                                            label={x.name}
                                            variant="outlined"
                                        />
                                    )
                                })}

                            </Stack>
                        </div>
                        <div className="details">
                            <Typography>{content} </Typography>
                        </div>
                        <div className="btn">
                            <Button color="secondary" style={{ color: "#ee7e2d" }} startIcon={<GitHub />} > {title} </Button>
                        </div>
                    </div>
                </div>
            </div>


        </Slide>
    )
}
