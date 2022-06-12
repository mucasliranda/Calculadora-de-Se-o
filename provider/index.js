import { DarkModeProvider } from "./DarkMode";
import { SecaoProvider } from "./Secao";


export default function Providers({children}) {

  return(
    <DarkModeProvider>
      <SecaoProvider>
        {children}
      </SecaoProvider>
    </DarkModeProvider>
  )

}