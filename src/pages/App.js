import '../App.css';
import css from '../style/App.module.css';

import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

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
                    <span style={{ fontFamily: 'Pretendard-ExtraBold' }}>99999</span>개의 서버에서 일하는 중 🐜
                    <br />
                    <br />
                </p>
                <Link to={''} target="_blank" rel="noreferrer noopener">
                    <button className="btn btn-green btn-large">봇 초대하기</button>
                </Link>
                <Link to={''} target="_blank" rel="noreferrer noopener">
                    <button className="btn btn-blurple btn-large">웹 대시보드 바로가기</button>
                </Link>
            </div>
        </div>
    );
}

export default App;
