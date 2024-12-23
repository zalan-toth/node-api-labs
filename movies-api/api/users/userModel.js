import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true  }
});

const regexValidator = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(value);
  };
  
  UserSchema.path("password").validate(regexValidator, "Invalid password format. Make it stronger!");
  
  
export default mongoose.model('User', UserSchema);
