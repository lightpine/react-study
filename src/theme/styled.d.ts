import 'styled-components'
import { MainInterface } from './styled_components/main'
import { NaviInterface } from './styled_components/navigater'

declare module 'styled-components' {
    export interface DefaultTheme {
        main: MainInterface
        navigater: NaviInterface
        //add style group interface
    }
}