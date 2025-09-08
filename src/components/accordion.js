import { useState } from "react";

const Accordion = ({faq}) => {
    const [show, setShow]= useState(false)


    return ( 
        <div className="accordion">
                <span onClick={() => setShow(!show)}>{faq.question}
                    {show ?  (<i class="bi bi-chevron-compact-left"></i>) :
                   (<i class="bi bi-chevron-compact-right"></i>)}
                </span>
        
           {show && <div className="answer">
             <p className="answer">{faq.answer}</p>
            </div>}
        </div>
     );
}
 
export default Accordion;

