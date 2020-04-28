import { render } from "react-dom"
import TextHeader from "../../components/TextHeader"

export default (props) => (
  <>
    <div className='people-section-container'>
      <h2>{props.title}</h2>
      <div className='people-section'>{props.children}</div>
    </div>
  </>
)
