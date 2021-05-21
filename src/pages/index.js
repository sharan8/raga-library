import * as React from "react"
import { 
  GlobalStyle, 
  MainComponent, 
  RagaDetails, 
  RagaTitle, 
  FlexBreak, 
  RagaAroAvro,
  RagaDescription
} from "./styles"

const IndexPage = () => {
  return (
    <React.Fragment>
    <GlobalStyle />
    <MainComponent>
      <RagaTitle>
        <span><h1>Raga&nbsp;</h1></span>
        <span><h1><u><i>Mayamalavagowla</i></u></h1></span>
      </RagaTitle>
      <FlexBreak />
      <RagaDetails>
        <RagaAroAvro>
          <h1>⬆️: S R1 G3 M1 D1 N3 Ṡ</h1>
          <FlexBreak />
          <h1>⬇️: Ṡ N3 D1 P M1 G3 R1 S</h1>
        </RagaAroAvro>
        <FlexBreak />
        <RagaDescription>
          <p>
            This auspicious raga evokes śānta (peace) rasa and pathos. It creates a 
            soothing effect. Suitable to sing at all times, particularly, the first 
            prātaḥ-sandhyā-kālaṃ (dawn). It is commonly used for beginners lessons such 
            as Sarali Varisais or Sarala Svarās (Kannada), etc. Since it eschews vivadi 
            swaras (relatively discordant notes), has a uniform distance between svara 
            sthānas (relative position of notes) and has symmetry, they are easier to 
            learn. It is an ancient rāgam and has been around for a long time.
          </p>
        </RagaDescription>
      </RagaDetails>
    </MainComponent>
    </React.Fragment>
  )
}

export default IndexPage
