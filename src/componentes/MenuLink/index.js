import styles from './MenuLink.module.scss';
import { Link } from "react-scroll";


export default function MenuLink({ children, to}){
    return (

            <Link
                className={styles.principal}
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h2>{children}</h2>
          </Link>


    )
}