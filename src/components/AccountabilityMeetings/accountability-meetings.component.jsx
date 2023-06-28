import {Container, H1, Image, ImageSummary, Img, MeetingCard, Summary} from "./accountability-meetings.styles";

const AccountabilityMeetings = () => {
  return (

    <Container>

      <MeetingCard>
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
