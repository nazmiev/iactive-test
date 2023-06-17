import React from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append("actionName", "MessagesLoad");
      formData.append("messageId", "0");

      const { Messages } = await fetch("http://a0830433.xsph.ru/", {
        method: "POST",
        body: formData,
      }).then(res => res.json());

      setPosts(Messages);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? <h1>Загрузка</h1>
        : <>
          <ul>
            {posts.map(post => (<li key={post.id}>{post.content}</li>))}
          </ul>
        </>}
    </>
  )
}

export default App
