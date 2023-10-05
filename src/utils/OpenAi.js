import OpenAI from "openai";
import { OpenApi_key } from "./Constants";

const openai = new OpenAI({
  apiKey: OpenApi_key,
  dangerouslyAllowBrowser: true,
});

export default openai;
