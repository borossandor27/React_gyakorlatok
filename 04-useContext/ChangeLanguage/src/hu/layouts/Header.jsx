import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Change Language Example</h1>
            <div className="flags">
                <img src="/flags/Flag_of_Hungary.png" alt="Hungarian Flag" width="50" />
                <img src="/flags/Flag_of_the_United_Kingdom.png" alt="UK Flag" width="50" />
                <img src="/flags/Flag_of_Germany.png" alt="German Flag" width="50" />
            </div>
        </header>
    );
}

export default Header;