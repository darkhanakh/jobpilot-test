import telephoneIcon from "./../../assets/telephone.svg";
import styles from "./Navigation.module.scss";

const navLink = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Find Job",
    href: "/",
  },
  {
    title: "Employers",
    href: "/",
  },
  {
    title: "Candidates",
    href: "/",
  },
  {
    title: "Pricing Plans",
    href: "/",
  },
  {
    title: "Customer Supports",
    href: "/",
  },
];

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.ul}>
      {navLink.map((link) => (
        <li key={link.title}>
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
    <div className={styles.utils}>
      <div className={styles.telephone}>
        <img src={telephoneIcon} alt="Telephone Icon" />
        <a href="tel:+1-202-555-0178">+1-202-555-0178</a>
      </div>
      <span>Language Switch Component</span>
    </div>
  </nav>
);
export default Navigation;
