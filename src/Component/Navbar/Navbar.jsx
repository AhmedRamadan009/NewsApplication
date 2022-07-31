import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../imges/صباح مصر (1).png';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
  <div className="container ">
    <img src={logo} className={styles.logo} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="home">الرئيسية</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="health">الصحة</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="bussiness">الأعمال</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="sports">الرياضة</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="sience">العلوم</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tcheno">التكنولوجيا</Link>
          
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
