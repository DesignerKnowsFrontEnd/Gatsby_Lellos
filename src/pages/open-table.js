import React from 'react';
import Layout from '../components/layout';

const OpenTable = () => {
  return (
    <>
      <Layout>
        <section className='breadcrumbs bg-3'>
          <div className='container'>
            <div className='breadcrumbs-flex'>
              <div className='breadcrumbs-info'>
                <h3 className='above-title'>Book Now</h3>
              </div>
            </div>
          </div>
        </section>

        <article className='article'>
          <div className='container'>
            <div className='article-title'></div>
            <div className='article-text'>
              <div id='ot-widget-container6' data-r3uid='D3bQpM88V'>
                <iframe
                  src='https://www.opentable.com/widget/reservation/canvas?rid=184452&amp;type=standard&amp;theme=tall&amp;overlay=false&amp;domain=com&amp;lang=en-US&amp;r3uid=D3bQpM88V&amp;newtab=false&amp;disablega=false&amp;ot_source=Restaurant%20website'
                  width='288'
                  height='490'
                  frameborder='0'
                  scrolling='no'
                  name='opentable-make-reservation-widget'
                  title="Online Reservations | OpenTable, Lello's Italian Restaurant and Bar"></iframe>
              </div>
              <script
                type='text/javascript'
                src='//www.opentable.com/widget/reservation/loader?rid=184452&amp;type=standard&amp;theme=tall&amp;iframe=true&amp;domain=com&amp;lang=en-US&amp;newtab=false&amp;ot_source=Restaurant%20website'></script>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default OpenTable;
