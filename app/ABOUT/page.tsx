import Footer from "../components/Footer";
import LargeHeading from "../components/ui/LargeHeading";
import Navbar from "../components/ui/Navbar";
import Paragraph from "../components/ui/Paragraph";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Navbar />
      <div className="h-auto flex flex-col gap-16 align-middle items-center justify-center bg-[#FFEBEC] py-24 flex-1">
        <div className="flex flex-col justify-center items-center gap-12 px-4 flex-1">
          <LargeHeading className="drop-shadow-2xl text-[#231F20]">
            About us
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            Welcome to the middlemist events. We are family owned business based
            in Auckland. We would love to invite you to come and visit our
            website to choose our exclusive selection of party needs to create
            outstanding party. There is much to celebrate in our lives making
            memories with our family, friends and our loved ones. So here we are
            happy to help you with all your needs including Party Styling, DIY
            balloon garland, Party hire, party boxes and birthday party
            supplies. We offer a wide range of balloon garland options for any
            occasion, from small intimate gatherings to large cooperate events.
            Our services include delivery, setup, and takedown of the garland,
            ensuring that everything runs smoothly and seamlessly. We use only
            high quality, durable balloons to ensure that your garland stay
            looking beautiful throughout the event. We also offer custom designs
            to suit your specific needs. Whether you’re looking for a specific
            color scheme or want to incorporate additional decorations such as
            flowers and lights, we can work with you to create the perfect
            garland. We pride ourselves on our attention to details and
            excellent customer service, so you can be sure that your event will
            be a success. Contact us today to discuss your next event and let us
            help you make it unforgettable. Happy Shopping!!!
          </Paragraph>
        </div>
      </div>

      <Footer />
    </main>
  );
}
