import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faBookmark as farBookmark} from '@fortawesome/free-regular-svg-icons'


const Card = (props) => {

  const renderData = () => {
    return props?.characters?.map((item, index) => (


      <div className='column'>
        <div className='blue-column'>

          <div key={index} className={(item.alive === true ? 'card-background' : 'card-background-finado')}>
            <div className={(item.house === 'Slytherin' ? 'icon-background-slytherin'
              : item.house === 'Hufflepuff' ? 'icon-background-hufflepuff' : item.house === 'Ravenclaw' ? 'icon-background-ravenclaw'
                : 'icon-background')}>
              <img srcSet={item.image} className='card-image'/>
            </div>
            <div className='info-card'>
              <div className='vivo'><div>{item.alive ? 'VIVO' : 'FINADO'} / {item.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}</div>{item.alive ? <FontAwesomeIcon icon={faBookmark} className='icon-card' /> : <FontAwesomeIcon icon={farBookmark} className='icon-card'/>}</div>

              <div className='heading-text'>{item.name}</div>
              <div className='card-content'>

                <div><b>Cumpleaños:</b>{item.dateOfBirth}
                </div>
                <div><b>Género:</b>{item.gender}
                </div>
                <div><b>Color de ojos:</b>{item.eyeColour}
                </div>
                <div><b>Color de pelo:</b>{item.hairColour}
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    ))
  }


  return (
    <div className='row'>
      {renderData()}
    </div>
  )
}

export default Card;
