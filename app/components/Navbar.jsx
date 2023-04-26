import '../styles/styles.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav id='navbar-nav'>
            <div id='container-imageLogo'>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--8sx8IYNE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/blogreact.com/wp-content/uploads/2020/10/1_htbUdWgFQ3a94PMEvBr_hQ.png%3Fresize%3D750%252C428%26ssl%3D1" alt="" />
            </div>
            <Link href="/" className="secciones-nav">Home</Link>
            <Link href="/routes/about" className="secciones-nav">About Project</Link>
            <Link href="/routes/experience" className="secciones-nav">Experience</Link>
        </nav>
    )
}