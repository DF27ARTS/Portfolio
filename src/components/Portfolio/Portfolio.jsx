import my_image from '../Portfolio_Images/my_image.jpg';
import './Portfolio.css'

const Portfolio = ({state}) => {
  return(
    <div 
      className={
        state ?
        'container_portfolio' :
        'container_portfolio container_portfolio_night'
      }
    >
      <div className="cont_image">
        <img className='My_Image' src={my_image} alt='my_image' />
      </div>
      <div className="cont_information">
        <h1 id='1'  className='title' >Hello everyone</h1>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque alias perspiciatis id, et quaerat aut ut dicta incidunt sed.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum sapiente facilis vero odit iure suscipit architecto consequatur consequuntur ad ab quod quas omnis exercitationem possimus fugit minima harum nostrum, est tempore asperiores unde quos? Animi hic, sunt eos repellat nisi cum laborum accusantium error ut eveniet vero tempore dolore harum sit cupiditate architecto consequatur impedit dolores saepe? Maxime libero quisquam totam aut sequi, molestias nihil deleniti earum, repellat nemo consequatur est! Labore nesciunt ad laudantium nobis sit earum voluptatem eligendi, in nihil esse sapiente excepturi necessitatibus temporibus placeat doloribus fugiat consequatur, asperiores tempore nulla itaque beatae molestias suscipit? Perferendis est doloribus tempora quidem beatae corporis consectetur delectus consequatur reprehenderit amet, ipsam similique neque minus error ad mollitia illum hic facere laudantium! Saepe distinctio labore enim, ipsam vel soluta. Repellat, ipsam beatae asperiores libero minima ipsum illo inventore ut rerum ipsa? Tempore blanditiis reiciendis cum veniam alias vel cumque dicta eaque laboriosam aliquam odit sapiente nobis repudiandae similique totam, placeat, modi, eius quisquam. Suscipit, officiis quia minus non corrupti dolor nostrum sint dolore totam et quo voluptatum exercitationem ipsum illo fugit optio, dicta est quos praesentium. Debitis, tempora dicta, facere eaque, reprehenderit corporis provident optio natus quos voluptates repudiandae enim.
        </span>
        <h2>








        </h2>
        <span id='2' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque alias perspiciatis id, et quaerat aut ut dicta incidunt sed.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum sapiente facilis vero odit iure suscipit architecto consequatur consequuntur ad ab quod quas omnis exercitationem possimus fugit minima harum nostrum, est tempore asperiores unde quos? Animi hic, sunt eos repellat nisi cum laborum accusantium error ut eveniet vero tempore dolore harum sit cupiditate architecto consequatur impedit dolores saepe? Maxime libero quisquam totam aut sequi, molestias nihil deleniti earum, repellat nemo consequatur est! Labore nesciunt ad laudantium nobis sit earum voluptatem eligendi, in nihil esse sapiente excepturi necessitatibus temporibus placeat doloribus fugiat consequatur, asperiores tempore nulla itaque beatae molestias suscipit? Perferendis est doloribus tempora quidem beatae corporis consectetur delectus consequatur reprehenderit amet, ipsam similique neque minus error ad mollitia illum hic facere laudantium! Saepe distinctio labore enim, ipsam vel soluta. Repellat, ipsam beatae asperiores libero minima ipsum illo inventore ut rerum ipsa? Tempore blanditiis reiciendis cum veniam alias vel cumque dicta eaque laboriosam aliquam odit sapiente nobis repudiandae similique totam, placeat, modi, eius quisquam. Suscipit, officiis quia minus non corrupti dolor nostrum sint dolore totam et quo voluptatum exercitationem ipsum illo fugit optio, dicta est quos praesentium. Debitis, tempora dicta, facere eaque, reprehenderit corporis provident optio natus quos voluptates repudiandae enim.
        </span>
      </div>
    </div>
  )
}

export default Portfolio;