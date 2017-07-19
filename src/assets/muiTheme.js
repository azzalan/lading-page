import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  teal500, teal700, teal900,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'

export const mainColor = teal500
export const mainColorMedium = teal700
export const mainColorDark = teal900

export default getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: mainColor,
    primary2Color: mainColorMedium,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: teal500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
})
