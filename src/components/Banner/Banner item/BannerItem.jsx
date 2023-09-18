import { useNavigate } from 'react-router-dom'
import './BannerItem.scss'
export default function BannerItem({data:{category,image,description,color,link}}) {
  const navigate = useNavigate()
  


  const navigateToProducts = () => {
    navigate(`/products/${link}`)
  }

  return (
    <div className="banner-item">
        <img src={`/images/${image}`} draggable='false' onDragStart={()=> false} className="banner--image" alt="category" />
        <div className="banner-content-wrapper">
          <h1 className="banner--category" style={{color:color}}>{category}</h1>
          <p className="banner--description">{description}</p>
          <button className="btn-view" id={link} onClick={navigateToProducts}>View More</button>
        </div>
    </div>
  )
}
