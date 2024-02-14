import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const CompletionTick = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={72}
    height={71}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M.5 0h71v71H.5z" />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5.768}
      d="m21.846 35.112 9.13 9.125 18.25-18.25"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={35.536}
        x2={35.536}
        y1={25.987}
        y2={44.237}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="orange" />
        <Stop offset={1} stopColor="#0C8B02" />
      </LinearGradient>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#c" transform="scale(.00412)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={243}
        height={243}
      />
    </Defs>
  </Svg>
)
export default CompletionTick