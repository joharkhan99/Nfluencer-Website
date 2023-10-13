import { v4 as uuidv4 } from "uuid";
const generateToken = () => {
  return uuidv4();
};

export default generateToken;
