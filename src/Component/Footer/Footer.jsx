import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
<section id={styles.text} className={styles.footer}  > 
<div className="container">
    <div className="row">
        <div className="col-md-4 p-5">
           <h3 className='mb-5'>العنوان</h3> 
           <p> المنيا 22 شارع طه حسين<br/>
          بجوار النادي الرياضي
           </p>
           
        </div>
        <div className="col-md-4 p-5">
            <h3 className='mb-5'>حول الموقع</h3>
            <div id={styles.icons} className=" d-flex justify-content-center align-items-center">
            <span className='mx-1'>
                <i className='fa fa-brands fa-facebook'></i>
                </span  >
                <span className='mx-1' >
                <i className='fa fa-brands fa-twitter'></i>
                </span>
                <span className='mx-1'>
                <i className='fa fa-brands fa-linkedin'></i>
                </span>
                <span className='mx-1'>
                <i className='fa fa-brands fa-dribbble '></i>
                </span>

                
            </div>
           
        </div>
        <div className="col-md-4 p-5">
                <h3 className='mb-5'>التصميم</h3>
                <p>صمم هذا الموقع لإستخدام المجاني<br/>
                   created by Ahmed <br/>
                  Ramadan
                </p>
                
            </div>
    </div>
    
</div>
<div className="container-fluid">
    <div className="row">
        <div id={styles.tail} className="col-md-12">
            <p>حقوق © موقعي 2022</p>
        </div>
    </div>
    </div>
      </section>
      
      
      

    </>
  )
}
