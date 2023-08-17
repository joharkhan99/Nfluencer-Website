import { StarIcon } from "@heroicons/react/20/solid";

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id} className="text-start">
            {columns.map(({ accessor }) => {
              console.log(data[accessor]);
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td
                  key={accessor}
                  className={accessor === "s_no" ? "w-12" : ""}
                >
                  {tData}
                </td>
              );
            })}
            <td>
              <button className="border-none m-0 p-0 transition-opacity">
                <StarIcon
                  fill="transparent"
                  stroke="black"
                  height={20}
                  width={20}
                  strokeWidth={2}
                  className="hover:opacity-75"
                />
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
