"use client";

export default function Header() {
  return (
    <header className="site__header">
      <div className="nav">
        <h1 className="logo">
          blog<span>story</span>
        </h1>
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <a href="#">home</a>
          </li>
          <li className="nav-menu__item">
            <a href="#">about</a>
          </li>
          <li className="nav-menu__item">
            <a href="#">blog</a>
          </li>
          <li className="nav-menu__item contact">
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
