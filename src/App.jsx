import React from 'react'
import './App.css'
import PostBlock from './components/PostBlock';
import { useDispatch } from "react-redux";
import { selectPostsData } from './redux/posts/selectors';
import { fetchPosts } from './redux/posts/asyncActions';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectPostsData);
  console.log( items[items.length] );

  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch(fetchPosts());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {status == 'loading' ? <h1>Загрузка</h1>
        : <>
            {items.map(post => (<PostBlock key={post.id} {...post}/>))}
        </>}
    </>
  )
}

export default App
