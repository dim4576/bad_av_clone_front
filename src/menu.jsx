import React from 'react';
import "./styles/style.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useNavigate} from 'react-router-dom';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToPageMain = () => {
        navigate('/')
    }

    const handleToPageAbout = () => {
        navigate('/about')
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
            >
                <table onMouseLeave={handleClose}>
                    <tr id='under_line'>
                        <th>
                            <MenuItem onClick={handleToPageMain}><strong>Main Page</strong></MenuItem>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <MenuItem onClick={handleToPageAbout}>About</MenuItem>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </th>
                    </tr>
                </table>
            </Menu>
        </div>
    )
        ;
}