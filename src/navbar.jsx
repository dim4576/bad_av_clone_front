import "./styles/style.css"
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SimpleMenu from "./menu";

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Scroll to Elevate App Bar</Typography>
                        <SimpleMenu id='test_menu'/>
                        <SimpleMenu id='test_menu2'/>
                        <div id='great_space'></div>
                        <Button id="test_button" variant="contained" color="primary" disableElevation>
                            Disable elevation
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
            <Container>
                <Box my={2}>
                    {console.log(props.props)}
                    {props.gen_button}
                    {props.hello}
                    {props.app}
                    {[...new Array(12)]
                        .map(
                            () => `здесь будет размещён контент!!!`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    );
}