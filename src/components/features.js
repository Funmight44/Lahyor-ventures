const Features = () => {
    return ( 
        <section>
            <div className="features flex justify-between w-[95%] mx-auto  p-4"> 
                <div className="feature-div">
                    <i class="bi bi-currency-dollar"></i>
                    <div>
                        <h4>Money Back Guarantee</h4>
                        <p>100% refund guarantee if you are not satisfied.</p>
                    </div>
                </div>

                <div className="feature-div">
                    <i class="bi bi-truck"></i>
                    <div>
                        <h4>Free Shipping and return</h4>
                        <p>Free shipping available on orders above $99.</p>
                    </div>
                </div>

                <div className="feature-div">
                  <i class="bi bi-clock-history"></i>
                    <div>
                        <h4>24/7 Online Support</h4>
                        <p>Our team is here to assist you round the clock.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Features;