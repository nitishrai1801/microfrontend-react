import React, {useState, useEffect} from 'react'

const Home = () => {
    const [homePageContent, sethomePageContent] = useState("test");

  useEffect(() => {
    fetch('http://localhost:8080').then((res) => res.json()).then((text) => {
      console.log(text);
      sethomePageContent(text.homePageContent)
    })
  }, [])
  return (
    <div>{homePageContent}</div>
  )
}

export default Home