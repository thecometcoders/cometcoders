import {Container, H1, Image, ImageSummary, Img, MeetingCard, Summary} from "./accountability-meetings.styles";

const AccountabilityMeetings = () => {
  return (

    <Container>

      <MeetingCard>

        <ImageSummary>
          <Image>
            <Img src={require("../../assets/accountability/accountability-2023-07-04.png")} alt=""/>
          </Image>
          <Summary>
            <h1> July 4 2023 Meeting Notes & Commitments</h1>
            <ul>
              <li>@REINDHARTZ Completed the box for the Bomberman game. Committing to;
                Completing an animation of the crate breaking.
              </li>

              <li>@Andrew Portfolio is online, working on custom shader for animated spinning galaxy; Committing to;
                Completing the animated galaxy portion
                Complete another hour of r3f
                Importing animation form
              </li>
            </ul>
            <p>See @everyone in our next accountability meeting this Thursday 😎 💪</p>
          </Summary>
        </ImageSummary>

        <ImageSummary>
          <Image>
            <Img src={require("../../assets/accountability/accountability-2023-06-27.png")} alt=""/>
          </Image>
          <Summary>
            <h1> June 27 2023 Meeting Notes & Commitments</h1>
            <ul>
              <li>@OneBraveHero Showed progress on the styling for the input forms. Committing to;
                Complete the switch menu completed.
              </li>

              <li>@REINDHARTZ Shared progress on the blender, cleaning up the skeleton. Committing to;
                Finish the skeleton clean up.
              </li>

              <li>@S. Schneider Created a website using;
                Showing us the Wiz next time, and working on CSS
              </li>

              <li>@marina 10 year highschool reunion, woo!!! Committing to;
                Research for a web app idea, taking care of family.
              </li>

              <li>@Andrew Demonstrated the two apps I am working on. Committing to;
                Completing another 30 minutes of 3JS
                Completing Sign-in
              </li>
            </ul>
            <p>See you all in our next accountability meeting on Thursday 💪 😎</p>



          </Summary>
        </ImageSummary>

      </MeetingCard>

    </Container>

  )
}

export default AccountabilityMeetings
