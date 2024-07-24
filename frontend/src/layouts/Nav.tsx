import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function Nav() {
    
    


    return (
        <>
            <nav style={{ marginTop: '100px' }}>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/heart">Heart</Link></li>
                    <li><Link to="/lung">Lung</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            
            <Drawer anchor='left' open={false} >
                <List>
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
                </List>
            </Drawer>
        </>
    )
}