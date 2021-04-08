import Link from "next/link";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="px-5 w-5/6 max-w-3xl mx-auto pt-7 pb-10 text-coolGray-800 dark:text-white">
      <h1 className="mt-7 mx-auto text-2xl">Gibbs Photography, LLC | Privacy Policy</h1>

      <div className="my-10">
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared
          when you visit or make a purchase from{" "}
          <Link href="https://www.gibbs-photography.com">https://www.gibbs-photography.com</Link>{" "}
          (the <b>“Site”</b>
          ).
        </p>
        <h3 className="mt-6 mb-2">PERSONAL INFORMATION WE COLLECT</h3>
        <p>
          When you visit the Site, we automatically collect certain information about your device,
          including information about your web browser, IP address, time zone, and some of the
          cookies that are installed on your device. Additionally, as you browse the Site, we
          collect information about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information about how you interact
          with the Site. We refer to this automatically-collected information as “Device
          Information.”
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <ul className="px-4">
          <li>
            <b>“Cookies”</b> are data files that are placed on your device or computer and often
            include an anonymous unique identifier. For more information about cookies, and how to
            disable cookies, visit{" "}
            <Link href="http://www.allaboutcookies.org">http://www.allaboutcookies.org </Link>.
          </li>
          <li>
            <b>“Log files”</b> track actions occurring on the Site, and collect data including your
            IP address, browser type, Internet service provider, referring/exit pages, and date/time
            stamps.
          </li>
        </ul>
        <p>
          Additionally when you make a purchase or attempt to make a purchase through the Site, we
          collect certain information from you, including your name, billing address, shipping
          address, payment information, email address, and phone number. We use{" "}
          <Link href="https://stripe.com">Stripe</Link> for payment processing and DO NOT collect or
          store credit card numbers (just card type and amount). We refer to this information as{" "}
          <b>“Order Information"</b>.
        </p>
        <p>
          When we talk about <b>“Personal Information”</b> in this Privacy Policy, we are talking
          both about Device Information and Order Information.
        </p>
        <h3 className="mt-6 mb-2">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
        <p>
          We use the Order Information that we collect generally to fulfill any orders placed
          through the Site (including processing your payment information, arranging for shipping,
          and providing you with invoices and/or order confirmations). Additionally, we use this
          Order Information to:
        </p>
        <ul className="mx-8 list-disc">
          <li>Communicate with you;</li>
          <li>Screen our orders for potential risk or fraud; and</li>
          <li>
            When in line with the preferences you have shared with us, provide you with information
            or advertising relating to our products or services.
          </li>
        </ul>
        <p>
          We use the Device Information that we collect to help us screen for potential risk and
          fraud (in particular, your IP address), and more generally to improve and optimize our
          Site (for example, by generating analytics about how our customers browse and interact
          with the Site, and to assess the success of our marketing and advertising campaigns).
        </p>
        <h3 className="mt-6 mb-2">SHARING YOUR PERSONAL INFORMATION</h3>
        <p>
          We share your Personal Information with third parties to help us use your Personal
          Information, as described above. For example, we use Stripe to process payments in our
          online store--you can read more about how Stripe uses your Personal Information{" "}
          <Link href="https://www.stripe.com/legal/privacy">here</Link>. We also use Google
          Analytics to help us understand how our customers use the Site--you can read more about
          how Google uses your Personal Information{" "}
          <Link href="https://www.google.com/intl/en/policies/privacy/">here</Link>. You can also
          opt-out of Google Analytics{" "}
          <Link href="https://tools.google.com/dlpage/gaoptout">here</Link>.
        </p>
        <p>
          Finally, we may also share your Personal Information to comply with applicable laws and
          regulations, to respond to a subpoena, search warrant or other lawful request for
          information we receive, or to otherwise protect our rights.
        </p>

        <h3 className="mt-6 mb-2">BEHAVIOURAL ADVERTISING</h3>
        <p>
          As described above, we use your Personal Information to provide you with targeted
          advertisements or marketing communications we believe may be of interest to you. For more
          information about how targeted advertising works, you can visit the Network Advertising
          Initiative’s (“NAI”){" "}
          <Link href="http://www.networkedadvertising.org/understanding-online-advertising/how-does-it-work">
            educational page
          </Link>
          .
        </p>
        <p>
          You can opt out of targeted advertising by visiting these links:
          <ul className="mx-8 list-disc">
            <li>
              <Link href="https://www.facebook.com/settings/?tab=ads">Facebook</Link>
              <li>
                <Link href="https://www.google.com/settings/ads/anonymous">Google</Link>
              </li>
              <li>
                <Link href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                  Bing
                </Link>
              </li>
            </li>
          </ul>
        </p>
        <h3 className="mt-6 mb-2">DATA RETENTION</h3>
        <p>
          When you place an order through the Site, we will maintain your Order Information for our
          records unless and until you ask us to delete this information.
        </p>
        <h3 className="mt-6 mb-2">CHANGES</h3>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example,
          changes to our practices or for other operational, legal or regulatory reasons.
        </p>
        <h3 className="mt-6 mb-2">CONTACT US</h3>
        <p>
          For more information about our privacy practices, if you have questions, or if you would
          like to make a complaint, please contact us by e-mail at{" "}
          <Link href="mailto: info@gibbs-photography.com">info@gibbs-photography.com</Link>.
        </p>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
