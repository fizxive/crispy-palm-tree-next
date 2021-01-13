import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const TimerScreen = () => {

    const [time, setTime] = useState(100)

    useEffect(() => {
        const handler = setTimeout(() => {
            setTime((prev) => prev - 1)
        }, 1000)

        return () => {
            clearTimeout(handler)
        }
    }, [time])

    return (
        <Box>
            <Typography>
                {time}
            </Typography>
        </Box>
    )
}

TimerScreen.propType = {
}

export default TimerScreen