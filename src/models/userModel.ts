import mongoose from 'mongoose';
import { escape } from 'querystring';

const user = new mongoose.Schema({
  id: String,
  userName: String,
  password: String,
  email: String,
  esAdmin: Boolean,
});

const User = mongoose.model('User', user);
    
export default User;