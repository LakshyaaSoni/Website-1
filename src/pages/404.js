import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../layouts/layout';
import SEO from '../components/seo';
import { setLogoUrl, setFooterVisible } from '../redux/actions';

import '../assets/styles/pages/notfound.scss';

import ServerDown from '../assets/images/server-down.png';
import logo from '../assets/images/milkish.png';

const NotFoundPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogoUrl({
      logo,
    }));
    setFooterVisible({ visible: true })(dispatch);
  });
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="notfound">
        <div className="notfound__container">
          <div className="notfound__text">
            <h1>Oops!</h1>
            <p>Dont panic, its just a file that was not found on our server. </p>
          </div>
          <img src={ServerDown} alt="Route not found" />
          <div className="notfound__404">
            <h1>404</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
