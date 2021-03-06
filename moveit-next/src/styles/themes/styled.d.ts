import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string; 
            bodyBackground: string;
            colorText: string;
            colorTitle: string;
            colorWhite: string;
            colorStartCicle: string;
            experienceColor: string;
        }
    }
}

