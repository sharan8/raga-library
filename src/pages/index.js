import * as React from "react"
import PeaceRasaImage from '../images/peace-rasa.jpg'
import { 
  GlobalStyle,
  GlobalWrapper,
  RagaNavComponentWrapper,
  RagaViewComponent, 
  RagaDetails, 
  RagaTitle, 
  FlexBreak, 
  RagaAroAvro,
  RagaDescription,
  StyledClock,
  DescriptionText,
  DescriptionTime,
  DescriptionRasa,
  NavigationWrapper
} from "../components/styles"
import { Navigation } from "react-minimal-side-navigation";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const RagaNavComponent = () => {
  return (
    <RagaNavComponentWrapper>
      <h3>Raga Library</h3>
      <NavigationWrapper>
        <Navigation
          activeItemId="/M/Mayamalavagowla"
          onSelect={({itemId}) => {
            // Load the selected raga's view
          }}
          items={[
            {
              title: 'K',
              itemId: '/K',
              subNav: [
                {
                  title: 'Kalyani',
                  itemId: '/K/Kalyani',
                },
                {
                  title: 'Kamboji',
                  itemId: '/K/Kamboji',
                }
              ],
            },
            {
              title: 'M',
              itemId: '/M',
              subNav: [
                {
                  title: 'Malahari',
                  itemId: '/M/Malahari',
                },
                {
                  title: 'Mayamalavagowla',
                  itemId: '/M/Mayamalavagowla',
                },
              ],
            },
            {
              title: 'S',
              itemId: '/S',
              subNav: [
                {
                  title: 'Shankarabaranam',
                  itemId: '/S/Shankarabaranam',
                }
              ],
            },
          ]}
        />
      </NavigationWrapper>
    </RagaNavComponentWrapper>
  )
}

const IndexPage = () => {
  return (
    <React.Fragment>
    <title>Raga Library</title>
    <GlobalStyle />
    <GlobalWrapper>
      {RagaNavComponent()}
      <RagaViewComponent>
        <RagaTitle>
          <span><h1>Raga&nbsp;</h1></span>
          <span><h1>Mayamalavagowla</h1></span>
        </RagaTitle>
        <FlexBreak />
        <RagaDetails>
          <RagaAroAvro>
            <h1>
              <p>aro&nbsp;&nbsp;</p>
              <span>S R1 G3 M1 P D1 N3 Ṡ</span>
            </h1>
            <FlexBreak />
            <h1>
              <p>avo&nbsp;&nbsp;</p>
              <span>Ṡ N3 D1 P M1 G3 R1 S</span>
            </h1>
          </RagaAroAvro>
          <FlexBreak />
          <RagaDescription>
            <DescriptionTime>
              <StyledClock value={new Date("November 08, 2021 06:00:00")}/>
              <h3><i>Prātaḥ-sandhyā-kālaṃ (Dawn)</i></h3>
            </DescriptionTime>
            <DescriptionRasa>
              <img src={PeaceRasaImage} alt="Peace Rasa"></img>
              <h3><i>Śānta (Peace)</i></h3>
            </DescriptionRasa>
            <DescriptionText>
              <p>
                Ancient raga commonly used for beginners lessons such as Sarali Varisais or Sarala Svarās 
                (Kannada), etc. Since it eschews vivadi swaras (relatively discordant notes), 
                has a uniform distance between svara sthānas (relative position of notes) and 
                has symmetry, they are easier to learn.
              </p>
            </DescriptionText>
          </RagaDescription>
        </RagaDetails>
      </RagaViewComponent>
    </GlobalWrapper>
    </React.Fragment>
  )
}

export default IndexPage
