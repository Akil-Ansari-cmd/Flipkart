import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiHamburgerMenu } from "react-icons/gi";


export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const [product, setProduct] = React.useState(true);

    const handleProduct = () => {
        setProduct(!product);
    }


    // const [grocery, setGrocery] = React.useState();

    // const handleGrocery = () => {
    //     setGrocery(!grocery);
        
    // }


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

            {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
            <Divider />
            {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><GiHamburgerMenu className='h-6 w-6 text-black' /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div >
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
                        <div className='flex justify-evenly mt-5'>
                            <div onClick={handleProduct}>Product
                            {
                                product && <div className='flex flex-col'>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                </div>
                            }
                            </div>
                            <div  onClick={handleProduct}>Grocery
                            {
                                !product && <div className='flex flex-col'>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                <div>Hindi</div>
                                </div>
                            }
                            </div>
                        </div>
                    </Box>
                </div>
            </Drawer>
        </div>
    );
}
