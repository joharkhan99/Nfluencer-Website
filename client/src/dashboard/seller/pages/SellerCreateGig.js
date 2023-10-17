import OverviewTab from "../components/gig/OverviewTab";
import DescriptionTab from "../components/gig/DescriptionTab";
import PricingTab from "../components/gig/PricingTab";
import GalleryTab from "../components/gig/GalleryTab";
import RequirementsTab from "../components/gig/RequirementsTab";
import FAQTab from "../components/gig/FAQTab";
import PublishTab from "../components/gig/PublishTab";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GigStepForm from "../components/partials/GigStepForm";
import {
  CubeTransparentIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import NFTTab from "../components/gig/NFTTab";

const SellerCreateGig = () => {
  const formStep = useSelector((state) => state.gig.formStep);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [description, setDescription] = useState(null);

  // pricing
  const [packag1Name, setPackag1Name] = useState(null);
  const [packag1Desc, setPackag1Desc] = useState(null);
  const [packag1Price, setPackag1Price] = useState(null);
  const [packag1DeliveryTime, setPackag1DeliveryTime] = useState(null);
  const [packag1Revisions, setPackag1Revisions] = useState(null);
  const [packag1Support, setPackag1Support] = useState(null);
  const [offer3Packages, setOffer3Packages] = useState(false);

  const [packag2Name, setPackag2Name] = useState(null);
  const [packag2Desc, setPackag2Desc] = useState(null);
  const [packag2Price, setPackag2Price] = useState(null);
  const [packag2DeliveryTime, setPackag2DeliveryTime] = useState(null);
  const [packag2Revisions, setPackag2Revisions] = useState(null);
  const [packag2Support, setPackag2Support] = useState(null);

  const [packag3Name, setPackag3Name] = useState(null);
  const [packag3Desc, setPackag3Desc] = useState(null);
  const [packag3Price, setPackag3Price] = useState(null);
  const [packag3DeliveryTime, setPackag3DeliveryTime] = useState(null);
  const [packag3Revisions, setPackag3Revisions] = useState(null);
  const [packag3Support, setPackag3Support] = useState(null);

  const [offerExtraFastDelivery, setOfferExtraFastDelivery] = useState(false);
  const [extraBasicDeliveryTime, setExtraBasicDeliveryTime] = useState(null);
  const [extraBasicDeliveryPrice, setExtraBasicDeliveryPrice] = useState(null);
  const [extraStandardDeliveryPrice, setExtraStandardDeliveryPrice] =
    useState(null);
  const [extraStandardDeliveryTime, setExtraStandardDeliveryTime] =
    useState(null);
  const [extraPremiumDeliveryTime, setExtraPremiumDeliveryTime] =
    useState(null);
  const [extraPremiumDeliveryPrice, setExtraPremiumDeliveryPrice] =
    useState(null);

  const [offerExtraRevision, setOfferExtraRevision] = useState(false);
  const [extraBasicRevision, setExtraBasicRevision] = useState(null);
  const [extraBasicRevisionPrice, setExtraBasicRevisionPrice] = useState(null);
  const [extraStandardRevisionPrice, setExtraStandardRevisionPrice] =
    useState(null);
  const [extraStandardRevision, setExtraStandardRevision] = useState(null);
  const [extraPremiumRevisionPrice, setExtraPremiumRevisionPrice] =
    useState(null);
  const [extraPremiumRevision, setExtraPremiumRevision] = useState(null);

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState(["", "", ""]);

  const formSteps = [
    {
      icon: <DocumentMagnifyingGlassIcon className="h-6 w-6" />,
      title: "Overview",
    },
    {
      icon: <DocumentTextIcon className="h-6 w-6" />,
      title: "Description",
    },
    {
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      title: "Scope & Pricing",
    },
    {
      icon: <PhotoIcon className="h-6 w-6" />,
      title: "Gallery",
    },
    {
      icon: <CubeTransparentIcon className="h-6 w-6" />,
      title: "NFT",
    },
    {
      icon: <DocumentCheckIcon className="h-6 w-6" />,
      title: "Requirements",
    },
    {
      icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
      title: "FAQs",
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6" />,
      title: "Publish",
    },
  ];

  const tabs = [
    <OverviewTab
      title={title}
      keywords={keywords}
      setTitle={setTitle}
      setKeywords={setKeywords}
      keywordInput={keywordInput}
      setKeywordInput={setKeywordInput}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      selectedSubcategory={selectedSubcategory}
      setSelectedSubcategory={setSelectedSubcategory}
    />,
    <DescriptionTab
      description={description}
      setDescription={setDescription}
    />,
    <PricingTab
      packag1Name={packag1Name}
      setPackag1Name={setPackag1Name}
      packag1Desc={packag1Desc}
      setPackag1Desc={setPackag1Desc}
      packag1Price={packag1Price}
      setPackag1Price={setPackag1Price}
      packag1DeliveryTime={packag1DeliveryTime}
      setPackag1DeliveryTime={setPackag1DeliveryTime}
      packag1Revisions={packag1Revisions}
      setPackag1Revisions={setPackag1Revisions}
      packag1Support={packag1Support}
      setPackag1Support={setPackag1Support}
      offer3Packages={offer3Packages}
      setOffer3Packages={setOffer3Packages}
      packag2Name={packag2Name}
      setPackag2Name={setPackag2Name}
      packag2Desc={packag2Desc}
      setPackag2Desc={setPackag2Desc}
      packag2Price={packag2Price}
      setPackag2Price={setPackag2Price}
      packag2DeliveryTime={packag2DeliveryTime}
      setPackag2DeliveryTime={setPackag2DeliveryTime}
      packag2Revisions={packag2Revisions}
      setPackag2Revisions={setPackag2Revisions}
      packag2Support={packag2Support}
      setPackag2Support={setPackag2Support}
      packag3Name={packag3Name}
      setPackag3Name={setPackag3Name}
      packag3Desc={packag3Desc}
      setPackag3Desc={setPackag3Desc}
      packag3Price={packag3Price}
      setPackag3Price={setPackag3Price}
      packag3DeliveryTime={packag3DeliveryTime}
      setPackag3DeliveryTime={setPackag3DeliveryTime}
      packag3Revisions={packag3Revisions}
      setPackag3Revisions={setPackag3Revisions}
      packag3Support={packag3Support}
      setPackag3Support={setPackag3Support}
      offerExtraFastDelivery={offerExtraFastDelivery}
      setOfferExtraFastDelivery={setOfferExtraFastDelivery}
      extraBasicDeliveryTime={extraBasicDeliveryTime}
      setExtraBasicDeliveryTime={setExtraBasicDeliveryTime}
      extraBasicDeliveryPrice={extraBasicDeliveryPrice}
      setExtraBasicDeliveryPrice={setExtraBasicDeliveryPrice}
      extraStandardDeliveryPrice={extraStandardDeliveryPrice}
      setExtraStandardDeliveryPrice={setExtraStandardDeliveryPrice}
      extraStandardDeliveryTime={extraStandardDeliveryTime}
      setExtraStandardDeliveryTime={setExtraStandardDeliveryTime}
      extraPremiumDeliveryTime={extraPremiumDeliveryTime}
      setExtraPremiumDeliveryTime={setExtraPremiumDeliveryTime}
      extraPremiumDeliveryPrice={extraPremiumDeliveryPrice}
      setExtraPremiumDeliveryPrice={setExtraPremiumDeliveryPrice}
      offerExtraRevision={offerExtraRevision}
      setOfferExtraRevision={setOfferExtraRevision}
      extraBasicRevision={extraBasicRevision}
      setExtraBasicRevision={setExtraBasicRevision}
      extraBasicRevisionPrice={extraBasicRevisionPrice}
      setExtraBasicRevisionPrice={setExtraBasicRevisionPrice}
      extraStandardRevisionPrice={extraStandardRevisionPrice}
      setExtraStandardRevisionPrice={setExtraStandardRevisionPrice}
      extraStandardRevision={extraStandardRevision}
      setExtraStandardRevision={setExtraStandardRevision}
      extraPremiumRevisionPrice={extraPremiumRevisionPrice}
      setExtraPremiumRevisionPrice={setExtraPremiumRevisionPrice}
      extraPremiumRevision={extraPremiumRevision}
      setExtraPremiumRevision={setExtraPremiumRevision}
    />,
    <GalleryTab
      images={images}
      setImages={setImages}
      imagePreviews={imagePreviews}
      setImagePreviews={setImagePreviews}
    />,
    <NFTTab />,
    <RequirementsTab />,
    <FAQTab />,
    <PublishTab />,
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center rounded-xl w-fit m-auto bg-white shadow-xl shadow-gray-200 p-3">
        {formSteps.map((step, index) => {
          const stepNumber = index + 1;

          let disabled = false;
          let currentStep = false;
          let completedStep = false;
          if (stepNumber > formStep) {
            disabled = true;
          }
          if (stepNumber === formStep) {
            currentStep = true;
          }
          if (stepNumber < formStep) {
            completedStep = true;
            disabled = true;
          }

          return (
            <GigStepForm
              key={index}
              icon={step.icon}
              title={step.title}
              step={index + 1}
              disabled={disabled}
              currentStep={currentStep}
              completedStep={completedStep}
            />
          );
        })}
      </div>

      <div className="my-10 bg-white shadow-xl shadow-gray-200 p-5 rounded-xl">
        {tabs[formStep - 1]}
      </div>
    </div>
  );
};

export default SellerCreateGig;
