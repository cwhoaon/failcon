import logo from './logo.svg';
import type1 from './type1.jpg';
import type2 from './type2.jpg';
import type3 from './type3.jpg';
import type4 from './type4.jpg';
import type5 from './type5.jpg';
import type6 from './type6.jpg';
import type7 from './type7.jpg';
import type8 from './type8.jpg';
import graffiti from './graffiti.png';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>실패 유형테스트 결과 모아보기</div>
      <div className='container_main'>
        <div className='container_sub'>
          <div className='item'>
            <img src={type1} className='typeimage'/>
            <div className='typename'>꾸준한 연구자형</div>
            <p className='content'>팩트를 바탕으로 차근차근 처리하는 신중한 성격이에요.<br></br>꼼꼼함으로는 절대 다른 사람들에게 뒤지지 않아요.</p>
            <p className='content'>자신만의 가치관이 확고하고,<br></br>가끔씩 다른 사람들에게 공감하지 못할 때가 있어요.</p>
            <p className='content'>본인이 시작한 일은 꼭 끝을 보아야한다고 생각하며,<br></br>실수가 생길 경우 즉각적으로 수정하는 편이에요.</p>
            <p className='content'>갑작스러운 변화를 싫어하고, 원리 원칙을 중요시 여겨요.</p>

          </div>
          <div className='item'>
            <img src={type2} className='typeimage'/>
            <div className='typename'>흔들림없는 관리자형</div>
            <p className='content'>내가 게임에서 지면, 왜 졌는지를 꼭 알아야 속이 편해요.</p>
            <p className='content'>일반적으로 조용한 편이나 필요에 따라 사교적이에요.</p>
            <p className='content'>마음에 없는 얘기를 상대방 기분 때문에 하지는 않아요.</p>
            <p className='content'>남들이 알아주지 않아도 내 실력이 쌓이면<br></br>묵묵히 본인의 길을 나아가는 편이에요.</p>
            <p className='content'>다른 사람들에게 쉽게 휘둘리지 않고<br></br>오히려 다른 사람들이 자연스럽게 따라오게하는 힘이 있어요.</p>
          </div>
          <div className='item'>
            <img src={type3} className='typeimage'/>
            <div className='typename'>철두철미한 리더형</div>
            <p className='content'>철처하고, 엄격한 스타일이에요.</p>
            <p className='content'>현실적이고, 구체적이며 일을 이끌어 나가는<br></br>리더십이 있기 때문에, 그룹의 지도자가 매우 어울려요.</p>
            <p className='content'>일을 체계적이고 절도 있게 진행함과 동시에<br></br>본인 또한 열심히 하는 성격이라<br></br>무게감이 있는 리더 역할이에요.</p>
            <p className='content'>현실적이면서 커다란 도전을 좋아해요.</p>
            <p className='content'>자기 또는 타인의 감정을 고려하는 능력이 다소 부족하여<br></br>속단 속결하는 경향이 있어요.</p>
          </div>
        </div>
        <div className='container_sub'>
          <div className='item'>
            <img src={type4} className='typeimage'/>
            <div className='typename'>인자한 지도자형</div>
            <p className='content'>분쟁과 다툼을 싫어하여 피하고자 해요.</p>
            <p className='content'>직관력과 통찰력, 관찰력이 매우 뛰어나요.<br></br>눈치가 빨라서 거짓말, 가식 등을 간파하지만,<br></br>대부분 알고서 모른 척해요.</p>
            <p className='content'>싸움 등의 갈등 상황을 불편해하고,<br></br>그런 상황을 보는 것 자체로도 스트레스를 많이 받아요.</p>
            <p className='content'>끈기 있고 성실하며 안정감이 있어요.</p>
            <p className='content'>다른 이들의 감정을 섬세히 잘 살피고,<br></br>다른 이들도 역시 마찬가지로 그렇게 해주기를 바라요.</p>
          </div>
          <div className='logo'>
            <img src={graffiti}/>
          </div>
          <div className='item'>
            <img src={type5} className='typeimage'/>
            <div className='typename'>창조자형</div>
            <p className='content'>호기심이 많고, 어떠한 일의 결과보다<br></br>가능성을 보는 경향이 있어요.</p>
            <p className='content'>자신이 지향하는 이상에 대해서는<br></br>정열적인 신념을 지니고 있어요.</p>
            <p className='content'>이들은 개인이 꼭 보편적인 길을 선택할 필요 없이<br></br>각자만의 길을 찾아가야 한다고 믿어요.</p>
            <p className='content'>마음이 따뜻하나 상대방과 친해지기 전까지<br></br>자신의 따뜻함을 잘 표현하지 않고,<br></br>오히려 조용하고 과묵한 편이에요.</p>
          </div>
        </div>
        <div className='container_sub'>
          <div className='item'>
            <img src={type6} className='typeimage'/>
            <div className='typename'>활달한 지도자형</div>
            <p className='content'>남에게 동조하는 경향이 뛰어나며<br></br>사람들과의 상호 활동에서 기력이 생기는 편이에요.</p>
            <p className='content'>내 자신의 이야기를 상대방을 가리지 않고<br></br>아무에게나 잘 털어놓아요.</p>
            <p className='content'>공감 능력이 좋고, 적당히 상대방의 기분에 맞춰주는<br></br>'가식적인' 공감도 잘 해줘요.</p>
            <p className='content'>남들 챙기는 것을 좋아해요.</p>
            <p className='content'>정이 많은 편이에요. 좋아하는 사람들에게<br></br>애정을 쏟으며 선물하는 것을 좋아해요.</p>
          </div>
          <div className='item'>
            <img src={type7} className='typeimage'/>
            <div className='typename'>매력적인 달변가형</div>
            <p className='content'>새로운 시도를 좋아해요.</p>
            <p className='content'>계획하기보다는 그때그때 일을 처리하는 편이에요.</p>
            <p className='content'>사람을 쉽게 쳐내지 못해요.</p>
            <p className='content'>새로운 사람 만나기를 좋아하고,<br></br>사람을 기쁘게 해주는 타고난 능력이 있어요.</p>
            <p className='content'>인생을 즐겁게 살려고 해요.</p>
            <p className='content'>사교성과 언변이 좋아<br></br>주위 사람들을 끌어모으는 능력이 있어요.</p>
          </div>
          <div className='item'>
            <img src={type8} className='typeimage'/>
            <div className='typename'>성실한 혁신가형</div>
            <p className='content'>열정적이고, 때로는 단호한 모습도 있기 때문에<br></br>지도력과 통솔력이 있어요.</p>
            <p className='content'>대체적으로 성실하고 활동적이지만<br></br>특히 장기적이거나 거시적인 목표를<br></br>이루어나가는 것을 좋아해요.</p>
            <p className='content'>직관력이 뛰어나며 이를 활용해서<br></br>새로운 아이디어 내는 것을 잘해요.</p>
            <p className='content'>본인이 모임을 주도할 때도 많고<br></br>대화를 적극적으로 이어나가기도 하는 성격이에요.</p>
            <p className='content'>고집이 세 보이지만 정당한 비판은 빠르게 수용해요.</p>

          </div>
        </div>
      </div>
      <div className='footer'>ICISTS</div>
    </div>
  );
}

export default App;
