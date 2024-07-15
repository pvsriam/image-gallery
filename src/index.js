import ReactDom from 'react-dom/client';
import dachshund from './assets/Dachshund.jpg';
import lab from './assets/lab.jpg';
import jack from './assets/jack.jpg';
import './index.css'; 

const root = ReactDom.createRoot(document.getElementById('root'))

function Pet(props) {
  return (
    
    <div className="pet-card">
      <img src={props.img} alt="Pet" className="pet-image" />
      <p className="pet-description">{props.content}</p>
    </div>
  )
}

let petdog =
 [
  { img: dachshund, 
    content: 'The Saint Doggo' 
  },
  { img: lab,
     content: 'The Innocent Eyes' 
  },
  { img: jack, 
    content: 'The Energetic Jack' 
  },
  { img: dachshund,
    content: 'The Saint Doggo'
  },
  { img: jack,
    content: 'The Energetic Jack' 
  },
  { img: lab,
   content: 'The Innocent Eyes' 
  },
  { img: dachshund,
    content: 'The Saint Doggo' 
  },
  { img: jack,
  content: 'The Energetic Jack'
  },
]

root.render(
  <>
  <div className="outerpetcard">
  <div className="pet-container">
    {petdog.map(function (item, index) {
      return <Pet key={index} img={item.img} content={item.content} />;
    })}
    </div>
  </div>
  </>
)