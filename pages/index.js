import EnterpriseSection from "@/components/Home/enterprise";
import FeaturesSection from "@/components/Home/featuresSection";
import NewsletterSignup from "@/components/Home/newsletterSection";
import NotificationComponent from "@/components/Home/notification";
import OpenSourceCommunityEdition from "@/components/Home/openSourceSection";
import PricingSection from "@/components/Home/pricingSection";
import Section1 from "@/components/Home/section1";
import Section2 from "@/components/Home/section2";
import ServiceProviderSection from "@/components/Home/serviceProvider";
import TestimonialSection from "@/components/Home/testimonialSection";

export default function Home() {
  return (
    <div>
      <Section1 />
      <NotificationComponent />
      <Section2 />
      <TestimonialSection />
      <FeaturesSection />
      <PricingSection />
      <EnterpriseSection />
      <ServiceProviderSection />
      <OpenSourceCommunityEdition />
      <NewsletterSignup />
    </div>
  );
}
