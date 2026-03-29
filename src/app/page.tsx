"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Nunnery Roofing & Remodeling Co."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "gradient-bars",
      }}
      logoText="Nunnery Roofing & Remodeling Co."
      description="Built to Last. Done Right. Roofing & Remodeling You Can Trust."
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      layoutOrder="default"
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg"
      imageAlt="Residential roofing construction"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Roof Installation",
          description: "High-quality roofing systems installed with precision and care.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg",
          imageAlt: "Roof installation",
        },
        {
          id: 2,
          title: "Roof Repairs",
          description: "Fast and reliable repairs to protect your home from damage.",
          imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530698.jpg",
          imageAlt: "Roof repair service",
        },
        {
          id: 3,
          title: "Home Remodeling",
          description: "Transform your home with expert remodeling services.",
          imageSrc: "http://img.b2bpic.net/free-photo/light-switch-block-white-wall-modern-apartment-light-control_169016-69630.jpg",
          imageAlt: "Home remodeling project",
        },
        {
          id: 4,
          title: "Storm Damage",
          description: "We help restore your home after storms and weather damage.",
          imageSrc: "http://img.b2bpic.net/free-photo/balcony-house-with-walls-broken-wood_1122-1163.jpg",
          imageAlt: "Storm damage restoration",
        },
      ]}
      title="Our Services"
      description="Professional solutions for your home's needs."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "About Us",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/blue-print-house-with-constructor-hat_23-2148393116.jpg",
          alt: "About our team",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How can I get an estimate?",
          content: "Give us a call at (555) 123-4567 or email info@nunneryroofing.com.",
        },
        {
          id: "2",
          title: "What areas do you serve?",
          content: "We proudly serve our local community with roofing and remodeling needs.",
        },
        {
          id: "3",
          title: "Are you licensed?",
          content: "Yes, we are fully licensed and committed to top-quality craftsmanship.",
        },
      ]}
      ctaTitle="Request a Quote"
      ctaDescription="Call us today or request a free estimate to get started."
      ctaButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      ctaIcon={Phone}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted by Homeowners"
      description="Join thousands of satisfied customers who have trusted us with their homes."
      names={[
        "Local Homeowners Association",
        "Metro Property Management",
        "Neighborhood Builders Group",
        "Quality Construction Partners",
        "Regional Home Improvement Council",
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Nunnery Roofing & Remodeling Co."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
