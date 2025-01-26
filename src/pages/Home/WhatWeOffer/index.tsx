import Section from "@/components/shared/Section";
import offerImg1 from "../../../../public/images/services/box.png";
import offerImg2 from "../../../../public/images/services/transport.png";
import offerImg3 from "../../../../public/images/services/payment.png";
import offerImg4 from "../../../../public/images/services/service.png";

const WhatWeOffer = () => {
  const offers = [
    {
      logo: offerImg1,
      title: "Free Shipping",
      description: "Free shipping on orders over $65.",
    },
    {
      logo: offerImg2,
      title: "Free Returns",
      description: "30-days free return policy.",
    },
    {
      logo: offerImg3,
      title: "Secured Payments",
      description: "We accept all major credit cards.",
    },
    {
      logo: offerImg4,
      title: "Customer Service",
      description: "Top-notch customer service.",
    },
  ];

  return (
    <div className="bg-primary-bg-light pt-20 pb-24">
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3 text-slate-900">
            What We <span className="text-primary-bg">Offer</span>
          </h1>
          <p className="text-base font-medium text-slate-700 mb-10">Making shopping simple, secure, and stress-free.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((item) => {
            return (
              <div className="flex items-center justify-center gap-5 shadow-card-shadow-light rounded-lg py-6 px-8 bg-white">
                <div>
                  <img src={item.logo} alt={item.title} />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800">{item.title}</h1>
                  <p className="text-base text-slate-600 font-medium">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};

export default WhatWeOffer;
