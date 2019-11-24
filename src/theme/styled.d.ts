import 'styled-components'
import { MainInterface } from './styled_components/main'
import { NaviInterface } from './styled_components/navigater'
import { ContactInterface } from './styled_components/contact'

declare module 'styled-components' {
    export interface DefaultTheme {
        main: MainInterface
        navigater: NaviInterface
        contact: ContactInterface
        //add style group interface
    }
}