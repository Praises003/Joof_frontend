import React from 'react'
import eventImg from "../assets/ev bg.jpg"

const VenuePolicyComponent = () => {
  return (
    <div>
        <div style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),url('${eventImg}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "45vh"}} className={` `}>
          <p className='uppercase text-4xl font-bold md:text-5xl text-white text-center pt-20 md:pt-40'>Venue Policies</p>
          
    </div>
    <div className="">
        {/**
         Reservation and Booking:

All event bookings are subject to availability and must be confirmed in advance through the venue's booking process.
A non-refundable deposit is required to secure the reservation, and the full payment must be received by [specified date].
2. Cancellation and Refund:

Cancellations made [number] days prior to the event will receive a partial refund, subject to the venue's cancellation policy.
Late cancellations or no-shows will not be eligible for a refund.
3. Event Hours:

Events must adhere to the agreed-upon start and end times.
Extensions may be granted upon request and are subject to additional charges.
4. Set-Up and Breakdown:

Event organizers are responsible for coordinating set-up and breakdown times with the venue's event coordinator.
Additional fees may apply for extended set-up or breakdown periods.
5. Catering and Outside Vendors:

Catering services and outside vendors must be approved by the venue management.
The venue may have a list of preferred vendors for catering and other services.
6. Decorations:

All decorations must be approved by the venue in advance.
No nails, screws, or adhesives that damage the property are allowed.
Open flames (candles, etc.) may require special permission and safety precautions.
7. Security and Liability:

The venue reserves the right to require security personnel based on the nature of the event.
The event organizer is responsible for any damage caused to the venue property during the event.
8. Compliance with Laws:

Events must comply with all local, state, and federal laws, including noise ordinances and capacity limits.
The venue reserves the right to shut down any event that violates these laws.
9. Insurance:

Event organizers may be required to provide proof of liability insurance.
The venue should be named as an additional insured party on the insurance policy.
10. Miscellaneous:

Smoking is prohibited inside the venue.
Pets are not allowed unless special arrangements are made.
The venue is not responsible for lost or stolen items.
By booking and hosting an event at [Venue Name], you agree to abide by these policies and any additional guidelines provided by the venue management. Failure to comply with these policies may result in additional charges, termination of the event, or future booking restrictions.

For inquiries or clarification on any of these policies, please contact [Venue Contact Information].

Thank you for choosing [Venue Name] for your event!

Feel free to modify and expand on these policies to align with the specific rules and regulations of your venue and event type.

         */}
        <p>Reservation and Booking:</p>

        <p>All event bookings are subject to availability and must be confirmed in advance through the venue's booking process.
        A non-refundable deposit is required to secure the reservation, and the full payment must be received by [specified date].</p>

        <p>Cancellation and Refund:</p>

        <p>Cancellations made [number] days prior to the event will receive a partial refund, subject to the venue's cancellation policy.
        Late cancellations or no-shows will not be eligible for a refund. </p>

        <p>Event Hours: </p>

        <p>Events must adhere to the agreed-upon start and end times. </p>

        <p>Catering and Outside Vendors:</p>

        <p>Catering services and outside vendors must be approved by the venue management.
        The venue may have a list of preferred vendors for catering and other services. </p>

        <p>Decorations:</p>

        <p>All decorations must be approved by the venue in advance.
        No nails, screws, or adhesives that damage the property are allowed.
        Open flames (candles, etc.) may require special permission and safety precautions.</p>
    </div>
    </div>
  )
}

export default VenuePolicyComponent