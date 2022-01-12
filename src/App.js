import logo from './logo.svg';
import type1 from './type1.jpg';
import type2 from './type2.jpg';
import type3 from './type3.jpg';
import type4 from './type4.jpg';
import type5 from './type5.jpg';
import type6 from './type6.jpg';
import type7 from './type7.jpg';
import type8 from './type8.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>실패 mbti</div>
      <div className='container_main'>
        <div className='container_sub'>
          <div className='item'>
            <img src={type1} className='typeimage'/>
            <div className='typename'>꾸준한 연구자형</div>
            <p className='content'>내가 게임에서 지면, 왜 졌는지를 꼭 알아야 속이 편해요.</p>
            <p className='content'>일반적으로 조용한 편이나 필요에 따라 사교적이에요.</p>
            <p className='content'>마음에 없는 얘기를 상대방 기분 때문에 하지는 않아요.</p>
            <p className='content'>남들이 알아주지 않아도 내 실력이 쌓이면<br></br>묵묵히 본인의 길을 나아가는 편이에요.</p>
            <p className='content'>내가 게임에서 지면, 왜 졌는지를 꼭 알아야 속이 편해요.</p>
          </div>
          <div className='item'>
            <img src={type2} className='typeimage'/>
            <div className='typename'>흔들림없는 관리자형</div>
          </div>
          <div className='item'>
            <img src={type3} className='typeimage'/>
            <div className='typename'>철두철미한 리더형</div>
          </div>
        </div>
        <div className='container_sub'>
          <div className='item'>
            <img src={type4} className='typeimage'/>
            <div className='typename'>인자한 지도자형</div>
          </div>
          <div className='item'>ICISTS</div>
          <div className='item'>
            <img src={type5} className='typeimage'/>
            <div className='typename'>창조자형</div>
          </div>
        </div>
        <div className='container_sub'>
          <div className='item'>
            <img src={type6} className='typeimage'/>
            <div className='typename'>활발한 지도자형</div>
          </div>
          <div className='item'>
            <img src={type7} className='typeimage'/>
            <div className='typename'>매력적인 달변가형</div>
          </div>
          <div className='item'>
            <img src={type8} className='typeimage'/>
            <div className='typename'>성실한 혁신가형</div>
          </div>
        </div>
      </div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
