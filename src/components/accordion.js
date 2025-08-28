import { useState } from "react";

const Accordion = ({faq}) => {
    const [show, setShow]= useState(false)


    return ( 
        <div className="accordion">
           <h3>
            
                <span onClick={() => setShow(!show)}>{faq.question}
                    {show ?  (<i class="bi bi-chevron-compact-left"></i>) :
                   (<i class="bi bi-chevron-compact-right"></i>)}
                </span>
               
              
          </h3> 
           {show && <div className="answer">
             <p className="answer">{faq.answer}</p>
            </div>}
        </div>
     );
}
 
export default Accordion;

