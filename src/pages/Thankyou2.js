
import React from 'react'

function Thankyou() {
  return (
    <>
    <section className="thankyouPage">
        <div className="container">
            <div className="thankyouBox">
                <div className="box">
                    <figure><img src="/assets/images/icons/checkHd.png" alt="" /></figure>
                    <h1>THANKS Nitin, FOR Pleace Your Order.</h1>
                    <p>We Received Your Request and We will send you a response email shortly.</p>
                    <div className="flex">
                    <a href="#" className="btn bg-success border-0 mr-4"><i className="fas fa-arrow-left"></i> <span>Go Back to Home</span></a>
                    <a href="#" className="btn"><span>Check Dashboard</span> <i className="fas fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Thankyou