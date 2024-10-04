import delivery from './../assets/ridebike.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {useState, useEffect} from 'react'
import { FaSquare } from "react-icons/fa6";

const TermsAndConditions = () => {

  return (
    <div className="flex md:px-20 p-4 md:flex-col flex-col  mx-auto my-6 md:my-0 md:items-center md:justify-center bg-">
        
<div className='flex md:text-start md:flex-col flex-col gap-2 justify-start w-full my-6'>
    <h1 className='md:text-3xl text-xl font-bold text-primary'>Ridesmash Terms of Service</h1>
    <p className='text-sm md:text-base text-gray-400'>June 1, 2024</p>
</div>


<p className=' md:text-gray-500 italic md:my-3 roboto text-justify'>
These Terms of Service constitute a legally binding agreement (the “Agreement”) between you and Ridesmash, Inc., its parents, subsidiaries, representatives, affiliates, officers and directors (collectively, “Ridesmash,” “we,” “us” or “our”) governing your use of the Ridesmash applications, websites, technology, facilities, and platform (collectively, the “Ridesmash Platform”).

</p>
<p className=' md:text-gray-500 my-3 roboto text-justify'>
PLEASE BE ADVISED: THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW CLAIMS BETWEEN YOU AND RIDESMASH CAN BE BROUGHT (SEE SECTION 17 BELOW). THESE PROVISIONS WILL, WITH LIMITED EXCEPTION, REQUIRE YOU TO: (1) WAIVE YOUR RIGHT TO A JURY TRIAL, AND (2) SUBMIT CLAIMS YOU HAVE AGAINST RIDESMASH TO BINDING AND FINAL ARBITRATION ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, GROUP OR REPRESENTATIVE ACTION OR PROCEEDING. AS A DRIVER OR DRIVER APPLICANT, YOU HAVE AN OPPORTUNITY TO OPT OUT OF ARBITRATION WITH RESPECT TO CERTAIN CLAIMS AS PROVIDED IN SECTION 17.
</p>

<p className=' md:text-gray-500 md:my-3 roboto text-justify'>
By entering into this Agreement, and/or by using or accessing the Ridesmash Platform, you expressly acknowledge that you understand this Agreement (including the dispute resolution and arbitration provisions in Section 17) and accept all its terms. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE OR ACCESS THE RIDESMASH PLATFORM OR ANY OF THE SERVICES PROVIDED THROUGH THE RIDESMASH PLATFORM. If you use the Ridesmash Platform in another country, you agree to be subject to Ridesmash’s terms of service for that country. If you are accessing or using the Ridesmash Platform to access or use Ridesmash Business services on behalf of an organization contracted with Ridesmash, and you are not accessing or using the Ridesmash Platform as a Rider or Driver, your access and use is governed by the contract between Ridesmash and your organization.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'>
When using the Ridesmash Platform, you also agree to conduct yourself in accordance with our Community Guidelines, which shall form part of this Agreement between you and Ridesmash.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
The Ridesmash Platform provides a marketplace where, among other things, persons who seek transportation to certain destinations (“Riders”) can be matched with transportation options to such destinations. One option for Riders is to request a ride from rideshare drivers who are driving to or through those destinations (“Drivers”). Drivers, Riders, and any other individuals, excluding any Excluded Individuals, using the Ridesmash Platform are collectively referred to herein as “Users,” and the driving services provided by Drivers to Riders, and other transportation related services provided by Drivers in connection with the Ridesmash Platform, shall be referred to herein as “Rideshare Services.” “Ridesmash Services” shall include any service provided by Ridesmash pursuant to the Ridesmash Platform (for clarity, Ridesmash Services does not include Rideshare Services or Third-Party Services). As a User, you authorize Ridesmash to match and/or re-match you with Drivers or Riders based on factors such as your location, the requested pickup location, the estimated time to pickup, your destination, User preferences, ride mode, driver mode, membership status, regulatory or other third-party requirements, user statistics, and platform efficiency, and to cancel an existing match based on the same or other considerations. Any decision by a User to offer or accept Rideshare Services is a decision made in such User’s sole discretion. A separate agreement is formed between Drivers and Riders when the Rider accepts the Rideshare Services offered by the Driver. As used herein, “Excluded Individuals” means any individual who is registering to use the Ridesmash Platform or whose use of the Ridesmash Platform is on behalf of an organization contracted with Ridesmash, except as a Rider or Driver.


</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
In certain markets, Riders may have the option to rent transportation modalities (e.g., bikes, scooters, cars, etc.) or be offered other services through the Ridesmash Platform. In some markets, some of these rental programs and/or other services are owned and operated by Ridesmash. In other markets, some of these rental programs and/or other services are owned or operated by third parties.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'>
In any case, your use of Ridesmash Services through the Ridesmash Platform may be subject to additional agreements between you and Ridesmash as applicable to the particular service in the particular market (“Supplemental Agreements”). Please review any applicable Supplemental Agreements carefully. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF A SUPPLEMENTAL AGREEMENT, YOU MAY NOT RENT OR USE RIDESMASH SERVICES IN SUCH MARKET. In the event of any conflict between this Agreement and the terms and conditions of any Supplemental Agreement, the terms of this Agreement shall control, unless such Supplemental Agreement specifically states otherwise.
</p>


<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Modification to the Agreement</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash reserves the right to modify the terms and conditions of this Agreement, and such modifications shall be binding on you only upon your acceptance of the modified Agreement. Ridesmash reserves the right to modify any information on pages referenced in the hyperlinks from this Agreement from time to time, and such modifications shall become effective upon posting. Continued use of the Ridesmash Platform after any such changes shall constitute your acceptance of such changes. Unless material changes are made to the arbitration provisions herein, you agree that modification of this Agreement does not create a renewed opportunity to opt out of arbitration (if applicable).
</p>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Eligibility</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
The Ridesmash Platform may only be used by individuals who have the right and authority to enter into this Agreement and are fully able and competent to satisfy the terms, conditions, and obligations herein. The Ridesmash Platform is not available to Users who have had their User account temporarily or permanently deactivated. You may not allow other persons to use your User account, you agree that you are the sole authorized user of your User account, and you may not use your User account on behalf of any third party, except as otherwise expressly permitted by Ridesmash. To use the Ridesmash Platform, each User shall create a User account. Each person may only create one User account, and Ridesmash reserves the right to deactivate any additional or duplicate accounts. Your participation in certain Ridesmash programs and use of certain Ridesmash services may be subject to additional eligibility requirements as determined by Ridesmash.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
By becoming a User, you represent and warrant that you are at least 18 years old. Notwithstanding the foregoing, if you are the parent or legal guardian of a 16 or 17-year old minor you may create a User account for such minor to use the Ridesmash Platform subject to the following requirements and restrictions: (a) you ensure that the minor’s use of the Ridesmash Platform is limited solely to accessing and using Ridesmash Services and/or Third-Party Services where expressly permitted under the Supplemental Agreement applicable to such Ridesmash Services and/or Third-Party Services, (b) you determine that the Ridesmash Services and/or Third-Party Services are suitable for the minor, (c) you ensure that the minor’s use of the Ridesmash Platform and applicable Ridesmash Services and/or Third-Party Services is done in compliance and acknowledgement of all applicable safety instructions and warnings in this Agreement, any applicable Supplemental Agreements, and the Ridesmash Platform, (d) you ensure that the minor does not request or accept any Rideshare Services unless accompanied by you or an authorized guardian, and (e) you explain the terms of this Agreement to the minor. For clarity, no unaccompanied User under 18 years old may ride in an autonomous vehicle.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
By creating a User account for such minor, you hereby give permission and consent to the Agreement on the minor’s behalf, you expressly guarantee the minor’s acceptance, and your own acceptance, of the terms of this Agreement, and you shall assume any and all responsibility and liability for the minor’s use of the Ridesmash Platform as provided by the terms of this Agreement and any applicable Supplemental Agreements. You will be responsible for any breach of the above representations, warranties and/or this Agreement, and/or any attempt of the minor to disaffirm this Agreement. Furthermore, you hereby represent that you are fully authorized to execute this Agreement on behalf of yourself and all other parents or legal guardians of the minor rider.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Charges</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
As a User, you understand that request or use of Rideshare Services, Ridesmash Services, or Third-Party Services may result in charges (“Charges”) to you and/or to an organization, if applicable. Charges to Riders and/or organizations, if applicable, for Rideshare Services include Fares (defined below) and other applicable fees, tolls, surcharges, and taxes, including as set forth on your market’s Ridesmash Cities page (“Ridesmash Cities Page”), plus any tips to the Driver that you elect to pay. Ridesmash has the authority and reserves the right to determine and modify pricing by posting applicable pricing terms to your market’s Ridesmash Cities Page or quoting you a price for a specific ride at the time you make a request. Pricing may vary based on the type of service you request (e.g., shared, economy, extra seats, luxury) as described on your market’s Ridesmash Cities Page or within the Ridesmash Platform. You are responsible for reviewing the applicable Ridesmash Cities Page or price quote within the Ridesmash Platform and shall be responsible for all Charges incurred under your User account regardless of your awareness of such Charges or the amounts thereof.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Rideshare Service Fares (“Fares”). There are two types of Fares, Estimated and variable.</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold '>Estimated Fares.</span> When you make a ride request using the Ridesmash Platform, Ridesmash will quote you a Fare at the time of your request. The estimated is subject to change until the ride request is confirmed. If your final destination is not the same as the destination in your ride request, or the time or distance of your ride differs substantially from your quoted fare, or if you attempt to abuse the Ridesmash Platform, we may, at Ridesmash’s sole discretion and determination, cancel the fare quote and charge you a variable fare as described below. Ridesmash does not guarantee that the quoted fare price will be equal to a variable fare for the same ride. Quoted fares may include the Rideshare Service Fees and Other Charges below, as applicable.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold '>Variable Fares.</span>
 Variable fares consist of a base charge and incremental charges based on the time and distance of your ride. For particularly short rides, minimum fares may apply. Please note that we use GPS data from your Driver’s phone to calculate the distance traveled on your ride. We cannot guarantee the availability or accuracy of GPS data. If we lose signal, we will calculate time and distance using available data from your ride. In addition to the variable fare, the total cost of your ride may include the Rideshare Service Fees and Other Charges below, as applicable.</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Rideshare Service Fees and Other Charges.</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto'><span className='font-bold '>Service Fee.</span> Ridesmash may charge a “Service Fee” for each ride, as set forth on the applicable Ridesmash Cities Page.</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold '>Prime Time.</span> At certain times, including times of high demand for Rideshare Services (“Prime Time”), you acknowledge that Charges may increase substantially. For quoted fares, we may factor in Prime Time increases into the quoted price of the ride.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold '>Priority Pickup and Wait & Save.</span>  In some cases, you may be able to select an expected pick up that is faster or slower than standard for a higher or lower Fare, respectively.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold '>Cancellation Fee.</span> After requesting a ride, you may cancel it through the Ridesmash Platform, but note that in certain cases a cancellation fee may apply. Ridesmash may also charge a fee if you fail to show up after requesting a ride. Please check out our Help Center to learn more about Ridesmash’s rider cancellation policy.
Damage Fee. If a Driver reports that you have materially damaged the Driver's vehicle, you agree to pay a “Damage Fee” of up to $250 depending on the extent of the damage (as determined by Ridesmash in its sole discretion), towards vehicle repair or cleaning. Ridesmash reserves the right (but is not obligated) to verify or otherwise require documentation of damages prior to processing the Damage Fee.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'><span className='font-bold '>Abuse Fee.</span> 
If we receive a credible report that you have misused or abused the Ridesmash Platform, you agree to pay an “Abuse Fee” of up to $250 as determined by Ridesmash in its sole discretion. Ridesmash reserves the right (but is not obligated) to verify or otherwise require documentation of abuse prior to processing the Abuse Fee.
Tolls. In some instances, tolls, toll estimates, or return tolls may apply to your ride. Please see our Help Center and your market’s Ridesmash Cities Page for more information about toll charges. We do not guarantee that the amount charged by Ridesmash will match the toll charged to the Driver, if any.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'><span className='font-bold '>Other Charges.</span>
 Other fees and surcharges may apply to your ride, including, but not limited to: actual or anticipated airport fees, state fees, local fees, event fees, fuel surcharges, wait time fees, or distance surcharges as determined by Ridesmash or its marketing partners. In addition, where required by law Ridesmash will collect applicable taxes. See your market’s Ridesmash Cities Page for information on other Charges that may apply to your ride.</p>
 <p className=' text-gray-500 my-3 roboto text-justify'>
Tips. Following a ride, you may have the opportunity to elect to tip your Driver in cash or through the Ridesmash Platform. You may also elect to set a default tip amount or percentage through the Ridesmash Platform. Any tips will be provided entirely to the applicable Driver.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'><span className='font-bold '>Charges Generally.</span>
Facilitation of Charges. All Charges are facilitated through a third-party payment processor (flutterwaves, PayPal, Inc., etc.). Ridesmash may replace its third-party payment processor without notice to you. With the exception of tips and the purchase of Ridesmash Cash, cash payments are strictly prohibited unless expressly permitted by Ridesmash. Your payment of Charges to Ridesmash satisfies your payment obligation for your use of the Ridesmash Platform, Ridesmash Services, Third-Party Services, and Rideshare Services. Certain Charges may be collectively billed as a single purchase transaction to your selected payment method based on the payment frequency indicated in your settings. If your primary payment method expires, is invalid, or if Charges to your primary payment method are unable to be processed for whatever reason, then you agree that Ridesmash may charge your other available payment methods in the Ridesmash Platform. If you don't recognize a transaction, then check your ride receipts and payment history.</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>No Refunds.</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
All Charges are non-refundable except to the extent required by law. This no-refund policy shall apply at all times regardless of your decision to terminate usage of the Ridesmash Platform, any disruption to the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services, or any other reason whatsoever.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Coupons.</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
 You may receive coupons, credits, discounts, or other promotions (collectively, “Coupons”) that you can apply toward payment of certain Charges. Coupons are valid only for use on the Ridesmash Platform, and are not transferable or redeemable for cash except as required by law. Coupons cannot be combined unless expressly provided otherwise, and if the cost of your Charges exceeds the applicable Coupon value, we may charge your payment method on file for the Charges in excess of the Coupon amount. With respect to Fares, Ridesmash may deduct the amount attributable to the Service Fee, Tolls, or Other Charges before application of the Coupon. Additional restrictions on Coupons may apply as communicated to you in a relevant promotion or by clicking on the relevant Coupon within the Rewards section of the Ridesmash Platform.
 </p>
 <div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Supplemental Charges.</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Charges related to Ridesmash Services (including the rental of bikes and scooters) may be further detailed in the applicable Supplemental Agreement.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Third-Party Charges.</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
 If you choose to purchase Third-Party Services (described further in Section 20) through the Ridesmash Platform, you authorize your payment method on file to be charged according to the pricing terms set by Ridesmash or the third-party provider, or as otherwise provided in the terms of the purchased services.
Payment Card Authorization. Upon addition of a new payment method or each request for Ridesmash Services, Rideshare Services, or Third-Party Services, Ridesmash may seek authorization of your selected payment method to verify the payment method, ensure the Charges will be covered, and protect against unauthorized behavior. The authorization is not a charge, however, it may reduce your available credit by the authorization amount until your bank’s next processing cycle. Should the amount of our authorization exceed the total funds on deposit in your account, you may be subject to overdraft of NSF charges by the bank issuing your debit or prepaid card. Ridesmash is not responsible for these charges and is unable to assist you in recovering them from your issuing bank. Check out our Help Center to learn more about our use of pre-authorization holds.
For clarity, Ridesmash does not charge a fee for Users to access the Ridesmash Platform, but retains the right to charge Users and/or organizations, if applicable, a fee or any other Charge for accessing or using Ridesmash Services, Rideshare Services, or Third-Party Services made available through the Ridesmash Platform.
</p>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Driver Payments</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
If you are a Driver, you will receive payment for your provision of Rideshare Services pursuant to the terms of the Driver Addendum, which shall form part of this Agreement between you and Ridesmash.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Ridesmash Communications</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
By entering into this Agreement or using the Ridesmash Platform, you agree to receive communications from us, our affiliates, or our third-party partners, at any of the phone numbers provided to Ridesmash by you or on your behalf, and also via email, text message, calls, and push notifications. You agree that texts, calls or prerecorded messages may be generated by automatic telephone dialing systems. Communications from Ridesmash, its affiliated companies and/or Drivers may include but are not limited to: operational communications concerning your User account or use of the Ridesmash Platform, Ridesmash Services, Third-Party Services or Rideshare Services, updates concerning new and existing features on the Ridesmash Platform, communications concerning marketing or promotions run by us or our third-party partners, and news concerning Ridesmash and industry developments. If you change or deactivate the phone number you provided to Ridesmash, you agree to update your User account information to help prevent us from inadvertently communicating with anyone who acquires your old number. Standard text messaging charges applied by your cell phone carrier will apply to text messages we send.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
IF YOU WISH TO OPT OUT OF PROMOTIONAL EMAILS, YOU CAN UNSUBSCRIBE FROM OUR PROMOTIONAL EMAIL LIST BY FOLLOWING THE UNSUBSCRIBE OPTIONS IN THE PROMOTIONAL EMAIL ITSELF. IF YOU WISH TO OPT OUT OF PROMOTIONAL CALLS OR TEXTS, YOU MAY TEXT “END” TO 46080 FROM THE MOBILE DEVICE RECEIVING THE MESSAGES. YOU ACKNOWLEDGE THAT YOU ARE NOT REQUIRED TO CONSENT TO RECEIVE PROMOTIONAL TEXTS OR CALLS AS A CONDITION OF USING THE RIDESMASH PLATFORM OR RELATED SERVICES. IF YOU WISH TO OPT OUT OF ALL TEXTS OR CALLS FROM RIDESMASH (INCLUDING OPERATIONAL OR TRANSACTIONAL TEXTS OR CALLS), YOU CAN TEXT THE WORD “STOPALL” TO 46080 FROM THE MOBILE DEVICE RECEIVING THE MESSAGES; HOWEVER, YOU ACKNOWLEDGE THAT OPTING OUT OF RECEIVING ALL TEXTS MAY IMPACT YOUR USE OF THE RIDESMASH PLATFORM OR RELATED SERVICES. WHEN YOU OPT OUT TEXTS OR CALLS, YOU MAY RECEIVE A ONE-TIME OPT-OUT CONFIRMATION TEXT MESSAGE. NO FURTHER MESSAGES WILL BE SENT TO YOUR MOBILE DEVICE, UNLESS INITIATED BY YOU. FOR COMMUNICATION SERVICE SUPPORT OR ASSISTANCE, PLEASE VISIT OUR HELP CENTER.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Your Information</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Your Information is any information you provide, publish or post, and any information provided on your behalf, to or through the Ridesmash Platform (including any profile information you provide) or send to other Users (including via in-application feedback, any email feature, or through any Ridesmash-related Facebook, Twitter or other social media posting) (your “Information”). You consent to us using your Information to create a User account that will allow you to use the Ridesmash Platform, Ridesmash Services, and participate in the Rideshare Services. Our collection and use of personal information in connection with the Ridesmash Platform, Ridesmash Services, and Rideshare Services is as provided in Ridesmash’s Privacy Policy. You are solely responsible for your Information and your interactions with other members of the public, and we act only as a passive conduit for your online posting of your Information. You agree to provide and maintain accurate, current and complete Information and that we and other members of the public may rely on your Information as accurate, current and complete. To enable Ridesmash to use your Information for the purposes described in the Privacy Policy and this Agreement, or to otherwise improve the Ridesmash Platform, Ridesmash Services, or Rideshare Services you grant to us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, transferable, sub-licensable (through multiple tiers) right and license to exercise the copyright, publicity, and database rights you have in your Information, and to use, copy, perform, display and distribute such Information to prepare derivative works, or incorporate into other works, such Information, in any media now known or not currently known. Ridesmash does not assert any ownership over your Information; rather, as between you and Ridesmash, subject to the rights granted to us in this Agreement, you retain full ownership of all of your Information and any intellectual property rights or other proprietary rights associated with your Information.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Promotions, Referrals, and Loyalty Programs</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash, at its sole discretion, may make available promotions, referral programs and loyalty programs with different features to any Users or prospective Users. Ridesmash reserves the right to withhold or deduct credits or benefits obtained through a promotion or program in the event that Ridesmash determines or believes that the redemption of the promotion or receipt of the credit or benefit was in error, fraudulent, illegal, or in violation of the applicable promotion or program terms or this Agreement. Ridesmash reserves the right to terminate, discontinue, modify or cancel any promotions or programs at any time and in its sole discretion without notice to you.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash’s referral program may provide you with incentives to refer your friends and family to become new Users of the Ridesmash Platform in your country (the “Referral Program”). Your participation in the Referral Program is subject to this Agreement and the additional Referral Program rules.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Restricted Activities</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
With respect to your use of the Ridesmash Platform, Ridesmash Services, Third-Party Services, and your participation in the Rideshare Services, you agree that you will not:</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>	impersonate any person or entity.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>stalk, threaten, or otherwise harass any person, or carry any weapons.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3'>•</span>violate any law, statute, rule, permit, ordinance or regulation.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3'>•</span>interfere with or disrupt the Ridesmash Platform or the servers or networks connected to the Ridesmash Platform.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>post Information or interact on the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services in a manner which is fraudulent, libelous, abusive, obscene, profane, sexually oriented, harassing, or illegal.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>use the Ridesmash Platform in any way that infringes any third party’s rights, including: intellectual property rights, copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>post, email or otherwise transmit any malicious code, files or programs designed to interrupt, damage, destroy or limit the functionality of the Ridesmash Platform or any computer software or hardware or telecommunications equipment or surreptitiously intercept or expropriate any system, data or personal information.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the Ridesmash Platform.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>“frame” or “mirror” any part of the Ridesmash Platform, without our prior written authorization or use meta tags or code or other devices containing any reference to us in order to direct any person to any other website for any purpose.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>modify, adapt, translate, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Ridesmash Platform.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>Rent, lease, lend, sell, redistribute, license or sublicense the Ridesmash Platform or access to any portion of the Ridesmash Platform.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, scrape, “data mine”, copy, access, acquire information, generate impressions or clicks, input or store information, search, monitor any portion of the Ridesmash Platform, or in any way reproduce or circumvent the navigational structure or presentation of the Ridesmash Platform or its contents.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>link directly or indirectly to any other websites;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>transfer, lend, or sell your User account, password and/or identification, or any other User’s Information to any other party;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>use a false email address or other identifying information, impersonate or misrepresent any person or entity, or your affiliation with any person or entity, or otherwise omit, misrepresent, or mislead as to the origin or source of any entity accessing the Ridesmash Platform;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>discriminate against or harass anyone on the basis of race, national origin, religion, gender, gender identity or expression, physical or mental disability, medical condition, marital status, age or sexual orientation;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>violate any of the Referral Program rules if you participate in the Referral Program;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>commercialize the Rideshare Services, Third-Party Services, or our Ridesmash Services without an agreement directly with Ridesmash;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>misuse or abuse the Rideshare Services, Third-Party Services, or our Ridesmash Services in violation of eligibility requirements as determined by Ridesmash;
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>violate Ridesmash’s Policy Against Sexual Assault, Misconduct, and Harassment; circumvent any measures 
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold mr-3 '>•</span>implemented by Ridesmash to prevent or address violations of this Agreement; or cause any third party to engage in the restricted activities above.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
Should you suspect that any unauthorized party may be using your User account or you suspect any other breach of security or violation of this Agreement, you agree to notify us immediately.
</p>
</div>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Driver Representations, Warranties and Agreements</p>
</div>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto'>Driver Representations, Warranties and Agreements</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
By providing Rideshare Services as a Driver on the Ridesmash Platform, you represent, warrant, and agree that:
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
You possess a valid driver’s license and are authorized and medically fit to operate a motor vehicle and have all appropriate licenses, approvals and authority to provide transportation to Riders in all jurisdictions in which you provide Rideshare Services.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You own, or have the legal right to operate, the vehicle you use when providing Rideshare Services; such vehicle is in good operating condition and meets the industry safety standards and all applicable statutory and state department of motor vehicle requirements for a vehicle of its kind; and any and all applicable safety recalls have been or will be remedied per manufacturer instructions.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You will not engage in reckless behavior while driving or otherwise providing Rideshare Services, drive unsafely, operate a vehicle that is unsafe to drive, permit an unauthorized third party to accompany you in the vehicle while providing Rideshare Services, provide Rideshare Services as a Driver while under the influence of alcohol or drugs, or take action that harms or threatens to harm the safety of the Ridesmash community or third parties.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You will only provide Rideshare Services using the vehicle that has been reported to, and approved by Ridesmash, and you will not transport more passengers than can securely be seated in such vehicle (and no more than seven (7) passengers in any instance).
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You will not, while providing the Rideshare Services, operate as a public or common carrier or taxi service, accept street hails, charge for rides (except as expressly provided in this Agreement), demand that a rider pay in cash, or use a credit card reader, such as a Square Reader, to accept payment or engage in any other activity in a manner that is inconsistent with your obligations under this Agreement.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You will not attempt to defraud Ridesmash or Riders on the Ridesmash Platform or in connection with your provision of Rideshare Services. If we suspect that you have engaged in fraudulent activity we may withhold applicable Fares or other payments for the ride(s) in question and take any other action against you available under the law.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You will not discriminate against Riders with disabilities and agree to review Ridesmash’s Anti-Discrimination Policies. You will make reasonable accommodations as required by law and our Service Animal Policy and Wheelchair Policy for Riders who travel with their service animals or who use wheelchairs (or other mobility devices) that can be folded for safe and secure storage in the car’s trunk or backseat.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You agree that we may obtain information about you, including your criminal and driving records, and you agree to provide any further necessary authorizations to facilitate our access to such records during the term of the Agreement.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You have a valid policy of liability insurance (in coverage amounts consistent with all applicable legal requirements) that names or schedules you for the operation of the vehicle you use to provide Rideshare Services, and you agree to provide proof of such insurance and that information regarding such insurance may be released to Ridesmash upon Ridesmash’s reasonable request.
</p>
<p className=' text-gray-500 my-3 roboto'>
You will pay all applicable federal, state and local taxes based on your provision of Rideshare Services and any payments received by you.
</p>
<p className=' text-gray-500 my-3 roboto'>
You will comply with Ridesmash’s reasonable requests to provide information in connection with Rider complaints, law enforcement requests, or any other incident.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Intellectual Property</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
All intellectual property rights in and to the Ridesmash Platform shall be owned by Ridesmash absolutely and in their entirety. These rights include database rights, inventions and patentable subject-matter, patents, copyright, design rights (whether registered or unregistered), trademarks (whether registered or unregistered) and other similar rights wherever existing in the world together with the right to apply for protection of the same. All other trademarks, logos, service marks, company or product names set forth in the Ridesmash Platform are the property of their respective owners. You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information (“Submissions”) provided by you to us are non-confidential and shall become the sole property of Ridesmash. Ridesmash shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you. Except for the explicit license grants hereunder, nothing in this Agreement shall be construed to transfer ownership of or grant a license under any intellectual property rights.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
<span className='font-bold'>RIDESMASH</span> and other Ridesmash logos, designs, graphics, icons, scripts and service names are registered trademarks, trademarks or trade dress of Ridesmash in the United States and/or other countries (collectively, the “Ridesmash Marks”). If you provide Rideshare Services as a Driver, Ridesmash grants to you, during the term of this Agreement, and subject to your compliance with the terms and conditions of this Agreement, a limited, revocable, non-exclusive license to display and use the Ridesmash Marks solely on the Ridesmash stickers/decals, and any other Ridesmash-branded items provided by Ridesmash directly to you in connection with providing the Rideshare Services (“License”). The License is non-transferable and non-assignable, and you shall not grant to any third party any right, permission, license or sublicense with respect to any of the rights granted hereunder without Ridesmash’s prior written permission, which it may withhold in its sole discretion. The Ridesmash logo (or any Ridesmash Marks) may not be used in any manner that is likely to cause confusion, including but not limited to: use of a Ridesmash Mark in a domain name or Ridesmash referral code, or use of a Ridesmash Mark as a social media handle or name, avatar, profile photo, icon, favicon, or banner. You may identify yourself as a Driver on the Ridesmash Platform, but may not misidentify yourself as Ridesmash, an employee of Ridesmash, or a representative or agent of Ridesmash.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You acknowledge that Ridesmash is the owner and licensor of the Ridesmash Marks, including all goodwill associated therewith, and that your use of the Ridesmash logo (or any Ridesmash Marks) will confer no interest in or ownership of the Ridesmash Marks in you but rather inures to the benefit of Ridesmash. You agree to use the Ridesmash logo strictly in accordance with Ridesmash’s Brand Guidelines, as may be provided to you and revised from time to time, and to immediately cease any use that Ridesmash determines to be nonconforming or otherwise unacceptable.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You agree that you will not: (1) create any materials that use the Ridesmash Marks or any derivatives of the Ridesmash Marks as a trademark, service mark, trade name or trade dress, other than as expressly approved by Ridesmash in writing; (2) use the Ridesmash Marks in any way that tends to impair their validity as proprietary trademarks, service marks, trade names or trade dress, or use the Ridesmash Marks other than in accordance with the terms, conditions and restrictions herein; (3) take any other action that would jeopardize or impair Ridesmash’s rights as owner of the Ridesmash Marks or the legality and/or enforceability of the Ridesmash Marks, including, challenging or opposing Ridesmash’s ownership in the Ridesmash Marks; (4) apply for trademark registration or renewal of trademark registration of any of the Ridesmash Marks, any derivative of the Ridesmash Marks, any combination of the Ridesmash Marks and any other name, or any trademark, service mark, trade name, symbol or word which is similar to the Ridesmash Marks; (5) use the Ridesmash Marks on or in connection with any product, service or activity that is in violation of any law, statute, government regulation or standard.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
You agree you will not rent, lease, lend, sell, or otherwise redistribute the Ridesmash driver amp, or manufacture, produce, print, sell, distribute, purchase, or display counterfeit/inauthentic Ridesmash driver amps or other Ridesmash Marks or (including but not limited to signage, stickers, apparel, or decals) from any source other than directly from Ridesmash.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Violation of any provision of this License may result in immediate termination of the License, in Ridesmash’s sole discretion, a takedown request sent to the appropriate ISP, or social media platform, and/or a Uniform Domain-Name Dispute-Resolution Policy Proceeding (or equivalent proceeding). If you create any materials (physical or digital) bearing the Ridesmash Marks (in violation of this Agreement or otherwise), you agree that upon their creation Ridesmash exclusively owns all right, title and interest in and to such materials, including any modifications to the Ridesmash Marks or derivative works based on the Ridesmash Marks or Ridesmash copyrights. You further agree to assign any interest or right you may have in such materials to Ridesmash, and to provide information and execute any documents as reasonably requested by Ridesmash to enable Ridesmash to formalize such assignment.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash respects the intellectual property of others, and expects Users to do the same. If you believe, in good faith, that any materials on the Ridesmash Platform infringe upon your copyrights, please view our Copyright Policy for information on how to make a copyright complaint.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto font-bold text-xl'>Disclaimers</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
The following disclaimers are made on behalf of Ridesmash, our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, and shareholders.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash does not provide transportation services, and Ridesmash is not a transportation carrier. Ridesmash is not a common carrier or public carrier. It is up to the Driver to decide whether or not to offer a ride to a Rider contacted through the Ridesmash Platform, and it is up to the Rider to decide whether or not to accept a ride from any Driver contacted through the Ridesmash Platform. We cannot ensure that a Driver or Rider will complete an arranged transportation service. We have no control over the quality or safety of the transportation that occurs as a result of the Rideshare Services. Any safety-related feature, process, policy, standard, or other effort undertaken by Ridesmash is not an indication of any employment or agency relationship with any User.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
The Ridesmash Platform is provided on an “as is” basis and without any warranty or condition, express, implied or statutory. We do not guarantee and do not promise any specific results from use of the Ridesmash Platform, Ridesmash Services, Third-Party Services, and/or the Rideshare Services, including the ability to provide or receive Rideshare Services at any given location or time. Ridesmash reserves the right, for example, to limit or eliminate access to the Ridesmash Platform for Rideshare Services, Third-Party Services, and/or Ridesmash Services in specific geographic areas and/or at specific times based on commercial viability, public health concerns, or changes in law. To the fullest extent permitted by law, we specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement. Some states do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
We do not warrant that your use of the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services will be accurate, complete, reliable, current, secure, uninterrupted, always available, or error-free, or will meet your requirements, that any defects in the Ridesmash Platform will be corrected, or that the Ridesmash Platform is free of viruses or other harmful components. We disclaim liability for, and no warranty is made with respect to, connectivity, availability, accuracy, completeness, and reliability of the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services, including with respect to mapping, navigation, estimated times of arrival, and routing services. You are responsible at all times for your conduct and the consequences of your conduct while using the Ridesmash Platform.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
We cannot guarantee that each Rider or Driver is who he or she claims to be. Please use common sense when using the Ridesmash Platform, Ridesmash Services, Third-Party Services, and Rideshare Services, including looking at the photos of the Driver or Rider you have matched with to make sure it is the same individual you see in person. Please note that there are also risks of dealing with underage persons or people acting under false pretense, and we do not accept responsibility or liability for any content, communication or other use or access of the Ridesmash Platform by persons under the age of 18 in violation of this Agreement. We encourage you to communicate directly with each potential Driver or Rider prior to engaging in an arranged transportation service.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash is not responsible for the conduct, whether online or offline, of any User of the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services. You are solely responsible for your interactions with other Users. We do not procure insurance for, nor are we responsible for, personal belongings left in the car by Drivers or Riders. By using the Ridesmash Platform, Ridesmash Services, Third-Party Services, and participating in the Rideshare Services, you agree to accept such risks and agree that Ridesmash is not responsible for the acts or omissions of Users on the Ridesmash Platform, Ridesmash Services, Third-Party Services, or participating in the Rideshare Services.
</p>
<div className='flex w-full justify-start'><p className=' text-gray-500 my-3 roboto text-justify'>
You are responsible for the use of your User account and Ridesmash expressly disclaims any liability arising from the unauthorized use of your User account.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
    
It is possible for others to obtain information about you that you provide, publish or post to or through the Ridesmash Platform (including any profile information you provide), send to other Users, or share during the Rideshare Services, and to use such information to harass or harm you. We are not responsible for the use of any personal information that you disclose to other Users on the Ridesmash Platform or through the Rideshare Services, Ridesmash Services, or Third-Party Services. Please carefully select the type of information that you post on the Ridesmash Platform or through the Rideshare Services, Ridesmash Services, or Third-Party Services or release to others. We disclaim all liability, regardless of the form of action, for the acts or omissions of other Users (including unauthorized users, or “hackers”).
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Opinions, advice, statements, offers, or other information or content concerning Ridesmash or made available through the Ridesmash Platform, but not directly by us, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. Under no circumstances will we be responsible for any loss or damage resulting from your reliance on information or other content posted by third parties, whether on the Ridesmash Platform or otherwise. We reserve the right, but we have no obligation, to monitor the materials posted on the Ridesmash Platform and remove any such material that in our sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, illegal, or that might violate the rights, harm, or threaten the safety of Users or others.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Location data provided by the Ridesmash Platform is for basic location purposes only and is not intended to be relied upon in situations where precise location information is needed or where erroneous, inaccurate or incomplete location data may lead to death, personal injury, property or environmental damage. Neither Ridesmash, nor any of its content providers, guarantees the availability, accuracy, completeness, reliability, or timeliness of location data tracked or displayed by the Ridesmash Platform. Any of your Information, including geolocational data, you upload, provide, or post on the Ridesmash Platform may be accessible to Ridesmash and certain Users of the Ridesmash Platform.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash advises you to use the Ridesmash Platform with a data plan with unlimited or very high data usage limits, and Ridesmash shall not be responsible or liable for any fees, costs, or overage charges associated with any data plan you use to access the Ridesmash Platform.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
This paragraph applies to any version of the Ridesmash Platform that you acquire from the Apple App Store. This Agreement is entered into between you and Ridesmash. Apple, Inc. (“Apple”) is not a party to this Agreement and shall have no obligations with respect to the Ridesmash Platform. Ridesmash, not Apple, is solely responsible for the Ridesmash Platform and the content thereof as set forth hereunder. However, Apple and Apple’s subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple shall have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary thereof. This Agreement incorporates by reference Apple’s Licensed Application End User License Agreement, for purposes of which, you are “the end-user.” In the event of a conflict in the terms of the Licensed Application End User License Agreement and this Agreement, the terms of this Agreement shall control.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
As a Driver, you may be able to use "Ridesmash Nav built by Google" while providing Rideshare Services on the Ridesmash Platform. Riders and Drivers may also use Google Maps while using the Ridesmash Platform. In either case, you agree that Google may collect your location data when the Ridesmash Platform is running in order to provide and improve Google's services, that such data may also be shared with Ridesmash in order to improve its operations, and that Google's terms and privacy policy will apply to this usage.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash shall not be in breach of this Agreement nor liable for failure or delay in performing obligations under this Agreement if such failure or delay results from events, circumstances or causes beyond its reasonable control including (without limitation) natural disasters or acts of God; labor disputes or stoppages; war; government action; epidemic or pandemic; chemical or biological contamination; strikes; riots; acts of domestic or international terrorism; quarantines; national or regional emergencies; or any other cause, whether similar in kind to the foregoing or otherwise, beyond the party’s reasonable control. All service dates under this Agreement affected by force majeure shall be tolled for the duration of such force majeure. The parties hereby agree, when feasible, not to cancel but reschedule the pertinent obligations as soon as practicable after the force majeure condition ceases to exist.
</p>

<div className='flex w-full justify-start'><p className=' text-gray-500 my-3 roboto font-bold text-justify'>
Indemnity
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
You will indemnify and hold harmless and, at Ridesmash’s election, defend Ridesmash including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders (collectively, the “Indemnified Parties”) from and against any claims, actions, suits, losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of your use of the Ridesmash Platform, Ridesmash Services, Third-Party Services, and participation in the Rideshare Services, including: (1) your breach of this Agreement or the documents it incorporates by reference; (2) your violation of any law or the rights of a third party, including, Drivers, Riders, other motorists, and pedestrians, as a result of your own interaction with such third party; (3) any allegation that any materials or Information that you submit to us or transmit through the Ridesmash Platform or to us infringes, misappropriates, or otherwise violates the copyright, trademark, trade secret or other intellectual property or other rights of any third party; (4) your ownership, use or operation of a motor vehicle or passenger vehicle, including your provision of Rideshare Services as a Driver; and/or (5) any other activities in connection with the Ridesmash Platform, Ridesmash Services, Third-Party Services, or Rideshare Services. This indemnity shall be applicable without regard to the negligence of any party, including any indemnified person. You will not, without Ridesmash’s prior written consent, agree to any settlement on behalf of any Indemnified Party which includes either the obligation to pay any monetary amounts, or any admissions of liability, whether civil or criminal, on the part of any Indemnified Party.
</p>
<div className='flex w-full justify-start'><p className=' text-gray-500 my-3 roboto font-bold text-justify'>
Limitation of Liability
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
IN NO EVENT WILL RIDESMASH, INCLUDING OUR AFFILIATES, SUBSIDIARIES, PARENTS, SUCCESSORS AND ASSIGNS, AND EACH OF OUR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS (COLLECTIVELY “RIDESMASH” FOR PURPOSES OF THIS SECTION), BE LIABLE TO YOU FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING DAMAGES FOR DELETION, CORRUPTION, LOSS OF DATA, LOSS OF PROGRAMS, FAILURE TO STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED OR TRANSMITTED BY THE RIDESMASH PLATFORM, SERVICE INTERRUPTIONS, OR FOR THE COST OF PROCUREMENT OF SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION WITH THE RIDESMASH PLATFORM, RIDESMASH SERVICES, THE RIDESHARE SERVICES, OR THIS AGREEMENT, HOWEVER ARISING INCLUDING NEGLIGENCE, EVEN IF WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE RIDESMASH PLATFORM MAY BE USED BY YOU TO REQUEST AND SCHEDULE TRANSPORTATION, GOODS, OR THIRD-PARTY SERVICES WITH THIRD-PARTY PROVIDERS, BUT YOU AGREE THAT RIDESMASH HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY TRANSPORTATION, GOODS, OR THIRD-PARTY SERVICES SET FORTH IN THIS AGREEMENT. FOR CLARITY AND WITHOUT LIMITING THE FOREGOING, RIDESMASH HAS NO RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR RELIANCE ON TRANSPORTATION, GOODS, OR THIRD-PARTY SERVICES SET FORTH IN THIS AGREEMENT OR ANY TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY THIRD-PARTY PROVIDER. CERTAIN JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
</p>
<div className='flex w-full justify-start'><p className=' text-gray-500 my-3 roboto font-bold text-justify'>
Term and Termination
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
This Agreement is effective upon your acceptance of this Agreement. This Agreement may be terminated: (a) by User, without cause, upon seven (7) days’ prior written notice to Ridesmash; or (b) by either Party immediately, without notice, upon the other Party’s material breach of this Agreement, including but not limited to any breach of Section 9 or breach of Section 10(a)-(i) of this Agreement. In addition, Ridesmash may terminate this Agreement or deactivate your User account immediately in the event: (1) you are no longer eligible to qualify as a User; (2) you no longer qualify to provide Rideshare Services or to operate the approved vehicle under applicable law, rule, permit, ordinance or regulation; (3) you fall below Ridesmash’s star rating or cancellation threshold; or (4) Ridesmash has the good faith belief that such action is necessary to protect the safety of the Ridesmash community or third parties, provided that in the event of a deactivation pursuant to (1)-(4) above, you will be given notice of the potential or actual deactivation and an opportunity to attempt to cure the issue to Ridesmash’s reasonable satisfaction prior to Ridesmash permanently terminating the Agreement. For all other breaches of this Agreement, you will be provided notice and an opportunity to cure the breach. If the breach is cured in a timely manner and to Ridesmash’s satisfaction, this Agreement will not be permanently terminated. Sections 2, 6, 7 (with respect to the license), 11-12, 14-19, and 21 shall survive any termination or expiration of this Agreement.
</p>
<div className='flex w-full justify-start'><p className=' text-gray-500 my-3 roboto font-bold text-justify'>
DISPUTE RESOLUTION AND ARBITRATION AGREEMENT
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(a) Agreement to Binding Arbitration Between You and Ridesmash.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
YOU AND RIDESMASH MUTUALLY AGREE TO WAIVE OUR RESPECTIVE RIGHTS TO RESOLUTION OF DISPUTES IN A COURT OF LAW BY A JUDGE OR JURY AND AGREE TO RESOLVE ANY DISPUTE BY ARBITRATION, as set forth below. This agreement to arbitrate (“Arbitration Agreement”) is governed by the Federal Arbitration Act (“FAA”); but if the FAA is inapplicable for any reason, then this Arbitration Agreement is governed by the laws of the State of Delaware, including Del. Code tit. 10, § 5701 et seq., without regard to choice of law principles. This Arbitration Agreement survives after the Agreement terminates or your relationship with Ridesmash ends. ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED. Except as expressly provided below, this Arbitration Agreement applies to all Claims (defined below) between you and Ridesmash, including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders. This Arbitration Agreement also applies to claims between you and Ridesmash’s service providers, including but not limited to background check providers and payment processors; and such service providers shall be considered intended third-party beneficiaries of this Arbitration Agreement.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Except as expressly provided below, ALL DISPUTES AND CLAIMS BETWEEN US (EACH A “CLAIM” AND COLLECTIVELY, “CLAIMS”) SHALL BE EXCLUSIVELY RESOLVED BY BINDING ARBITRATION SOLELY BETWEEN YOU AND RIDESMASH. These Claims include, but are not limited to, any dispute, claim or controversy, whether based on past, present, or future events, arising out of or relating to: this Agreement and prior versions thereof (including the breach, termination, enforcement, interpretation or validity thereof), the Ridesmash Platform, the Rideshare Services, the Ridesmash Services, Ridesmash promotions, gift card, referrals or loyalty programs, the Ridesmash Tablet, any other goods or services made available through the Ridesmash Platform by Ridesmash or a third-party provider, your relationship with Ridesmash, the threatened or actual suspension, deactivation or termination of your User Account or this Agreement, background checks performed by or on Ridesmash’s behalf, payments made by you or any payments made or allegedly owed to you, any promotions or offers made by Ridesmash, any city, county, state or federal wage-hour law, trade secrets, unfair competition, compensation, breaks and rest periods, expense reimbursement, wrongful termination, discrimination, harassment, retaliation, fraud, defamation, emotional distress, breach of any express or implied contract or covenant, claims arising under federal or state consumer protection laws; claims arising under antitrust laws, claims arising under the Telephone Consumer Protection Act and Fair Credit Reporting Act; and claims arising under the Uniform Trade Secrets Act, Civil Rights Act of 1964, Americans With Disabilities Act, Age Discrimination in Employment Act, Older Workers Benefit Protection Act, Family Medical Leave Act, Fair Labor Standards Act, Employee Retirement Income Security Act of 1974 (except for individual claims for employee benefits under any benefit plan sponsored by Ridesmash and covered by the Employee Retirement Income Security Act of 1974 or funded by insurance), and state statutes, if any, addressing the same or similar subject matters, and all other federal and state statutory and common law claims. All disputes concerning the arbitrability of a Claim (including disputes about the scope, applicability, enforceability, revocability or validity of the Arbitration Agreement) shall be decided by the arbitrator, except as expressly provided below.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
BY AGREEING TO ARBITRATION, YOU UNDERSTAND THAT YOU AND RIDESMASH ARE WAIVING THE RIGHT TO SUE IN COURT OR HAVE A JURY TRIAL FOR ALL CLAIMS, EXCEPT AS EXPRESSLY OTHERWISE PROVIDED IN THIS ARBITRATION AGREEMENT. This Arbitration Agreement is intended to require arbitration of every claim or dispute that can lawfully be arbitrated, except for those claims and disputes which by the terms of this Arbitration Agreement are expressly excluded from the requirement to arbitrate.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(b) Prohibition of Class Actions and Non-Individualized Relief.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
YOU UNDERSTAND AND AGREE THAT YOU AND RIDESMASH MAY EACH BRING CLAIMS IN ARBITRATION AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT ON A CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE BASIS (“CLASS ACTION WAIVER”). YOU UNDERSTAND AND AGREE THAT YOU AND RIDESMASH BOTH ARE WAIVING THE RIGHT TO PURSUE OR HAVE A DISPUTE RESOLVED AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE OR REPRESENTATIVE PROCEEDING. NOTWITHSTANDING THE FOREGOING, THIS SUBSECTION (B) SHALL NOT APPLY TO REPRESENTATIVE PRIVATE ATTORNEYS GENERAL ACT CLAIMS BROUGHT AGAINST RIDESMASH, WHICH ARE ADDRESSED SEPARATELY IN SECTION 17(C).
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on any basis other than an individual basis. The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on a class, collective, or representative basis. The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claims.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the interpretation, applicability, or enforceability of the Class Action Waiver may be resolved only by a court and not by an arbitrator. In any case in which: (1) the dispute is filed as a class, collective, or representative action and (2) there is a final judicial determination that the Class Action Waiver is unenforceable with respect to any Claim or any particular remedy for a Claim (such as a request for public injunctive relief), then that Claim or particular remedy (and only that Claim or particular remedy) shall be severed from any remaining claims and/or remedies and may be brought in a court of competent jurisdiction, but the Class Action Waiver shall be enforced in arbitration on an individual basis as to all other Claims or remedies to the fullest extent possible.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(c) Representative PAGA Waiver.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Notwithstanding any other provision of this Agreement or the Arbitration Agreement, to the fullest extent permitted by law: (1) you and Ridesmash agree not to bring a representative action on behalf of others under the Private Attorneys General Act of 2004 (“PAGA”), California Labor Code § 2698 et seq., in any court or in arbitration, and (2) for any claim brought on a private attorney general basis, including under the California PAGA, both you and Ridesmash agree that any such dispute shall be resolved in arbitration on an individual basis only (i.e., to resolve whether you have personally been aggrieved or subject to any violations of law), and that such an action may not be used to resolve the claims or rights of other individuals in a single or collective proceeding (i.e., to resolve whether other individuals have been aggrieved or subject to any violations of law) (collectively, “representative PAGA Waiver”). Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the scope, applicability, enforceability, revocability or validity of this representative PAGA Waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. If any provision of this representative PAGA Waiver is found to be unenforceable or unlawful for any reason: (i) the unenforceable provision shall be severed from this Agreement; (ii) severance of the unenforceable provision shall have no impact whatsoever on the Arbitration Agreement or the requirement that any remaining Claims be arbitrated on an individual basis pursuant to the Arbitration Agreement; and (iii) any such representative PAGA or other representative private attorneys general act claims must be litigated in a civil court of competent jurisdiction and not in arbitration. To the extent that there are any Claims to be litigated in a civil court of competent jurisdiction because a civil court of competent jurisdiction determines that the representative PAGA Waiver is unenforceable with respect to those Claims, the Parties agree that litigation of those Claims shall be stayed pending the outcome of any individual Claims in arbitration.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(d) Rules Governing the Arbitration.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
Any arbitration conducted pursuant to this Arbitration Agreement shall be administered by the American Arbitration Association (“AAA”) pursuant to its Consumer Arbitration Rules that are in effect at the time the arbitration is initiated, as modified by the terms set forth in this Agreement. Copies of these rules can be obtained at the AAA’s website (www.adr.org) (the “AAA Rules”). Notwithstanding the foregoing, if requested by you and if proper based on the facts and circumstances of the Claims presented, the arbitrator shall have the discretion to select a different set of AAA Rules, but in no event shall the arbitrator consolidate more than one person’s Claims, or otherwise preside over any form of representative, collective, or class proceeding. The parties may select a different arbitration administrator upon mutual written agreement.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
As part of the arbitration, both you and Ridesmash will have the opportunity for reasonable discovery of non-privileged information that is relevant to the Claim. The arbitrator may award any individualized remedies that would be available in court. The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claims. The arbitrator will provide a reasoned written statement of the arbitrator’s decision which shall explain the award given and the findings and conclusions on which the decision is based.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
The arbitrator will decide the substance of all claims in accordance with applicable law, and will honor all claims of privilege recognized by law. The arbitrator shall not be bound by rulings in prior arbitrations involving different Riders or Drivers, but is bound by rulings in prior arbitrations involving the same Rider or Driver to the extent required by applicable law. The arbitrator’s award shall be final and binding and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof, provided that any award may be challenged in a court of competent jurisdiction.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(e) Arbitration Fees and Awards.
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>

The payment of filing and arbitration fees will be governed by the relevant AAA Rules subject to the following modifications:
</p>
</div>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
If Ridesmash initiates arbitration under this Arbitration Agreement, Ridesmash will pay all AAA filing and arbitration fees.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
With respect to any Claims brought by Ridesmash against a Driver, or for Claims brought by a Driver against Ridesmash that: (A) are based on an alleged employment relationship between Ridesmash and a Driver; (B) arise out of, or relate to, Ridesmash’s actual deactivation of a Driver’s User account or a threat by Ridesmash to deactivate a Driver’s User account; (C) arise out of, or relate to, Ridesmash’s actual termination of a Driver’s Agreement with Ridesmash under the termination provisions of this Agreement, or a threat by Ridesmash to terminate a Driver’s Agreement; (D) arise out of, or relate to, Fares (as defined in this Agreement, including Ridesmash’s commission or fees on the Fares), tips, or average hourly guarantees owed by Ridesmash to Drivers for Rideshare Services, other than disputes relating to referral bonuses, other Ridesmash promotions, or consumer-type disputes, or (E) arise out of or relate to background checks performed in connection with a user seeking to become a Driver (the subset of Claims in subsections (A)-(E) shall be collectively referred to as “Driver Claims”), Ridesmash shall pay all costs unique to arbitration (as compared to the costs of adjudicating the same claims before a court), including the regular and customary arbitration fees and expenses (to the extent not paid by Ridesmash pursuant to the fee provisions above). However, if you are the party initiating the Driver Claim, you shall be responsible for contributing up to an amount equal to the filing fee that would be paid to initiate the claim in the court of general jurisdiction in the state in which you provide Rideshare Services to Riders, unless a lower fee amount would be owed by you pursuant to the AAA Rules, applicable law, or subsection (e)(1) above. Any dispute as to whether a cost is unique to arbitration shall be resolved by the arbitrator. For purposes of this Section 17(e)(2), the term “Driver” shall be deemed to include both Drivers and Driver applicants who have not been approved to drive.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Except as provided in Federal Rule of Civil Procedure 68 or any state equivalents, each party shall pay its own attorneys’ fees and pay any costs that are not unique to the arbitration (i.e., costs that each party would incur if the claim(s) were litigated in a court such as costs to subpoena witnesses and/or documents, take depositions and purchase deposition transcripts, copy documents, etc.).
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
At the end of any arbitration, the arbitrator may award reasonable fees and costs or any portion thereof to you if you prevail, to the extent authorized by applicable law.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Although under some laws Ridesmash may have a right to an award of attorneys' fees and non-filing fee expenses if it prevails in an arbitration, Ridesmash agrees that it will not seek such an award unless you are represented by an attorney or the arbitrator has determined that the claim is frivolous or brought for an improper purpose (as measured by the standards of Federal Rule of Civil Procedure 11(b)).
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
If the arbitrator issues you an award that is greater than the value of Ridesmash’s last written settlement offer made after you participated in good faith in the optional Negotiation process described in subsection (k) below, then Ridesmash will pay you the amount of the award or U.S. $1,000, whichever is greater.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(f) Location and Manner of Arbitration.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
Unless you and Ridesmash agree otherwise, any arbitration hearings between Ridesmash and a Rider will take place in the county of your billing address, and any arbitration hearings between Ridesmash and a Driver will take place in the county in which the Driver provides Rideshare Services. If AAA arbitration is unavailable in your county, the arbitration hearings will take place in the nearest available location for a AAA arbitration. Your right to a hearing will be determined by the AAA Rules.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(g) Exceptions to Arbitration.
</p>
</div>
<p className=' text-gray-500 my-3 roboto text-justify'>
This Arbitration Agreement shall not require arbitration of the following types of claims: (1) small claims actions brought on an individual basis that are within the scope of such small claims court’s jurisdiction; (2) a representative action brought on behalf of others under PAGA or other private attorneys general acts, to the extent the representative PAGA Waiver in Section 17(c) of such action is deemed unenforceable by a court of competent jurisdiction under applicable law not preempted by the FAA; (3) claims for workers’ compensation, state disability insurance and unemployment insurance benefits; (4) claims that may not be subject to arbitration as a matter of generally applicable law not preempted by the FAA; and (5) individual claims of sexual assault or sexual harassment in connection with the use of the Ridesmash Platform, Ridesmash Services, or Rideshare Services. Where these claims are brought in a court of competent jurisdiction, Ridesmash will not require arbitration of those claims. Ridesmash’s agreement not to require arbitration of these claims does not waive the enforceability of any other provision of this Arbitration Agreement (including without limitation the waivers provided in Section 17(b)), or of the enforceability of this Arbitration Agreement as to any other dispute, claim, or controversy.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Nothing in this Arbitration Agreement prevents you from making a report to or filing a claim or charge with the Equal Employment Opportunity Commission, U.S. Department of Labor, Securities Exchange Commission, National Labor Relations Board (“NLRB”), or Office of Federal Contract Compliance Programs, or similar local, state or federal agency, and nothing in this Arbitration Agreement shall be deemed to preclude or excuse a party from bringing an administrative claim before any agency in order to fulfill the party's obligation to exhaust administrative remedies before making a claim in arbitration However, should you bring an administrative claim, you may only seek or recover money damages of any type pursuant to this Arbitration Provision, and you knowingly and voluntarily waive the right to seek or recover money damages of any type pursuant to any administrative complaint, except for a complaint issued by the NLRB. Should you participate in an NLRB proceeding, you may only recover money damages if such recovery does not arise from or relate to a claim previously adjudicated under this Arbitration Provision or settled by you. Similarly, you may not recover money damages under this Arbitration Provision if you have already adjudicated such claim with the NLRB. Nothing in this Agreement or Arbitration Agreement prevents your participation in an investigation by a government agency of any report, claim or charge otherwise covered by this Arbitration Provision.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(h) Severability.ceptions to Arbitration.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
Except as otherwise provided in the severability provisions in subsections (b) and (c) above, in the event that any portion of this Arbitration Agreement is deemed illegal or unenforceable under applicable law not preempted by the FAA, such provision shall be severed and the remainder of the Arbitration Agreement shall be given full force and effect.
</p>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(i) Driver Claims in Pending Settlement.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
If you are a member of a putative class in a lawsuit against Ridesmash involving Driver Claims and a Motion for Preliminary Approval of a Settlement has been filed with the court in that lawsuit prior to this Agreement’s effective date (a “Pending Settlement Action”), then this Arbitration Agreement shall not apply to your Driver Claims in that particular class action. Instead, your Driver Claims in that Pending Settlement Action shall continue to be governed by the arbitration

 provisions contained in the applicable Agreement that you accepted prior to this Agreement’s effective date.
</p>


<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(j) Opting Out of Arbitration for Driver Claims That Are Not In a Pending Settlement Action.

</p>
</div>



<p className=' text-gray-500 my-3 roboto text-justify'>
As a Driver or Driver applicant, you may opt out of the requirement to arbitrate Driver Claims defined in Section 17(e)(2) (except as limited by Section 17(i) above) pursuant to the terms of this subsection if you have not previously agreed to an arbitration provision in Ridesmash’s Terms of Service where you had the opportunity to opt out of the requirement to arbitrate. If you have previously agreed to such an arbitration provision, you may opt out of any revisions to your prior arbitration agreement made by this provision in the manner specified below, but opting out of this arbitration provision has no effect on any previous, other, or future arbitration agreements that you may have with Ridesmash. If you have not previously agreed to such an arbitration provision and do not wish to be subject to this Arbitration Agreement with respect to Driver Claims, you may opt out of arbitration with respect to such Driver Claims, other than those in a Pending Settlement Action, by notifying Ridesmash in writing of your desire to opt out of arbitration for such Driver Claims, which writing must be dated, signed and delivered by electronic mail to arbitrationoptout@Ridesmash.com.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'>
In order to be effective, (A) the writing must clearly indicate your intent to opt out of this Arbitration Agreement with respect to Driver Claims that are not part of a Pending Settlement Action, (B) the writing must include the name, phone number, and email address associated with your User Account, and (C) the email containing the signed writing must be sent within 30 days after the date this Agreement is executed by you. Should you not opt out within the 30-day period, you and Ridesmash shall be bound by the terms of this Arbitration Agreement in full (including with respect to Driver Claims that are not part of a Pending Settlement Action). As provided in paragraph 17(i) above, any opt out that you submit shall not apply to any Driver Claims that are part of a Pending Settlement Action and your Driver Claims in any such Pending Settlement Action shall continue to be governed by the arbitration provisions that are contained in the applicable Ridesmash Terms of Use that you agreed to prior to the effective date of this Agreement.
</p>

<p className=' text-gray-500 my-3 roboto text-justify'>
Cases have been filed against Ridesmash and may be filed in the future involving Driver Claims. You should assume that there are now, and may be in the future, lawsuits against Ridesmash alleging class, collective, and/or representative Driver Claims in which the plaintiffs seek to act on your behalf, and which, if successful, could result in some monetary recovery to you. But if you do agree to arbitration of Driver Claims with Ridesmash under this Arbitration Agreement, you are agreeing in advance that you will bring all such claims, and seek all monetary and other relief, against Ridesmash in an individual arbitration, except for the Driver Claims that are part of a Pending Settlement Action. You are also agreeing in advance that you will not participate in, or seek to recover monetary or other relief, for such claims in any court action or class, collective, and/or representative action. You have the right to consult with counsel of your choice concerning this Arbitration Agreement and you will not be subject to retaliation if you exercise your right to assert claims or opt- out of any Driver Claims under this Arbitration Agreement.
</p>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(k) Optional Pre-Arbitration Negotiation Process.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
Before initiating any arbitration or proceeding, you and Ridesmash may agree to first attempt to negotiate any dispute, claim or controversy between the parties informally for 30 days, unless this time period is mutually extended by you and Ridesmash. A party who intends to seek negotiation under this subsection must first send to the other a written notice of the dispute (“Notice”). The Notice must (1) describe the nature and basis of the claim or dispute; and (2) set forth the specific relief sought. All offers, promises, conduct and statements, whether oral or written, made in the course of the negotiation by any of the parties, their agents, employees, and attorneys are confidential, privileged and inadmissible for any purpose, including as evidence of liability or for impeachment, in arbitration or other proceeding involving the parties, provided that evidence that is otherwise admissible or discoverable shall not be rendered inadmissible or as this could violate HIPAA non-discoverable as a result of its use in the negotiation.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
(l) Binding Effect; Third-Party Beneficiaries.
</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
This Arbitration Agreement shall be binding upon, and shall include any claims brought by or against any third parties, including but not limited to your spouses, heirs, third-party beneficiaries and permitted assigns, where their underlying claim(s) arise out of or relate to your use of the Ridesmash Platform, Ridesmash Services, or Rideshare Services. To the extent that any third-party beneficiary to this Agreement brings claims against a party, those claims shall also be subject to this Arbitration Agreement.
</p>

<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
Confidentiality

</p>
</div>


<p className=' text-gray-500 my-3 roboto text-justify'>
You agree not to use any technical, financial, strategic and other proprietary and confidential information relating to Ridesmash’s business, operations and properties, information about a User made available to you in connection with such User’s use of the Ridesmash Platform, which may include the User’s name, pick-up location, contact information and photo (“Confidential Information”) disclosed to you by Ridesmash for your own use or for any purpose other than as contemplated herein. You shall not disclose or permit disclosure of any Confidential Information to third parties, and you agree not to store separate and outside of the Ridesmash Platform any Confidential Information obtained from the Ridesmash Platform. As a Driver, you understand that some of the Confidential Information you receive may be protected by federal and/or state confidentiality laws, such as the Health Information Portability and Accountability Act of 1996 (“HIPAA”), governing the privacy and security of protected (patient) health information. In the event that you know a Rider, you should not disclose to anyone the identity of the Rider or the location that you picked up, or dropped off the Rider, as this could violate HIPAA. You understand that any violation of the Agreement’s confidentiality provisions may violate HIPAA or state confidentiality laws and could result in civil or criminal penalties against you. You agree to take all reasonable measures to protect the secrecy of and avoid disclosure or use of Confidential Information of Ridesmash in order to prevent it from falling into the public domain. Notwithstanding the above, you shall not have liability to Ridesmash with regard to any Confidential Information which you can prove: was in the public domain at the time it was disclosed by Ridesmash or has entered the public domain through no fault of yours; was known to you, without restriction, at the time of disclosure, as demonstrated by files in existence at the time of disclosure; is disclosed with the prior written approval of Ridesmash; becomes known to you, without restriction, from a source other than Ridesmash without breach of this Agreement by you and otherwise not in violation of Ridesmash’s rights; or is disclosed pursuant to the order or requirement of a court, administrative agency, or other governmental body; provided, however, that You shall provide prompt notice of such court order or requirement to Ridesmash to enable Ridesmash to seek a protective order or otherwise prevent or restrict such disclosure.
</p>


<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
Relationship with Ridesmash

</p>
</div>

<p className=' text-gray-500 my-3 roboto text-justify'>
As a Driver on the Ridesmash Platform, you acknowledge and agree that you and Ridesmash are in a direct business relationship, and the relationship between the parties under this Agreement is solely that of independent contracting parties. You and Ridesmash expressly agree that (1) this is not an employment agreement and does not create an employment relationship between you and Ridesmash; and (2) no joint venture, franchisor- franchisee, partnership, or agency relationship is intended or created by this Agreement. You have no authority to bind Ridesmash, and you undertake not to hold yourself out as an employee, agent or authorized representative of Ridesmash.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
Ridesmash does not, and shall not be deemed to, direct or control you generally or in your performance under this Agreement specifically, including in connection with your provision of Rideshare Services, your acts or omissions, or your operation and maintenance of your vehicle. You retain the sole right to determine when, where, and for how long you will utilize the Ridesmash Platform. Ridesmash does not, and shall not be deemed to, unilaterally prescribe specific dates, times of day, or any minimum number of hours for you to utilize the Ridesmash Platform. You retain the option to accept or to decline or ignore a Rider’s request for Rideshare Services via the Ridesmash Platform, or to cancel an accepted request for Rideshare Services via the Ridesmash Platform, subject to Ridesmash’s then-current cancellation policies. Ridesmash does not, and shall not be deemed to, require you to accept any specific request for Rideshare Services as a condition of maintaining access to the platform. With the exception of any signage required by law or permit/license rules or requirements, Ridesmash shall have no right to require you to: (a) display Ridesmash’s names, logos or colors on your vehicle(s); or (b) wear a uniform or any other clothing displaying Ridesmash’s names, logos or colors. You acknowledge and agree that you have complete discretion to provide Rideshare Services or otherwise engage in any other business or employment activities, including but not limited to providing services similar to the Rideshare Services to other companies, and that Ridesmash does not, and shall not be deemed to, restrict you from engaging in any such activity.
</p>


<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify font-bold'>
Third-Party Services

</p>
</div>


<p className=' text-gray-500 my-3 roboto text-justify'>
In addition to connecting Riders with Drivers, the Ridesmash Platform may enable Users to provide services or receive services from other third parties. For example, Users may be able to use the Ridesmash Platform to plan and reserve rides on public transportation, take a ride in an autonomous vehicle provided by a third party, rent vehicles, bikes, scooters, or other similar personal transportation devices provided by a third party, receive roadside assistance, or obtain financial, vehicle repair, insurance, or other services provided by third parties (collectively, the “Third-Party Services”). This Agreement between you and Ridesmash governs your use of the Ridesmash Platform in connection with the Third-Party Services.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
In addition, you understand that the Third-Party Services may also be subject to terms and pricing of the third-party provider (collectively, the “Third-Party Terms”) which will govern your relationship with such third-party provider, as applicable. You agree that Ridesmash is not responsible and may not be held liable for the Third-Party Services or the actions or omissions of the third-party provider. Such Third-Party Services may not be investigated, monitored or checked for accuracy, appropriateness, or completeness by Ridesmash, and Ridesmash is not responsible for any Third-Party Services accessed through the Ridesmash Platform. This Agreement incorporates by reference ADT Mobile Security Monitoring Terms, which are Third-Party Terms.
</p>
<p className=' text-gray-500 my-3 roboto text-justify'>
In the event of a conflict in the terms of any Third-Party Terms and this Agreement, the terms of this Agreement shall control with respect to Ridesmash and your agreements with Ridesmash herein, and the limitations of liability set forth in Section 15 above shall also apply to the third-party provider. The Dispute Resolution and Arbitration Agreement provisions in Section 17 above shall apply instead of any terms in any Third-Party Terms for all purposes except with respect to claims that are solely against the third-party provider.
</p>
<div className='flex w-full justify-start'>
<p className=' text-gray-500 my-3 roboto text-justify'>
If you have any questions regarding the Ridesmash Platform, Ridesmash Services, or Rideshare Services, please contact us through our Help Center.
</p>
</div>

                
    </div>
  )
}

export default TermsAndConditions


