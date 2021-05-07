import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import TrangGioiThieu from './Page/TrangGioiThieu';
import TrangDangTin from './Page/TrangDangTin';
import TrangFAQ from './Page/TrangFAQ';
// import TrangHome from './Page/TrangHome';
import TrangSach from './Page/TrangSach';
import TrangThanhLy from './Page/TrangThanhLy';
import TrangTraoDoiChoTang from './Page/TrangTraoDoiChoTang';
import TrangSuKien from './Page/TrangSuKien';
import TrangNDSuKien from './Page/TrangNDSuKien';
import TrangNDSuKien1 from './Page/TrangNDSuKien1';
import TrangNDSuKien2 from './Page/TrangNDSuKien2';
import TrangNDSuKien3 from './Page/TrangNDSuKien3';
import TrangDocNhieu from './Page/TrangDocNhieu';
import TrangDocNhieu1 from './Page/TrangDocNhieu1';
import TrangLienHe from './Page/TrangLienHe';
import TrangTruyen from './Page/TrangTruyen';
import TrangChiTietSach from './Page/TrangChiTietSach';
import TrangGioHang from './Page/TrangGioHang';
import TrangThanhToan from './Page/TrangThanhToan';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/nd-doc-nhieu-2.html'>
           <TrangDocNhieu1/>
          </Route>

          <Route path='/nd-doc-nhieu-1.html'>
           <TrangDocNhieu/>
          </Route>

          <Route path='/nd-su-kien-4.html'>
            <TrangNDSuKien3/>
          </Route>

          <Route path='/nd-su-kien-3.html'>
            <TrangNDSuKien2/>
          </Route>

          <Route path='/nd-su-kien-2.html'>
            <TrangNDSuKien1/>
          </Route>

          <Route path='/nd-su-kien-1.html'>
            <TrangNDSuKien/>
          </Route>

          <Route path='/sukien.html'>
            <TrangSuKien/>
          </Route>

          <Route path='/form-traodoi-chotang.html'>
            <TrangTraoDoiChoTang/>
          </Route>

          <Route path='/form-thanh-ly.html'>
            <TrangThanhLy/>
          </Route>

          <Route path='/faq.html'>
            <TrangFAQ/>
          </Route>

          <Route path='/contact.html'>
            <TrangLienHe/>
          </Route>

          <Route path='/dangtin.html'>
            <TrangDangTin/>
          </Route>

          <Route path='/about.html'>
            <TrangGioiThieu/>
          </Route>

          <Route path='/truyen.html'>
            <TrangTruyen/>
          </Route>

          <Route path='/thanh-toan'>
            <TrangThanhToan/>
          </Route>

          <Route path='/cart'>
            <TrangGioHang/>
          </Route>

          <Route path='/product-detail/:ID_sach'>
            <TrangChiTietSach/>
          </Route>

          <Route path='/'>
            <TrangSach/>
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;
