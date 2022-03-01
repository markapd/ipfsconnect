
import { create } from 'ipfs-http-client'

import {useState} from 'react'




export const IpfsSection = ({data}) => {
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [videos, setVideos] = useState('')

  const revalidate = () => {
    fetch('/api/revalidate')
  }
    

  const client = create('https://ipfs.infura.io:5001')

  async function handleImage(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      setImage(url)
    }
    catch(error) {
      console.log("Error", error)
    }
  }
  async function handleVideo(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://cloudflare-ipfs.com/ipfs/${added.path}`
      setVideos(url)
    }
    catch(error) {
      console.log("Error", error)
    }
  }
{image && console.log('ddfdfd')}

  return (
    <div>
        <div>
        <label>Upload video</label>  <input type="file" onChange={handleVideo}></input>
          { videos && (
              <video height="300px" src={videos} alt="Girl in a jacket"></video>
            )}
        </div>
        <div>
        <label>Upload image</label> <input type="file" onChange={handleImage} />
          <div>
            { image &&  <img height="300px" src={image}></img>}
          </div>
        </div>
        <h1>{data}</h1>
        <button onClick={()=> revalidate()}>revalidate</button>
    </div>
  )
}






