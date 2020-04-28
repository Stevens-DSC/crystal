import { render } from "react-dom"
import TextHeader from "../../components/TextHeader"
import PeopleSection from "../../components/people/PeopleSection"
import Person from "../../components/people/Person"

export default (props) => (
  <>
    <section id='leadership'>
      <TextHeader
        title={"Let's talk leadership."}
        invert={true}
        text={
          <p>
            Whether you're looking for who's representing you or who to contact
            about having an event, we've got you covered.
          </p>
        }
      />

      <div className='overview-genbudget'>
        <PeopleSection title={"Mayor's Office"}>
          <Person
            name={"Ravi S. Bhalla"}
            title={"Mayor"}
            contact={"https://www.hobokennj.gov/departments/mayor-ravi-bhalla"}
            image={
              "https://pbs.twimg.com/profile_images/1051912225353433089/cTUnKEi8_400x400.jpg"
            }
          />
        </PeopleSection>

        <PeopleSection title={"First Responders"}>
          <Person
            name={"Chief Kenneth Ferrante"}
            title={"Police Department"}
            contact={"https://www.hobokenpd.com/"}
            image={
              "https://hudsoncountyview.com/wp-content/uploads/2014/10/ferrante.jpeg"
            }
          />

          <Person
            name={"Chief Brian M. Crimmins"}
            title={"Fire Department"}
            contact={"https://www.hobokenpd.com/"}
            image={"https://i.imgur.com/pQX0MwQ.png"}
          />
        </PeopleSection>

        <PeopleSection title={"Departments"}>
          <Person
            name={"Jason Freeman"}
            title={"Administration"}
            contact={"https://www.hobokennj.gov/departments/administration"}
            image={
              "https://pbs.twimg.com/profile_images/834971297981599744/6h0DnhxK_400x400.jpg"
            }
          />
          <Person
            name={"James J. Farina, RMC"}
            title={"Municipal Clerk"}
            contact={"https://www.hobokennj.gov/departments/city-clerk"}
            image={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <Person
            name={"Christopher A. Brown, AICP, PP"}
            title={"Community Development"}
            contact={
              "https://www.hobokennj.gov/departments/community-development"
            }
            image={
              "https://media-exp1.licdn.com/dms/image/C4D03AQE9m6W8g-g05g/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=5pmClPq1lEhV37WfrFcumpdu3oLLHuoJm6WovfbCJpY"
            }
          />
          <Person
            name={"Geraldine Fallo"}
            title={"Cultural Affairs"}
            contact={"https://www.hobokennj.gov/departments/cultural-affairs"}
            image={
              "https://media-exp1.licdn.com/dms/image/C5603AQF7ItxvHaiiJQ/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=EH_fqUbfA903lxNRfUy9Ojh2Q1gpcUIgNaAtWbwLJ1c"
            }
          />
          <Person
            name={"Sharyn Angley"}
            title={"President, Board of Education"}
            contact={"https://www.hobokenschools.org/board_of_education/members"}
            image={
              "https://p9cdn4static.sharpschool.com/UserFiles/Servers/Server_2822288/Image/BOE%20Headshots/Angley.jpg"
            }
          />
          <Person
            name={"Kimberli Craft, P.E."}
            title={"City Engineer"}
            contact={"https://www.hobokennj.gov/departments/engineering"}
            image={
              "https://media-exp1.licdn.com/dms/image/C4E03AQGZWy-b7lGK1A/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=fnZHpkopV7ShJ0UfeCZCpYKx-PgC1nzrjBJEMYp4iB0"
            }
          />
          <Person
            name={"Jennifer Gonzalez"}
            title={"Environmental Services"}
            contact={
              "https://www.hobokennj.gov/departments/environmental-services"
            }
            image={
              "https://media-exp1.licdn.com/dms/image/C4E03AQGS1VbN8KKQhg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=YyvJJm_IBaRv8o0OIdNtCAiBqb_Vu_7N_ZZgTk26GZI"
            }
          />

          <Person
            name={"Linda Landolfi"}
            title={"Finance"}
            contact={"https://www.hobokennj.gov/departments/finance"}
            image={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />

          <Person
            name={"Leo Pellegrini"}
            title={"Health and Human Services"}
            contact={
              "https://www.hobokennj.gov/departments/health-and-human-services"
            }
            image={
              "https://lh3.googleusercontent.com/proxy/7aCfFU0dfQAqtmgT7JfJXaWK5pvH4lLkC8w2Kc4F46AHHB08R9wU0OS8sgKKr_UeiH5Yhsco5zeAkMM2OfCDvNbdbX2lGgQGaL4FA5RUc7w3o564vUW8Uf4BPwQ2XlEVrLuOfXi_PsYcUcq3HIhD"
            }
          />
        </PeopleSection>
      </div>
    </section>
  </>
)
