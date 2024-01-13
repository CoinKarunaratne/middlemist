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
            Terms & Conditions
          </LargeHeading>
          <Paragraph size="sm" className=" text-slate-600 text-center">
            By purchasing products from Middlemist Events website you are
            agreeing to our Terms and conditions, and we reserves the right to
            adjust these Terms and conditions at any time without notice.
          </Paragraph>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-bold">Disclaimer</h1>
              <Paragraph size="sm" className=" text-slate-600 text-left">
                Our goal is to depict all items with the utmost accuracy. It's
                important to recognize that not all items are portrayed to scale
                and are solely for illustrative purposes. Colors may also
                exhibit slight variations depending on the monitor or device
                used to access our site. Additionally, as certain items are
                crafted by hand, minor variations may be present.
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-bold">Refund & Return Policy</h1>
              <Paragraph
                size="sm"
                className=" text-slate-600 text-left inline-block"
              >
                We believe you will be delighted with our partyware. In the
                unlikely circumstance of a defective or damaged item, kindly
                contact us promptly at{" "}
                <a href="mailto:middlemistevent@yahoo.com">
                  <span className=" text-blue-600 hover:opacity-50">
                    middlemistevent@yahoo.com
                  </span>
                </a>
                , and we will organize a replacement for you. Please note that
                we do not provide refunds for changes of mind or if the product
                was unused. For return shipping of non-faulty products, the
                buyer is responsible for the associated costs.
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-bold">Pricing</h1>
              <Paragraph
                size="sm"
                className=" text-slate-600 text-left inline-block"
              >
                All prices are displayed in New Zealand Dollars and include GST.
                Prices may change without prior notice. Shipping costs, if
                applicable, will be included in your order during the checkout
                process unless your order qualifies for free shipping.
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-bold">Privacy Policy</h1>
              <Paragraph
                size="sm"
                className=" text-slate-600 text-left inline-block"
              >
                We are committed to responsibly safeguarding your personal
                information. Any personal data gathered will exclusively be
                utilized for order fulfillment, addressing inquiries, or
                providing you with pertinent product offers. Your personal
                information will not be shared with any third party unless
                explicit permission is granted or legal obligations mandate such
                disclosure.
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg text-bold">Copyright</h1>
              <Paragraph
                size="sm"
                className=" text-slate-600 text-left inline-block"
              >
                The Party Room Limited holds ownership of all photos, images,
                and content featured on this website. Any reproduction, reuse,
                or copying of content is strictly prohibited without our prior
                consent. For inquiries regarding these Terms of Trade, feel free
                to reach out to us at{" "}
                <a href="mailto:middlemistevent@yahoo.com">
                  <span className=" text-blue-600 hover:opacity-50">
                    middlemistevent@yahoo.com
                  </span>
                </a>
                .
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
