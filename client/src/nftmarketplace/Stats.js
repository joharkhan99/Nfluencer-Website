import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DropDown from "./components/dropdown";

const Stats = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header transparent={true} />
      <div className="mt-10">
        <div className="container mx-auto">
          <div class="mb-11">
            <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
              Collection stats
            </h1>
          </div>

          <div className="flex flex-wrap">
            <Tabs className="w-full" selectedTabClassName="active-tab-look">
              <TabList className="border-b border-gray-200 w-full pb-7 mb-7">
                <Tab className="list-none rounded-lg px-6 py-3 text-gray-400 font-semibold inline-block relative cursor-pointer hover:text-black transition-colors">
                  Trending
                </Tab>
                <Tab className="list-none rounded-lg px-6 py-3 text-gray-400 font-semibold inline-block relative cursor-pointer hover:text-black transition-colors">
                  Top
                </Tab>
                <Tab className="list-none rounded-lg px-6 py-3 text-gray-400 font-semibold inline-block relative cursor-pointer hover:text-black transition-colors">
                  Watchlist
                </Tab>
              </TabList>

              <div className="flex justify-between">
                <div className="flex">
                  <div>
                    <DropDown />
                  </div>
                  <div>
                    <div className="bg-gray-100 p-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleChange}
                          className={"hidden w-4 h-4"}
                        />
                        <span
                          className={`rounded-xl outline-none ${
                            selectedOption === "option1"
                              ? "bg-white"
                              : "bg-transparent"
                          }`}
                        >
                          Option 1
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleChange}
                          className={"hidden w-4 h-4"}
                        />
                        <span
                          className={`rounded-xl outline-none ${
                            selectedOption === "option2"
                              ? "bg-white"
                              : "bg-transparent"
                          }`}
                        >
                          Option 1
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>

              <TabPanel>Trending</TabPanel>

              <TabPanel>Top</TabPanel>
              <TabPanel>Watchlist</TabPanel>
            </Tabs>
          </div>

          <div className="text-center mt-14">
            <button class="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-1/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stats;
