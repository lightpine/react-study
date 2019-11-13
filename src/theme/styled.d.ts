import 'styled-components'
import { MainInterface } from './styled_components/main'

declare module 'styled-components' {
    export interface DefaultTheme {
        main: MainInterface
        //add style group interface
    }
}