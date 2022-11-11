import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const configuation = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuation)

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generateImage = async () => {
    setIsLoading(true)
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "512x512",
    }

    try {
      const response = await openai.createImage(imageParameters);
      const urlData = response.data.data[0].url
      console.log(urlData);
      setImageUrl(urlData);
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return (
    <div className="App">
      <h1>OpenAI Image Generator</h1>
      <p>
        Enter a prompt below and click "Generate Image" to see what OpenAI can
        come up with!
      </p>
      <input
        placeholder='A sunset on the Sydney Opera House'
        onChange={(e) => setUserPrompt(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem", fontSize: "1.5rem" }}
      />
      <button disabled={isLoading} onClick={generateImage}>{
        isLoading ? "Generating..." : "Generate Image"
      }</button>
      <div className="image-container">
        {imageUrl.length <= 0 || isLoading ? (
          <img src={reactLogo} className="logo react" alt="React logo" />
        ) : (
          <img src={imageUrl} alt="Generated Image" />
        )}
      </div>
    </div>
  )
}

export default App
