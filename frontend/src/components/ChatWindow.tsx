import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { Message } from './Message';
import { useState, ChangeEvent } from 'react'; 
import { MessageProps } from '../types';
import IconButton from '@mui/material/IconButton';

export default function ChatWindow() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue('');
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <Container maxWidth="md" sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '90vh'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          alignItems: 'center'
        }}>

          {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
        </Box>
    
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center', 
          width: '100%'}}>
          <TextField
            id="outlined-textarea"
            multiline
            placeholder="Enter your message"
            sx={{ flexGrow: 1, mr: 1 }}
            onChange={handleChange}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Container>
  )
}