import logo from '/bio-icon.png';

export default function Logo(){
    return (
        <div className="logo">
                <img src={logo} alt="Blue DNA helix as Med News Logo" />
                <h1>MedNews</h1>
            </div>
    )
}