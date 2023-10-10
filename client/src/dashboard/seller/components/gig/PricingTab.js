import React from "react";
import { LightBulbIcon, PencilIcon } from "@heroicons/react/24/outline";

const PricingTab = () => {
  return (
    <div id="overview">
      <div className="p-4 text-3xl border-b mb-6 pt-2 text-gray-800 font-normal border-gray-100">
        <h2>Scope & Pricing</h2>
      </div>

      <div class="flex justify-between">
        <div class="text-gray-600 p-4 md:w-3/4 w-full">
          <div className="flex justify-between items-center">
            <div className="font-bold text-sm mb-2 block">Packages</div>
            <div className="flex items-center gap-2">
              <span className="text-sm">3 packages</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
              </label>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="overflow-x-auto w-full">
              <table
                className="border-collapse border border-gray-300 text-left w-full text-sm"
                cellPadding={0}
              >
                <thead>
                  <tr>
                    <th className="bg-gray-50"></th>
                    <th className="border-collapse border border-gray-300 pl-4 py-7 bg-gray-100">
                      BASIC
                    </th>
                    <th className="border-collapse border border-gray-300 pl-4 py-7 bg-gray-100">
                      STANDARD
                    </th>
                    <th className="border-collapse border border-gray-300 pl-4 py-7 bg-gray-100">
                      PREMIUM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-gray-50 p-0"></td>
                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Name your package"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={4}
                        ></textarea>
                      </div>
                    </td>
                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Name your package"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={4}
                        ></textarea>
                      </div>
                    </td>
                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Name your package"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={4}
                        ></textarea>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50"></td>

                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Describe the details of your offering"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={6}
                        ></textarea>
                      </div>
                    </td>

                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Describe the details of your offering"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={6}
                        ></textarea>
                      </div>
                    </td>

                    <td className="border-collapse border border-gray-300 p-0">
                      <div className="relative">
                        <span className="absolute right-2 top-2">
                          <PencilIcon className="w-4 fill-gray-200" />
                        </span>
                        <textarea
                          placeholder="Describe the details of your offering"
                          className="w-full resize-none p-1.5 pr-5 outline-none h-full"
                          rows={6}
                        ></textarea>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50"></td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-5">
                        <option value="" selected>
                          Delivery time
                        </option>
                        <option value="1 Day">1 Day</option>
                        <option value="4 Days">4 Day</option>
                        <option value="7 Days">7 Day</option>
                      </select>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-5">
                        <option value="" selected>
                          Delivery time
                        </option>
                        <option value="1 Day">1 Day</option>
                        <option value="4 Days">4 Day</option>
                        <option value="7 Days">7 Day</option>
                      </select>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-5">
                        <option value="" selected>
                          Delivery time
                        </option>
                        <option value="1 Day">1 Day</option>
                        <option value="4 Days">4 Day</option>
                        <option value="7 Days">7 Day</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-3 py-7 font-semibold">
                      Support
                    </td>

                    <td className="border-collapse border border-gray-300">
                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          className="h-5 w-5 border-gray-100 border cursor-pointer accent-nft-primary-light"
                        />
                      </div>
                    </td>

                    <td className="border-collapse border border-gray-300">
                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          className="h-5 w-5 border-gray-100 border cursor-pointer accent-nft-primary-light"
                        />
                      </div>
                    </td>

                    <td className="border-collapse border border-gray-300">
                      <div className="flex justify-center items-center">
                        <input
                          type="checkbox"
                          className="h-5 w-5 border-gray-100 border cursor-pointer accent-nft-primary-light"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-3 py-7 font-semibold">
                      Revisions
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-7">
                        <option value="" selected>
                          Select
                        </option>
                        <option value="None">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-7">
                        <option value="" selected>
                          Select
                        </option>
                        <option value="None">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <select className="w-full p-3 font-semibold outline-none cursor-pointer py-7">
                        <option value="" selected>
                          Select
                        </option>
                        <option value="None">None</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-gray-50 px-3 py-7 font-semibold">
                      Price
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <div className="flex items-center h-full w-full p-3">
                        <input
                          type="number"
                          min={5}
                          className="p-3 pl-0 w-full h-full outline-none font-semibold"
                        />
                        <span className="font-semibold">$</span>
                      </div>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <div className="flex items-center h-full w-full p-3">
                        <input
                          type="number"
                          min={5}
                          className="p-3 pl-0 w-full h-full outline-none font-semibold"
                        />
                        <span className="font-semibold">$</span>
                      </div>
                    </td>
                    <td className="border-collapse border border-gray-300">
                      <div className="flex items-center h-full w-full p-3">
                        <input
                          type="number"
                          min={5}
                          className="p-3 pl-0 w-full h-full outline-none font-semibold"
                        />
                        <span className="font-semibold">$</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-sm font-semibold mt-14">
                Add extra services
              </h3>

              <div className="border border-gray-300 bg-white text-sm mt-6">
                <div>
                  <div className="flex gap-3 items-center p-4 py-6 border-b">
                    <div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 border cursor-pointer accent-nft-primary-light"
                        checked
                      />
                    </div>
                    <div className="font-medium">Extra fast delivery</div>
                  </div>

                  <div className="bg-gray-100 p-4 pl-11 border-b border-gray-300">
                    <div className="flex justify-between items-center mb-4">
                      <div>Basic</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>Standard</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>Premium</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-center p-4 py-6">
                    <div>
                      <input
                        type="checkbox"
                        className="h-4 w-4 border cursor-pointer accent-nft-primary-light"
                      />
                    </div>
                    <div className="font-medium">Additional revision</div>
                  </div>

                  <div className="bg-gray-100 p-4 pl-11 border-b border-gray-300 hidden">
                    <div className="flex justify-between items-center mb-4">
                      <div>Basic</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>Standard</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>Premium</div>
                      <div className="flex gap-3 items-center">
                        <div>I'll deliver in only</div>
                        <div>
                          <select className="p-2 border border-gray-300 rounded-md outline-none cursor-pointer w-32 focus:ring-2 focus:ring-nft-primary-light">
                            <option value="" selected>
                              SELECT
                            </option>
                            <option value="1 Day">1 Day</option>
                            <option value="2 Days">2 Days</option>
                            <option value="3 Days">3 Days</option>
                            <option value="4 Days">4 Days</option>
                          </select>
                        </div>
                        <div>for an extra</div>
                        <div>
                          <input
                            type="number"
                            className="p-2 border border-gray-300 rounded-md outline-none w-32 focus:ring-2 focus:ring-nft-primary-light"
                          />
                        </div>
                        <div>$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 md:w-1/4 md:block hidden">
          <div className="flex justify-center items-center sticky top-0">
            <div className=" bg-purple-200 w-full p-3 rounded-xl">
              <div className="text-center -mt-8">
                <span className="rounded-full bg-nft-primary-light p-2 inline-block">
                  <LightBulbIcon className=" w-7 h-7 text-white" />
                </span>
              </div>

              <div>
                <h2 className="text-center font-semibold mb-3 text-gray-600">
                  Start Defining Your Gig
                </h2>
                <div>
                  <ul className="list-disc px-7 pb-0 pt-0 text-md text-gray-600">
                    <li className="mb-2">Choose a catchy title.</li>
                    <li className="mb-2">
                      Choose a category and subcategory that best describe
                    </li>
                    <li className="mb-2">
                      Add metadata tags to help buyers find your gig in
                    </li>
                    <li className="mb-2">
                      Add tags that describe your gig. Use letters and numbers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTab;
