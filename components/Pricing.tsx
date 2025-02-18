import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BiCheck } from "react-icons/bi";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const PricingCard = ({ plan, isPopular, delay }: any) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInUp}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-3xl ${ isPopular ? ' bg-purple-950 backdrop-blur-xl border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10' : 'bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10'}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs px-2 py-1 rounded-full">
            50% OFF: Save $600
          </div>
        </div>
      )}
      <div className="flex flex-col items-center h-full">
        <div className="mb-8 h-[8rem]">
          <span className="inline-block px-4 py-1 text-sm font-medium text-purple-200 bg-purple-500/10 rounded-full mb-4">
            {plan.type}
          </span>
          {plan.oldPrice && (
            <div className="text-gray-400 line-through text-lg mb-1">${plan.oldPrice}/mo</div>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            {plan.price !== "Custom" && plan.price !== "Free!" && <span className="text-gray-400">/mo</span>}
          </div>
        </div>

        <button className="w-full py-3 px-6 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors mb-8">
          {plan.buttonText}
        </button>

        {plan.description && (
          <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
        )}

        <div className="space-y-6">
          {plan.sections.map((section: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-white font-medium mb-3">{section.title}</h4>
              <ul className="space-y-3 ">
                {section.features.map((feature: string, featureIdx: number) => (
                  <li key={featureIdx} className="flex items-start justify-start gap-3 text-gray-300 text-xs">
                    <BiCheck className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      type: "FREE",
      price: "Free!",
      buttonText: "Get started",
      sections: [
        {
          title: "Includes",
          features: [
            "10 credits/mo (~2 videos)",
            "Credits expire every 2 months",
            "1 seat"
          ]
        },
        {
          title: "Main features",
          features: [
            "Realistic avatars",
            "140+ realistic voices",
            "29 languages",
            "Exports with watermark",
            "Limited avatar library",
            "Limited AI tools",
            "9:16 aspect ratio only"
          ]
        }
      ]
    },
    {
      type: "STARTER",
      price: "33",
      oldPrice: "39",
      buttonText: "Get annual plan",
      sections: [
        {
          title: "Includes",
          features: [
            "1,200 credits/year (~240 videos)",
            "Credits expire yearly",
            "1 seat"
          ]
        },
        {
          title: "Everything in Free plan, plus",
          features: [
            "Remove watermark",
            "Access to Creative Insights",
            "Advanced avatar library (170+ avatars)",
            "Premium stock footage",
            "Up to 2 minutes duration/video",
            "Commercial music library",
            "9:16, 16:9 and 1:1 aspect ratio"
          ]
        }
      ]
    },
    {
      type: "PRO",
      price: "49",
      oldPrice: "99",
      buttonText: "Get annual plan",
      isPopular: true,
      sections: [
        {
          title: "Includes",
          features: [
            "2,400 credits/year (~480 videos)",
            "Credits expire yearly",
            "3 custom avatars",
            "1 seat, add-on based on demand"
          ]
        },
        {
          title: "Everything in Starter plan, plus",
          features: [
            "Premium avatar library (500+ avatars)",
            "Create your own avatar",
            "Track Competitor Ads",
            "Access to Batch Mode and all Advance AI tools",
            "2,000+ additional avatar emotions",
            "API access",
            "Faster video processing speed",
            "24/7 priority customer support"
          ]
        }
      ]
    },
    {
      type: "ENTERPRISE",
      price: "Custom",
      buttonText: "Learn more",
      description: "Contact us for an enterprise plan if you want unlimited usage, API support, managed service, or need custom terms.",
      sections: [
        {
          title: "Services",
          features: [
            "All features",
            "Volume-based discounts",
            "Fully custom API support",
            "Custom terms",
            "Unlimited usage",
            "Dedicated account manager"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black"> 
    {/* //bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 */}
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include core features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;