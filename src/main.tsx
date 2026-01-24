//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
const theme = {
    primaryColor: 'brand',
    colors: {
        brand: [
            "#eafbee",
            "#dbf2e0",
            "#b9e1c2",
            "#94d0a1",
            "#74c186",
            "#60b874",
            "#54b46a",
            "#449e59",
            "#398d4d",
            "#2a7a3f"
        ] as const,
        gray: [
            "#FFFFFF",
            "#F3F5FA",
            "#E9ECEF",
            "#DEE2E6",
            "#CED4DA",
            "#ADB5BD",
            "#868E96",
            "#495057",
            "#343A40",
            "#212529"
        ] as const,
    },
};
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
      <MantineProvider theme={theme} >
    <App />
      </MantineProvider>
  //</StrictMode>,
)
