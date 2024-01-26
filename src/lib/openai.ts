import { New_Tegomin } from 'next/font/google'
import {Configuration, OpenAIApi} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY

})

const openai = new OpenAIApi(config)

export async function generateImagePrompt(name: string) {

        try {
            const response = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages : [{
                    role:'system',
                    content:
                    "You are imaginative and sensate. You generate captivating yet realistic thumbnail descriptions for notes. Your output will be fed into the DALL-E API to generate thumbnails. The description should be minimalistic, flat-styled and accurate."
                },
                {
                    role:"user",
                    content: 
                    `Please generate a thumbnail description for my notebook titled ${name}`
                }]
            }) 

            const data = await response.json()
            const  image_description = data.choices[0].message.content
            return image_description as string
        } 
        catch (error) {
            console.log(error);
            throw error;
        }
}

        //image


export async function generateImage(image_description: string){

    try {
        const response = 
    } catch (error) {
        
    }

}