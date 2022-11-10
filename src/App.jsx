
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import "swiper/css";
import "swiper/css/pagination";
import { Navbar } from './components/Navbar/Navbar';
import { Menu } from './components/Menu/index';
import { First } from './components/Sections/First/index';
import { Sec } from './components/Sections/Sec/index';
import { Ter } from './components/Sections/Ter/index';
import { Quar } from './components/Sections/Quar/index';
import { Quin } from './components/Sections/Quin/index';



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