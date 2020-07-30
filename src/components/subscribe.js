import React from 'react';

const Subscribe = () => {
  // const data = useStaticQuery(graphql`

  // `);

  return (
    <section className='subscribe'>
      <div className='container'>
        <div className='subscribe-grid'>
          <div className='subscribe-card'>
            <h3>Subscribe to get all the latest News and Offers.</h3>
            <form action='' className='subscribe-form'>
              <input type='email' placeholder='Email'></input>
              <input
                type='submit'
                value='Subscribe'
                className='submit-btn'></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
