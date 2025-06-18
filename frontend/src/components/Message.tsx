import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MessageProps } from '../types'

function MessageBubble({text}: {text: string}) {
    return (
         <Paper elevation={1} sx={{
          width: '60%',
          margin: 3,
          padding: 2,
          borderRadius: 3
        }}>
          {text}
        </Paper>
    )
}

export function Message({ text, isUser }: MessageProps) {

  const commonBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: isUser ? 'flex-end' : 'flex-start'
  };

  if (isUser) {
    return(
      <Box sx={commonBoxStyles}>
        <MessageBubble text={text}/>
        <AccountCircleIcon/>
      </Box>
    )
  }
  else {
    return(
    <Box sx={commonBoxStyles}>
      <AccountCircleIcon/>
      <MessageBubble text={text}/>
    </Box>
    )
  }
}

export default MessageBubble;