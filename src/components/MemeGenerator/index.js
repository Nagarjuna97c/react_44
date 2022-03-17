import {Component} from 'react/cjs/react.production.min'

import {
  MainContainer,
  Form,
  FormHeading,
  Label,
  InputContainer,
  Input,
  Select,
  Button,
  ImageContainer,
  ImageText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 22,
    display: false,
  }

  changedUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changedTopText = event => {
    this.setState({topText: event.target.value})
  }

  changedBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changedFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  changeDisplay = () => {
    this.setState({display: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, display} = this.state

    const displayImage =
      imageUrl && topText && bottomText && fontSize && display

    console.log(displayImage)
    return (
      <MainContainer>
        <Form as="form">
          <FormHeading>Meme Generator</FormHeading>
          <Label htmlFor="url">Image Url</Label>
          <InputContainer>
            <Input
              type="text"
              id="url"
              value={imageUrl}
              onChange={this.changedUrl}
              placeholder="Enter the Image URL"
            />
          </InputContainer>
          <Label htmlFor="top-text">Top Text</Label>
          <InputContainer>
            <Input
              type="text"
              id="top-text"
              onChange={this.changedTopText}
              value={topText}
              placeholder="Enter the Top Text"
            />
          </InputContainer>
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <InputContainer>
            <Input
              type="text"
              id="bottom-text"
              value={bottomText}
              onChange={this.changedBottomText}
              placeholder="Enter the Bottom Text"
            />
          </InputContainer>
          <Label htmlFor="font-size">Font Size</Label>
          <Select id="font-size" onChange={this.changedFontSize}>
            {fontSizesOptionsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </Select>
          <Button type="button" onClick={this.changeDisplay}>
            Generate
          </Button>
        </Form>
        {displayImage && (
          <ImageContainer data-testid="meme" imageUrl={imageUrl}>
            <ImageText fontSize={fontSize}>{topText}</ImageText>
            <ImageText fontSize={fontSize}>{bottomText}</ImageText>
          </ImageContainer>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
