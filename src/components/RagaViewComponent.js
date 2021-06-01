import * as React from "react"
import PeaceRasaImage from '../images/peace-rasa.jpg'
import { 
  RagaDetails, 
  RagaTitle, 
  FlexBreak, 
  RagaAroAvro,
  RagaDescription,
  StyledClock,
  DescriptionText,
  DescriptionTime,
  DescriptionRasa,
  RagaViewComponentWrapper
} from "./styles"

const RagaViewComponent = ({ragaData}) => {
  return (
    <RagaViewComponentWrapper>
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
    </RagaViewComponentWrapper>      
  )
}

export default RagaViewComponent