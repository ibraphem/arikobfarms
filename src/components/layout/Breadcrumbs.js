import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({title, page}) => {
    return (
     <section className="page-header bg_img padding-tb">
  <div className="overlay" />
  <div className="container">
    <div className="page-header-content-area">
      <h4 className="ph-title">{title}</h4>
      <ul className="agri-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/" style={{pointerEvents: 'none' }} className="active">{page}</Link></li>
      </ul>
    </div>
  </div>
</section>

    );
};

export default Breadcrumbs;