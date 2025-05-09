import ProductDetailCarousel from "./views/product-carosel";

import { Heart, TruckIcon, Undo2Icon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerCustom,
} from "@/components/ui/accordion";
import { getProductBySlug } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { AddToCartPurfectSection } from "./views/add-to-cart-purfect";

import ListPaymentMethod from "@/components/list-payment-method";
import ReviewList from "@/components/reviews";
import StarThreeQuaterIcon from "@/components/icons/star-three-quarter";
import StarIcon from "@/components/icons/star-icon";
const data = [
  {
    title: "Description",
    content:
      "Unleash the power of the ocean with our Organic Sea Moss and Shilajit, featuring highly potent clinically dosed formulas. This comprehensive formula combines 24 essential nutrients in 2 tablets, designed to enhance your overall health and vitality. Perfect for those seeking a powerful boost to their daily wellness regimen.",
  },
  {
    title: "Health Benefits",
    content:
      "Our Organic Sea Moss and Shilajit are designed to support a range of health functions, enhancing your overall well-being. From boosting your immune system to supporting thyroid function and improving skin health, these supplements are your gateway to a healthier life. Additional benefits include energy enhancement, stress reduction, and support for weight management, all contributing to a more vibrant and healthier you.",
  },
  {
    title: "How to Use",
    content: (
      <p>
        {" "}
        As a dietary supplement, take 2 tablets of Organic Sea Moss and 1
        tablets of Shilajit per day. For the best results, take with a meal and
        an 8oz glass of water or as directed by your healthcare professional.{" "}
        <br /> You may take both supplements together or take 1 in the morning
        and 1 in the evening depending on preference.{" "}
      </p>
    ),
  },
  {
    title: "Product Guarantee",
    content:
      "Experience the benefits of our Dynamic Vitality Duo risk-free with our 30-day money-back guarantee. If you’re not fully satisfied with your wellness improvement, simply return the product within 30 days for a full refund",
  },
];

type Image = {
  node: {
    url: string;
  };
};
export default async function NaturaeonPage() {
  const product = await getProductBySlug("naturaeon-blend");

  if (!product) return notFound();

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hình ảnh */}
          <div>
            <ProductDetailCarousel
              slides={product.images.edges.map((img: Image) => img.node.url)}
            />
          </div>

          {/* Nội dung */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-start space-x-2 text-gray-600  text-lg">
              <span className="text-green-900 flex space-x-1 text-lg mr-2">
                <StarIcon className="size-5" />
                <StarIcon className="size-5" />
                <StarIcon className="size-5" />
                <StarIcon className="size-5" />
                <StarThreeQuaterIcon className="size-5" />
              </span>
              <span>
                4.9 stars <strong className="text-green-700">100,000+</strong>{" "}
                members
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl  font-bold text-gray-800">
              <span className="text-green-900">Naturaeon</span> Blend®
              <span className="bg-red-500 rounded-md text-white text-sm mx-2 p-1 align-top font-semibold">
                Today Only!
              </span>
            </h2>
            <p className="p1">
              <span>Discover the power of </span>
              <strong>
                <span style={{ color: "rgb(0, 80, 39)" }}>
                  Sea Moss and Shilajit
                </span>
              </strong>
              <span> in convenient potent </span>
              supplement
              <span> – your </span>
              <strong>
                <span style={{ color: "rgb(0, 80, 39)" }}>all-in-one</span>
              </strong>
              <span> wellness solution.</span>
            </p>

            <div className="mt-4">
              <AddToCartPurfectSection product={product} />
            </div>

            <div className="mx-2 flex items-center space-x-4 md:space-x-8 text-gray-700  justify-around text-sm sm:text-base">
              <span className="flex items-center space-y-2 flex-col uppercase font-semibold justify-center text-center">
                <Heart strokeWidth={1.5} size={30} />
                <span>Customer Favorite</span>
              </span>
              <span className="flex items-center space-y-2 flex-col uppercase font-semibold justify-center text-center">
                <Undo2Icon strokeWidth={1.5} size={30} />
                <span>Money-back Guarantee</span>
              </span>
              <span className="flex items-center space-y-2 flex-col uppercase font-semibold justify-center text-center">
                <TruckIcon strokeWidth={1.5} size={30} />
                <span>Fast Shipping</span>
              </span>
            </div>
            <ListPaymentMethod />
            <div>
              <Accordion type="single" collapsible className="w-full">
                {data.map((item, index) => (
                  <AccordionItem key={item.title} value={`item-${index}`}>
                    <AccordionTriggerCustom>
                      {item.title}
                    </AccordionTriggerCustom>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <ReviewList slug="purfect-fuel-blend" />
      </div>
    </div>
  );
}

export const revalidate = 60;
