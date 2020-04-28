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
            <p>We have you covered for all things Hoboken - the mile square city.</p>
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
    <div class="black-bar">
        <p>Created by the Google Developer Student Club at Stevens Institute of Technology.</p>
      </div>
  </>
)
