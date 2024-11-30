import AbstractImage from "../assets/images/abstract_lines2 7.png";

type SectionProps = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export const Section = ({ id, title, content }: SectionProps) => (
  <section id={id} className="mb-16 space-y-10">
    <h2 className="text-3xl font-extrabold mb-6">{title}</h2>
    <div className="space-y-12">{content}</div>
  </section>
);

type PolicyListProps = {
  items: string[];
};

export const PolicyList = ({ items }: PolicyListProps) => (
  <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const NAV_ITEMS = [
  { id: "terms", label: "Terms & Conditions" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "conduct", label: "Code Of Conduct" },
  { id: "refunds", label: "Refunds" },
];

export const NavigationMenu = () => (
  <nav className="sticky top-0 bg-black/80 backdrop-blur-sm py-4 my-8">
    <ul className="flex space-x-4 overflow-x-auto py-2">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-white hover:text-gray-300 transition-colors border p-2 rounded-xl font-medium text-lg"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const BackgroundPattern = () => (
  <div className="fixed left-0 top-0 h-full w-1/4 pointer-events-none">
    <div className="h-full w-full opacity-20">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q25,25 50,50 T100,50"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
          className="animate-pulse"
        />
      </svg>
    </div>
  </div>
);

export const AbstractImages = () => (
  <>
    {[170, 670, 1470].map((top, index) => (
      <img
        key={index}
        src={AbstractImage}
        className={`absolute inset-0 top-[${top}px] -left-[50%] object-cover`}
        alt="Abstract"
      />
    ))}
  </>
);

import { HomeCallToAction } from "./HomeCallToAction";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto space-y-10 flex flex-col">
        <NavigationMenu />

        <Section
          id="terms"
          title="Terms & Conditions"
          content={
            <>
              <div>
                <h3 className="font-bold text-xl mb-2">Services Provided:</h3>
                <p className="text-white font-medium">
                  Amplify offers a range of digital content creation services,
                  including 3D product visualization, exhibition design,
                  architectural rendering, product animation, and advertising.
                  Services are tailored to meet client needs, with project
                  specifics determined through mutual agreement.
                </p>
              </div>
              <AbstractImages />

              <div>
                <h3 className="font-bold text-xl mb-2">Payment Terms:</h3>
                <ul className="list-disc pl-6 text-white font-medium">
                  <li>
                    Payment is required either upfront or based on an agreed
                    schedule (e.g., 50% deposit before work begins, balance upon
                    delivery).
                  </li>
                  <li>
                    Accepted payment methods include credit card, bank transfer,
                    or other specified options.
                  </li>
                  <li>
                    Late payments may incur additional fees, and projects may be
                    paused or terminated due to non-payment.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Revisions & Modifications:
                </h3>
                <ul className="list-disc pl-6 text-white font-medium">
                  <li>
                    Minor Revisions: Small changes (e.g., lighting, color
                    adjustments) are included in the scope of work.
                  </li>
                  <li>
                    Major Revisions: Significant changes outside the agreed
                    scope (e.g., altering design, environment) will incur extra
                    costs. Amplify will notify the client of any additional
                    charges before proceeding.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Intellectual Property & Usage Rights:
                </h3>
                <ul className="list-disc pl-6 text-white font-medium">
                  <li>
                    All content remains the property of Amplify until full
                    payment is received. Once paid, the client is granted a
                    non-transferable license to use the deliverables as agreed.
                  </li>
                  <li>
                    The client may not resell or redistribute Amplify’s work
                    without written permission.
                  </li>
                  <li>
                    Amplify retains the right to showcase completed work for
                    promotional purposes unless otherwise agreed upon.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Client Responsibilities:
                </h3>
                <ul className="list-disc pl-6 text-white font-medium">
                  <li>
                    Clients must provide all necessary materials and resources
                    for project completion.
                  </li>
                  <li>
                    Timely feedback and communication are required to avoid
                    delays.
                  </li>
                  <li>
                    Deliverables must be used lawfully and in compliance with
                    applicable regulations.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Liability & Disclaimers:
                </h3>
                <ul className="list-disc pl-6 text-white font-medium">
                  <li>
                    Amplify is not liable for delays caused by factors outside
                    its control, such as client delays or third-party issues.
                  </li>
                  <li>
                    Amplify is not responsible for errors in deliverables caused
                    by incorrect information provided by the client.
                  </li>
                </ul>
              </div>

              <hr className="my-10 mx-20 border-2" />
              <Section
                id="privacy"
                title="Privacy Policy"
                content={
                  <>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Data Collection:
                      </h3>
                      <p className="text-white font-medium">
                        Amplify collects and uses client data (contact
                        information, project briefs) solely for the purpose of
                        providing services and maintaining effective
                        communication.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Data Protection:
                      </h3>
                      <p className="text-white font-medium">
                        Client data is treated as confidential and will not be
                        shared with third parties unless necessary for service
                        delivery or required by law.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Third-Party Services:
                      </h3>
                      <p className="text-white font-medium">
                        Amplify may use third-party service providers for tasks
                        like payment processing or website hosting. These
                        services have their own privacy policies, and Amplify is
                        not responsible for their actions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Client Rights:</h3>
                      <p className="text-white font-medium">
                        Clients have the right to access, modify, or request the
                        deletion of their data at any time by contacting Amplify
                        directly.
                      </p>
                    </div>
                  </>
                }
              />

              <hr className="my-10 mx-20 border-2" />

              <Section
                id="conduct"
                title="Code Of Conduct"
                content={
                  <>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Clients are expected to:
                      </h3>
                      <ul className="list-disc pl-6 text-white font-medium">
                        <li>
                          Provide accurate and complete information required for
                          project completion.
                        </li>
                        <li>
                          Communicate promptly and provide feedback when
                          requested.
                        </li>
                        <li>
                          Use Amplify’s deliverables for lawful purposes only.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Amplify's Commitment:
                      </h3>
                      <ul className="list-disc pl-6 text-white font-medium">
                        <li>
                          Ensure professional conduct during all interactions.
                        </li>
                        <li>
                          Deliver projects on time and as agreed, within the
                          defined scope.
                        </li>
                        <li>
                          Maintain clear and open communication with clients
                          throughout the project.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Misconduct:</h3>
                      <p className="text-white font-medium">
                        Any form of abusive, discriminatory, or unlawful
                        behavior toward Amplify staff will not be tolerated and
                        may result in the termination of the project without a
                        refund.
                      </p>
                    </div>
                  </>
                }
              />

              <hr className="my-10 mx-20 border-2 mx-20" />

              <Section
                id="refunds"
                title="Refunds"
                content={
                  <>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Cancellation:</h3>
                      <p className="text-white font-medium">
                        Clients may cancel a project before work begins and
                        receive a full refund. If the project has already
                        started, partial refunds may be issued based on the
                        amount of work completed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        Non-Refundable Cases:
                      </h3>
                      <p className="text-white font-medium">
                        No refunds are available once the project is
                        substantially completed or fully delivered. Amplify
                        reserves the right to refuse refunds if the client fails
                        to provide required feedback or resources, leading to
                        project delays or complications.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Disputes:</h3>
                      <p className="text-white font-medium">
                        Amplify aims to resolve any client concerns or disputes.
                        If the client is unsatisfied with the final product,
                        Amplify will work to address minor adjustments within
                        reason. Full project cancellation refunds will not be
                        provided once deliverables have been finalized and
                        accepted.
                      </p>
                    </div>
                  </>
                }
              />

              <HomeCallToAction title="Agree to our terms & conditions?" />
            </>
          }
        />
      </div>
    </div>
  );
}
