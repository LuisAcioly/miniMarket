import logo from '../../../assets/mini-market-logo.svg'

const Header = () => {
    return (
        <header className="w-full h-20 ps-4 flex space-between items-center gap-4">
            <img className="w-12" src={logo} alt="Mini Seller Logo" />
            <h1 className="text-3xl">Mini Market</h1>
        </header>
    );
};

export default Header;
