import styles from "../styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo1.png" alt="my logo image" width={150} height={100}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;