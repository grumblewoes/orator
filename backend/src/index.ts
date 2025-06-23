import app from './app';
import Config from './config/config';

app.listen(Config.port, () => {
  console.log(`Server running on port ${Config.port}`);
});
