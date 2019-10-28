import React from 'react'
import { Link } from 'react-router-dom'

// import { getClass } from '../services/api'

const Class = ({name, id}) => {

/*   const [idClass, setId] = useState('')

  useEffect(() => {
    async function loadClass(id) {
      const response = await getClass(id);
      setId(response.data)
    }
    loadClass(id)
  }, [])
 */
  return (
    <div className="class">
      <div>
        <Link 
          to={{
            pathname: `create/${name}/${id}`,
            state: {
              id: id
            }
          }}
        >
        <img className="img" src={require(`../img/heros/${name.toLowerCase()}.png`)} alt={name}/></Link>
      </div>
    </div>
  )
}

export default Class