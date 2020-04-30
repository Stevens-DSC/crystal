import { render } from "react-dom"
import TextHeader from "../../components/TextHeader"

export default (props) => (
  <>
    <section id='transport'>
      <TextHeader
        title={"Let's talk transport."}
        invert={true}
        text={
          <p>
            Sinatra Park, Manhattan, Jersey City and more are just a walk, bike
            or train ride away.
          </p>
        }
      />

      <div className='overview-genbudget nobottompad'>
        <div className='div-sidebyside'>
          <div className='sect'>
            <h3>Subway, light rail and rapid transit</h3>
            <ul className='subway-lines'>
              <li className='subway-33'>
                <pth>
                  <img
                    className='down'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/PATH_logo.svg/500px-PATH_logo.svg.png'
                  />
                  <to>33 St (Manhattan)</to>
                  <every>to/from, every 6 minutes</every>
                </pth>{" "}
                <subheading>
                  Continues to/from JSQ on weekends and late nights.
                </subheading>
              </li>
              <li className='subway-wtc'>
                <pth>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/PATH_logo.svg/500px-PATH_logo.svg.png' />

                  <to>World Trade Center</to>
                  <every>to/from, every 10 minutes</every>
                </pth>{" "}
                <subheading>
                  Weekdays only, connect with NYCT Subway on weekends
                </subheading>
              </li>

              <li className='subway-hblr'>
                <pth>
                  <img src='https://pbs.twimg.com/profile_images/1177396237986914304/lXMjGHrp_400x400.jpg' />

                  <to>8 St (Bayonne)</to>
                  <every>to/from, every 10 minutes</every>
                </pth>{" "}
                <subheading></subheading>
              </li>

              <li className='subway-hblr'>
                <pth>
                  <img src='https://pbs.twimg.com/profile_images/1177396237986914304/lXMjGHrp_400x400.jpg' />

                  <to>Tonnelle Avenue</to>
                  <every>to/from, every 10 minutes</every>
                </pth>{" "}
                <subheading>
                  Weekdays only, connect at 2nd Street on weekends
                </subheading>
              </li>

              <li className='subway-bus'>
                <pth>
                  <img src='data:image/png;base64,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' />

                  <to>126 Port Authority Bus Terminal</to>
                  <every>to/from</every>
                </pth>{" "}
                <subheading>
                  Consult <a target="_blank" href='https://njtransit.com'>NJ Transit</a> for
                  schedules.
                </subheading>
              </li>

              <li className='subway-bus'>
                <pth>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADNzc2SkpJTU1Oampr5+fnr6+tsbGzGxsaGhoagoKC0tLSrq6vZ2dn19fXk5OR5eXknJydLS0ve3t5dXV1iYmItLS1ycnK+vr4zMzOoqKggICA9PT1GRkaAgIAQEBAXFxc/Pz+WlpYTExNXV1dyb2JnAAAN3klEQVR4nO1d6XriOgylUJJCQoCWHdqBzvT9X/EW5C2JFymWITO951e/QmIfokiyJMuDwf9gQTZfVMNJOZsVRTGblZNhtZhnj54UDxaT2XTzfnmy4fK+mc4mi0dPsTOy4XG3tTJrYrs7Dv+2B5qXy1cUOY3XZZk/etpIzPfLE5GdxGm5nz96+iHkxVtHdhJvRY8fZV4cHM/meTctZvtvDbq64lur7mfFdPfseNaHfpLMyo/2XC/rUVn5pptX5Wh9aV/4UfZN9VS75hzPm2KIfanmw2Jzbt5gVyWdMQ3le2N2LyXdyi3Kl8Zd3ssEc+2AbNx4i8bdf/xq3HiTx48X1vm0/v4cY5VEfqy/z9PH2o86vy2TDsyLbV84jsyJLDk1Q7U0bz1ivDMFR2MOpyP/7U1ryX/7MCaG4/k2STOE4R+9phnCjXytB1+nM1yVOcxdHZ1CD/y1SjrS6ksPVSQdqTaqVnVv6R2PSsvqNu2vqaA16J1eDuOVv4dWXWiv434KTqvtQ/Kgx0yN9XJPQzzXPuss7UgbOc5lmHagFoYXOfQm4SgrtcSZJhzFBeUhnpMpnFIN8ZilW6V+4ETLql/y/rs090dArbN/pbi7Mkv7FHdHYq8MMfutc+kHHx4bJcqlsXplnsfq8RIqoSSVVd8M72SMUFAmmdFgKenvR/irYtcI0kqc+hKoVUqByWpIqfh8fNxLIvvkfGskwTXHzdiw5qMoRfTxSrSOHZegSiWz5JgVK2Q0LlLdSDORxEuKhPQio4zGqscENcUI05/3mqAW1O5W7NRPJaMh1M1r1+vf+mgm6hBGo+NKQ4j5J++cmPEZ8R4JQ3jqjydjQ3bqbBalGu2LL+qC1IZ0hSpiIv1YTfggVhpn6nUbRs82MYTjTAwyzvpuJ0zsOjyNBVxzSDUnZojYDSXgf/g7tIxETn4gIxav/Y4QKyB0Zmr1N72EgB3NZGwJ6jdbDSeT4erhRZNg3La4LxdoSzj8pXOXH1NybWi5ebEAkj7FFUfA7IbyG27FIKwiKhEuXttwdqlsFU8eaJn2383rbwAv2vqRb7E7xStHcNdPoa9l1lJZknIa2+7w9Hz7jMxQLPUQC6FJ+F5XzO1TeKL46bwMRcAlXFoAP8VL4FtZqxxUgOI78TIcQCI8KHyiJiCkNNb2GTyR5JSZoRCrUP0E7lsTJ0GKnDIzlE/HPyh4M8G4h6Ni/Qa8nHIzHIDt8no24kGH3tbKPr4AWk7ZGQrR8r1iYFSCcZ2pfXwJrJyyMxSxM48pF48w6M0Edvxg5ZSfoRAu90OEZ/MVmpnLFiog5ZSf4QAqGZ0PMYPbBB10/2t4BU5OEzBc+ceHEcN+z9A+vIGQw5CMoTDUY8encJfwmiLMEOE7JWIo5Mv+IYSAEQFyBEOUnHoYZl0ZCnVqDxC/Y399DENMgCAJQ7CJ77aP4PkGHVckQ8wvlYShWDrY3jUIdWDqflEMA+5hOobgnVpkKMPOC8swLKdpGAol1VYEoGdQBQk4huHpeBg6nAoUQ8gMt3UN7BhDJWKQDM8PYggK5aP5b4g/4aJxSIZBgUjEUERDmzEpCCHiYmVYhqEJpWJo53Kw8o5keHkMQ5DHg+2fLdmNZBhIr3sY5taPsMVBoFPqjwseLHITDJ6hX3MlYwgmsS6mbxbWHAy9LlIyhnB1zcMGsbc6c3EMvcmBZAyFi20u9SH/5lpVxTD0yWk6hnBnM9SwDE2mO0OPnHoYLuIYgtE37TH448jLaQw94ct0DME3NX5ckAlc6IHM0B33ScgQchhac4LXjS6cIjJ0uoIJGTYZwWuILtYgMnTKaUKGcL1+EW8R3jP2ajJD12/nYbiyfkQoeL5l/1T+BZab+IwKmaGj0MXD0BGSxTOEqjW5DIYZ43PwZIZPv+/OsKh9/0i8ms7QLqcpGcIcpaMNMSh8rYiN4W9LlygDVocwJUPwQ2Ws6LYmDqzlggwD6RrbO5CS4eBy/b40VLeLCfXqNoajkOxa1i1JGUICA/5eiClGMnRMWMIip0kZQr4e3n+IgxNKwR0MPQUaV7SX10kZglcDkXeoByYUdLsYDvz9EltympQh3AHqhqf28TswdPhaAq0oUFKGsJqABTiYf/y1boZ6w7AVTTn1MHSoLco2tdsF4KjdlvyYnFOYYaBKoyEnaRneXhnQb3/UfeMZDryGv5F9Tcvw+XrBn+tf4HdTSp59DB1JI4H6hoG0DMFTu/re4IxQ2rH4GAYKNWquYVqGUzUgKEBKda+XodGFyIJarY6HoaM0kMIQVhdXk28aDg6Gg1YrUxOmY5GWoTbzMF9K+XKAobdy0ZTTtAz36gq4GaUvWYihd5lhePhpGWpeJfnaEEP/MkNLS1qGMInrW0F2S/0M51ezXli+oaDk1MPQ4RxRGGr9AgwpWzD9DG9iuLF8RUKFvNIyXCmGBS/DDKbhW2ZIOb0HwyIFw5uL60geAbK/nCHEDn3LjJf7MmR+D6+O6S124Ftm7O/GUGsaNl16ZQhrCN8ZAlmAYWn9qKMuZbaHmbyvd5nxkp6htofMPg3wutk8R3pFjZeWoebF7Jdmepqued6QnKH2S5nXFkI24X5LyzcFdqkZav3CvD6Ubx/EZJqHJtRmm5ahXh8yr/ElQ4gdepYZZx9DxzK62xqfN06jNejY+V2B6dH6by6GOk7DG2szbAQ4EZ5lhj0LwMVQx9pY46UmQ5Gv8y0zUjI04qWMMe8aQ+l+Es+24mJ4uwBWanx5iwZDEXbyLjPa2PAwNPMWfLmnJsNa+g6LkoehaebZ8odthuJVHFkucCLjYWjmD7lywBaGMrL2jCcIL6+9oUTXHDBTHt/KUNas4hkCiebRT3SGZh6fpRbDxVDIiW+ZUcOn9xfpWovBUU/jZCgExbfMMAE/iCu907WehqMmys3wDHEnzzLDgMiEuyIgXWuiOOra3Ayl4HmWGRoiXOT6uGtdG0dtooehUGLBPe76Ls4EXdfaRI76Uh9DUcka3uQuq4r+xDOs15dy1Ah7GYpPvdmMK4Syc3+vc40wQ523n6Ewi970sPqJPX4sOqrbZMRQqx9gKPTY3OfcyOl7yjnQFq1Zq8+w3yLEUDo3zse4ldPxOLF/sDNs7bdg2DMTZCi/kdtD4Wofny/fgW6b3t4zE7/vKcxQDWh5jG8r370V0GHr9r6n+L1rCIaq1GTeeIzGqbH+MlwsQcvetfj9hxiG+myYyVScdvz6NTItgL/yz17xb4Fl/2H8HlIUw7qcZS3NGFgpozWpbQ9p9D5gJEOfssg//Zfig9a2fcDRe7l1iMDVjU/g7FIXwVAHuhGcdS939H58zTDofq4t7mHz2GQL8LkjO5fYngpGmCe82N00/MuJI2hhAqvoB66eCrF9McxAVqCd2xXn6eQ2g/lq/9uXDdfAN3p29MWI7W1SC9VRA/kIEM7LdPU2iexPUw9GEqKHOFCahsIVFr0U12OoEW5FhSzwoBzR4ewxFNknqhlQDtg2Iig9mN19ouJ6fbVC5pwUKeVMnl5fcf3a2kkBnIrEgHTcka9fW1TPPUvag0ujkgh6e+5F9U20JXYQdhEB2hki/r6J2N6XWIboUL4PtDOcA70vsf1L0QwRIdIA3omd7AP9S7E9aPEMB1mc7aeeZxfsQYvsI0xgiAgDe0A+YCPYRxjZC5rE0DyMnYYv8pESiF7QuH7eNIZdH2OHM6oQ/bxxPdmpDAdzumnscrQ5qic7qq8+meG3CvC3XGhi1+UMH2RffczZCB0Yfl+E5zjtdkYR8mwEzPkWnRh+P0dErOLp6TDreJQd+nwLxBklHRl+y1ER0Kuvo+4nbqLPKEGcM9OZ4TcWhcsHOG9mNA+tDsI5M+Gzgmx1aqQa42JXf5bvL+N95PlglLOCwuc9ZXkbZOs8X1TXk6KqFc/RZ6Tznn7AmV3//rlrP+DsvB9w/uG/f4blDziH9AecJfsDzgP+9890/gHncv+As9XVfp7+2gxhJyjJtzrkW0wNW94LsnY8QhtKhdpRzBPjV3c1qjHsMUVJkJSbamPfW0GVIhq9ApL5o76pG9mNqpMhrEOWg/bLaMgdtiyOs6T42R/vJvvkJKgF9dQXHzU/8YkoQBW29mOlofKujGEWFSHtw3pR1YlHmok61P7Bx6tU1dIvytC3kcs954fHvoy5jCW/8s9DVQA9MsioNELn1YQP0kt6oKQqCU3kRarymPNjdGqlSsjZrEQTKzVElyR0LFSJ1ZlZx9SgEvIXVlWNwPAihyaHDWnQm5ZeyOmmCMx1/ji5STbKYwi115HQvXoOMVlULPTWj1dKD7TumOj+L4TsUgxWWzXiW3qtWulS3G1KFVOHUeX0lXbU1ZceitKPLBq50eNpne45VuYw93YXjZfj6S3N+zgxSsXv9MrXYTYjO/Hr1aPZxvZ+aruO2oa6JaewVrVGIXfSoDbMa8Xq24LnVcmLrXnb6T1dizbqHJ8+jrEk82O9xO/B/K5obo48jLuLazVuFL6NexLfK5sbuV5KunO1KJu1i+/JFkkdULUORDhviiFWwObDYtPaPrzrR2BPIystJbKX9aisfG9mXpWj9aV94UfZE/GsI3eVj56ed9Nitr/W6V1RDSf7WTHdPTsatx+YdHIS5EXslrW3PtMDzPdL/9ldbpyW+8fbBhzyckns6fn0uix7//AayIbH3TbM7Bvb3XHYS8WCwmIym27eL1Zml/fNdDa5R1jiDshuRc/lbFYUxWxWfmvVxfzvfWw9w3+dxKK4Nmfp8gAAAABJRU5ErkJggg==' />

                  <to>89 North Bergen</to>
                  <every>to/from</every>
                </pth>{" "}
                <subheading>
                  Consult <a target="_blank" href='https://njtransit.com'>NJ Transit</a> for
                  schedules.
                </subheading>
              </li>

              <li className='subway-hop'>
                <pth>
                  <img src='https://i.imgur.com/wsAgXbo.png' />

                  <to>Hop Bus</to>
                  <every>Free rapid-transit bus</every>
                </pth>{" "}
                <subheading>
                  Consult <a target="_blank" href='https://njtransit.com'>The Hop Map</a> for
                  details.
                </subheading>
              </li>
            </ul>
          </div>
          <div className='sect sect-black'>
            <h3>Intercity rail</h3>
            <iframe
              scrolling='no'
              src='https://dv.njtransit.com/webdisplay/tid-mobile.aspx?sid=HB'
            />
          </div>
        </div>
        <div className='div-sidebyside'>
          <div className='sect sect-black'>
            <h3>Parking</h3>
            <div className='sect-black-links'>
              <a
                href='https://www.hobokennj.gov/resources/street-cleaning-schedule'
                className='call-to-action'
                target="_blank" 
              >
                Street cleaning schedule <img src='/right_arrow_thing.svg' alt='logo' />
              </a>
              <a
                href='https://www.hobokennj.gov/resources/pay-a-parking-ticket'
                className='call-to-action'
                target="_blank" 
              >
                Pay a parking ticket <img src='/right_arrow_thing.svg' alt='logo' />
              </a>
              <a
                href='https://www.hobokennj.gov/resources/temporary-parking-permit'
                className='call-to-action'
                target="_blank" 
              >
                Temporary parking permit <img src='/right_arrow_thing.svg' alt='logo' />
              </a>
              <a
                href='https://www.hobokennj.gov/parking-center'
                className='call-to-action'
                target="_blank" 
              >
                Parking center and FAQ <img src='/right_arrow_thing.svg' alt='logo' />
              </a>
              <a
                href='https://www.hobokennj.gov/resources/parking-in-hoboken'
                className='call-to-action'
                target="_blank" 
              >
                More permits <img src='/right_arrow_thing.svg' alt='logo' />
              </a>
            </div>
          </div>
          <div className='sect '>
            <iframe src='https://www.google.com/maps/d/embed?mid=1NadKVHzfZxw36ZqQy19kIHjwi7M&hl=en'></iframe>
          </div>
        </div>
      </div>
    </section>
  </>
)
