import { useContext } from 'react'
import PostContext from '../../../../context/PostContext'
import Card from './Card'

const ListPosts = () => {
  const { posts } = useContext(PostContext)
  // const { posts, loading: loadPosts } = usePosts()
  const notImage = 'https://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'

  return (
    <>
      {posts.map((post) => {
        return (
          <div className='col-3 mb-3' key={post.id}>
            <Card
              url={post.images.length > 0 ? post.images[0].url : notImage}
              title={post.title}
              description={post.description}
              data={post}
            />
          </div>
        )
      })}
    </>
  )
}
export default ListPosts
