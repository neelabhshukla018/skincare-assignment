import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronLeft, ChevronRight, Menu, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial loading screen animation
    const tl = gsap.timeline();

    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
    })
      .set(loadingRef.current, { display: "none" })
      .fromTo(
        mainContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      );

    // Text reveal animation for first paragraph
    if (paragraphRef.current) {
      const words = paragraphRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const products = [
    {
      name: "Gentle Cleanser",
      price: "$24",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=400",
      rating: 4.8,
    },
    {
      name: "Hydrating Serum",
      price: "$36",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=400",
      rating: 4.9,
    },
    {
      name: "Night Cream",
      price: "$42",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=400",
      rating: 4.7,
    },
  ];

  const faqs = [
    {
      question: "What ingredients are in your products?",
      answer:
        "Our products contain only the finest natural and organic ingredients, carefully sourced and expertly formulated for maximum effectiveness.",
    },
    {
      question: "How often should I use the products?",
      answer:
        "For best results, use our cleanser twice daily, serum once in the morning, and night cream before bed. Always follow the specific instructions on each product.",
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer:
        "Yes! All our products are dermatologically tested and formulated to be gentle on sensitive skin. However, we recommend patch testing before first use.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us for a full refund.",
    },
  ];

  return (
    <>
      {/* Loading Screen */}
      <div
        ref={loadingRef}
        className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
          <p className="text-2xl font-light text-gray-600">Loading...</p>
        </div>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="opacity-0">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">SKINCARE</div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:inline-flex"
              >
                Sign In
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Shop Now
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden"
        >
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-medium text-emerald-600 tracking-wider uppercase">
                    Premium Skincare
                  </h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                    GLOW
                    <br />
                    <span className="text-emerald-600">NATUR-</span>
                    <br />
                    ALLY
                  </h1>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-emerald-200"></div>
                  <p
                    ref={paragraphRef}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed pl-8"
                  >
                    <span className="word">Experience</span>{" "}
                    <span className="word">the</span>{" "}
                    <span className="word">ultimate</span>{" "}
                    <span className="word">in</span>{" "}
                    <span className="word">skincare</span>{" "}
                    <span className="word">with</span>{" "}
                    <span className="word">our</span>{" "}
                    <span className="word">expertly</span>{" "}
                    <span className="word">formulated</span>{" "}
                    <span className="word">products,</span>{" "}
                    <span className="word">crafted</span>{" "}
                    <span className="word">to</span>{" "}
                    <span className="word">nourish,</span>{" "}
                    <span className="word">protect,</span>{" "}
                    <span className="word">and</span>{" "}
                    <span className="word">rejuvenate</span>{" "}
                    <span className="word">your</span>{" "}
                    <span className="word">skin.</span>
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                >
                  Discover Products
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=600"
                  alt="Woman applying skincare"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=600"
                  alt="Skincare application"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                    YOUR SKIN DESERVES
                    <br />
                    THE BEST CARE.
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Combining the finest natural ingredients with modern science
                    to deliver exceptional results.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Bio Ingredients
                      </h3>
                      <p className="text-gray-600">
                        Sourced from nature's finest organic compounds for pure
                        effectiveness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Everything Natural
                      </h3>
                      <p className="text-gray-600">
                        No harmful chemicals, just pure natural goodness for
                        your skin.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        All Handmade
                      </h3>
                      <p className="text-gray-600">
                        Carefully crafted in small batches with attention to
                        every detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Selling Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Skincare That Brings Out
                <br />
                Your Natural Radiance
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our most loved products, trusted by thousands of
                customers worldwide.
              </p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-emerald-600">
                            {product.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile/Tablet Navigation Buttons */}
              <div className="flex md:hidden justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-emerald-50 transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-emerald-50 transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-800"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light leading-tight">
                  Feel Beautiful Inside and Out
                  <br />
                  with Every Product.
                </h2>
                <p className="text-emerald-100 text-lg">
                  Join thousands of satisfied customers who have transformed
                  their skincare routine with our premium products.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-900 hover:bg-gray-100"
                >
                  Start Your Journey
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3509962ca25642c4a700b8a0621f1568%2F53696397ca8b48beb5a1337723034ea4?format=webp&width=500"
                  alt="Skincare routine"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                  Answers to Your Skincare Questions,
                  <br />
                  All in One Place.
                </h2>
                <p className="text-gray-600 text-lg">
                  Everything you need to know about our products and skincare
                  routine.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-emerald-50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-emerald-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">SKINCARE</h3>
                <p className="text-emerald-100">
                  Premium natural skincare for your daily routine.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Products</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Cleansers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Serums
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Moisturizers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Treatments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">
                  Join The Skincare Community Now.
                </h4>
                <p className="text-emerald-100 text-sm">
                  Get exclusive tips and product updates.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                  />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-emerald-800 pt-8 text-center text-emerald-100">
              <p>&copy; 2024 Skincare. All rights reserved.</p>
              <p className="mt-2">contact.skincare.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
