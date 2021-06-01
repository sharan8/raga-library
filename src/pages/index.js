import * as React from "react"
import { graphql } from "gatsby"
import { 
  GlobalStyle,
  GlobalWrapper,
  RagaNavComponentWrapper,
  NavigationWrapper
} from "../components/styles"
import { Navigation } from "react-minimal-side-navigation";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import RagaViewComponent from "../components/RagaViewComponent"

const IndexPage = ({data}) => {
  console.log(data)
  const [currentRaga, setCurrentRaga] = React.useState('Mayamalavagowla')

  const createNavItem = (node) => {
    const navItem = {
      title: node.frontmatter.name,
      itemId: node.frontmatter.name
    }
    return navItem
  }
  
  const RagaNavComponent = (edges) => {
    let navItems = []
    edges.forEach(({node}) => navItems.push(createNavItem(node)))
    return (
      <RagaNavComponentWrapper>
        <h3>Raga Library</h3>
        <NavigationWrapper>
          <Navigation
            activeItemId="Mayamalavagowla"
            onSelect={({itemId}) => {
              setCurrentRaga(itemId)
            }}
            items={navItems}
          />
        </NavigationWrapper>
      </RagaNavComponentWrapper>
    )
  }

  return (
    <React.Fragment>
    <title>Raga Library</title>
    <GlobalStyle />
    <GlobalWrapper>
      {RagaNavComponent(data.allMarkdownRemark.edges)}
      <RagaViewComponent ragaData={'test'}/>
    </GlobalWrapper>
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`query RagaQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___name], order: ASC}) {
    totalCount
    edges {
      node {
        frontmatter {
          name
          aro
          avro
          time
          rasa
        }
        excerpt
        timeToRead
      }
    }
  }
}`
