import { render } from "react-dom"
import TextHeader from "../../components/TextHeader"
import PeopleSection from "../../components/people/PeopleSection"
import Person from "../../components/people/Person"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default (props) => (
  <>
    <section id='header'>
      <TextHeader
        title={"Let's talk Hoboken."}
        invert={false}
        first={true}
        text={
          <>
            <p>We aim to bring attention to data-driven trends within the Hoboken government so that we can collectively build a better, well-informed, local community.</p>
            <p>Project Crystal is constantly evolving with the hope to increase public involvement in government affairs.</p>
            <div className='nav-section'>
              <ul>
                <li>
                  <AnchorLink href='#budgets'>Economics and budgets</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#transport'>Transportation</AnchorLink>
                </li>
                <li>
                  <AnchorLink href='#leadership'>Leadership</AnchorLink>
                </li>
              </ul>
            </div>
            
          </>
        }
      />
    </section>
    <div className="black-bar">
        <p>Created by the Google Developer Student Club at Stevens Institute of Technology.</p>
      </div>
  </>
)
