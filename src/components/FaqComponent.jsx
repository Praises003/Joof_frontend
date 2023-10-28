import React from 'react'
import Faq from 'react-faq-component'

const FaqComponent = () => {
    const data = {
        title: "FAQ SECTION",
        rows: [
          {
            title: "WHAT FORMS OF PAYMENT DO YOU TAKE?",
            content: "We accept cash, check and all major credit cards. We make is super easy to make payments online with a client portal. "
          },
          {
            title: "WHEN CAN WE START SETTING UP FOR OUR EVENT?",
            content: "Your setup time starts at the time of your contracted rental time."
          },
          {
            title: "ARE TABLES AND CHAIRS PROVIDED?",
            content: "Yes, the following tables and chairs are included in your rental fee. Any additional items not listed below will have to be rented:"
          },
          {
            title: "CAN TWO EVENTS HAPPEN SIMULTANEOUSLY ON MY EVENT DAY?",
            content: "No, we will never book two events on the same day. You have exclusive rights to the venue during your event even if you are only doing a partial rental (The Reserve only or The Rustic only)"
          }]
      }

      const styles = {
         bgColor: '#f1f1f1',
        titleTextColor: "black",
        rowTitleColor: "black",
        // rowContentColor: 'grey',
         arrowColor: "blue",
    };
  return (
    <div>
        <Faq data={data} styles={styles} />
    </div>
    
  )
}

export default FaqComponent