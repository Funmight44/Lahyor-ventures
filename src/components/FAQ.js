import Accordion from "./accordion";

const FAQ = () => {
    const faqs = [
        { "id": 1,
            "question": "What products and services do you offer at Lahyor Ventures?",
            "answer": "Custom-made cakes for all events, Creative event decorations,Trendy male and female wears such as joggers sneakers, jeans, cover shoes, and more."
        },
        { "id": 2,
            "question" : "How do I place an order for a cake or decoration service?",
            "answer": "You can place your order easily by contacting us on WhatsApp at 07067325018. We’ll discuss your preferences, event details, and delivery options."
        },
        {  "id": 3,
            "question" : "Do you accept custom cake or decoration designs?",
            "answer" : "Yes! We specialize in custom orders. Just share your preferred design, theme, or inspiration, and we’ll bring it to life."
        },

        { "id": 4,
            "question": "What sizes and flavors of cakes do you offer?",
            "answer": "We offer cakes in various sizes (from small to multi-tiered) and flavors like vanilla, chocolate, red velvet, fruit cake, and more. Custom flavor combinations are also available upon request."
        },

        {  "id": 5,
            "question": "What types of decorations do you provide?",
            "answer": "We provide decorations for birthdays, weddings, baby showers, bridal showers, anniversaries, graduations, and more. We cover balloon setups, table decor, backdrop designs, centerpieces, and full venue styling."
        },

        { "id": 6,
            "question": "Can I shop your clothing items online?", 
            "answer": "Yes! You can browse our clothing collection via WhatsApp or social media. We’ll share photos, prices, and sizing info, and you can place your order directly."
        },

        { "id": 7,
            "question": "Do you offer delivery?",
            "answer": "Yes, we offer fast and reliable delivery services. Delivery charges vary depending on your location."
        },

        {  "id": 8,
            "question": "Can I visit your physical store?",
            "answer": "Yes, we have a physical location. Kindly message us on WhatsApp (07067325018) for directions and store hours."
        },

        { "id": 9,
            "question": "Do you offer discounts or promotions?",
            "answer": "Yes, we regularly run seasonal promos and bundle deals. Follow us on social media or stay in touch on WhatsApp to get updates on the latest offers."
        },

        { "id": 10,
         "question": "How can I contact Lahyor Ventures quickly?",
         "answer": "The fastest way to reach us is via WhatsApp 07067325018. We are always ready to assist you!"
        }

    ]

    return ( 
        <section className="faq">
            <h2>Questions in mind</h2>
            <div>
                {faqs.map(faq => <Accordion key={faq.id} faq={faq}/>)}
            </div>
        </section>
     );
}
 
export default FAQ;