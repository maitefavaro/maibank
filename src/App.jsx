
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import "swiper/css";
import "swiper/css/pagination";
import { Navbar } from './components/Navbar/Navbar';
import { Menu } from './components/Menu/index';
import { First } from './components/pages/First/index';
import { Sec } from './components/pages/Sec/index';
import { Ter } from './components/pages/Ter/index';
import { Quar } from './components/pages/Quar/index';
import { Quin } from './components/pages/Quin/index';



export const App = () => {

  return (
    <>
      <Fullpage>

        <FullPageSections>


          <FullpageSection style={{ height: '75vh' }}>
            <Navbar />
            <Menu />
          </FullpageSection>


          <FullpageSection style={{ height: '100vh' }}>
            <First />
          </FullpageSection>


          <FullpageSection style={{ height: '100vh' }}>
            <Sec />
          </FullpageSection>


          <FullpageSection>
            <Ter />
          </FullpageSection>


          <FullpageSection>
            <Quar />
          </FullpageSection>


          <FullpageSection>
            <Quin />
          </FullpageSection>


        </FullPageSections>
      </Fullpage>

    </>
  )
}