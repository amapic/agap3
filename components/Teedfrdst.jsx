// const {VertexAI} = require('@google-cloud/vertexai');
import {VertexAI} from '@google-cloud/vertexai'

/**
 * TODO(developer): Update these variables before running the sample.
 */
export default async function createStreamChat(chatInput1
  
) {
	
  const projectId = 'grounded-being-417214'
  const location = 'europe-west1'
  const model = 'gemini-1.0-pro'
  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({project: projectId, location: location});

  // Instantiate the model
  const generativeModel = vertexAI.getGenerativeModel({
    model: model,
  });

  const chat = generativeModel.startChat({});
  // const chatInput1 = 'Est-ce que tu aimes l abstrait ?';

  console.log(`User: ${chatInput1}`);

  const result1 = await chat.sendMessageStream(chatInput1);
  // for await (const item of result1.stream) {
    // console.log(item.candidates[0].content.parts[0].text);
  // }
  
  return result1;
}