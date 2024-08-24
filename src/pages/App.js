import '../App.css';
import css from '../style/App.module.css';

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

function App() {
    return (
        <div className="App">
            <div className="centerMargin">
                <h1 className={css.hello}>
                    <FontAwesomeIcon icon={faUserLock} />
                    <br />
                    디스코드 악성 유저 차단 봇, <br />
                    MGuard.
                </h1>

                <p className={css.description}>
                    악성 유저 차단 외 다양한 보안 기능들 포함!
                    <br />
                    <br />
                    <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>n</span>개의 서버에서 일하는 중 🐜
                    <br />
                    <br />
                </p>
                <Link to={''} target="_blank" rel="noreferrer noopener">
                    <button className="btn btn-green btn-large">봇 초대하기</button>
                </Link>
                <Link to={''} target="_blank" rel="noreferrer noopener">
                    <button className="btn btn-blurple btn-large">서포트 서버 바로가기</button>
                </Link>
            </div>
            <hr />
            <div className="centerMargin">
                <h1>방대한 악성 유저 DB와 api</h1>
                <img src={img1} style={{ width: '45%' }} alt="img1" />
                <p>
                    Mguard로 자신의 서버를 악성 유저들로 부터 보호하세요! 악성 유저 데이터가 필요하신 개발자들을 위해
                    api도 무료로 제공하고 있어요.
                </p>
                <h1>유저 관리 시스템</h1>
                <img src={img2} style={{ width: '45%' }} alt="img2" />
                <p>욕설 / 스팸 검열 기능, 경고 기능, 차단, 추방 기능, 신고 기능 등이 봇에 내장되어 있어요!</p>
                <br />
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h1>MGuard로 당신의 서버를 악성 유저로부터 보호하세요!</h1>
                    <Link to={''} target="_blank" rel="noreferrer noopener">
                        <button className="btn btn-green btn-large">봇 초대하기</button>
                    </Link>
                    <Link to={''} target="_blank" rel="noreferrer noopener">
                        <button className="btn btn-blurple btn-large">서포트 서버 바로가기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
