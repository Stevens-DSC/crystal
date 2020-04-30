import { render } from "react-dom"
import TextHeader from "../../components/TextHeader"

export default (props) => (
  <>
    <div className='person'>
      <img src={props.image} />
      <div className='person-description'>
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
        <a target="_blank" className="hidden-button" href={props.contact || "#"}>
          <>
            Contact <img src='/right_arrow_thing.svg' alt='logo' />
          </>
        </a>
      </div>
    </div>
  </>
)
