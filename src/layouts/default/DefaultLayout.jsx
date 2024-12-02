import {Theme, presetGpnDefault} from "@consta/uikit/Theme"


const DefaultLayout = ({children}) => {
  return (
    <Theme preset={presetGpnDefault} style={{ marginTop: "50px"}}>{children}</Theme>
  )
}
export default DefaultLayout;
