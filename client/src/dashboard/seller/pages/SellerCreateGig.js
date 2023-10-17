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
    <PricingTab />,
    <GalleryTab />,
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
