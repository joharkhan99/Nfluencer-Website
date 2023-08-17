import Table from "./Table";
import "../../styles/table.css";

const columns = [
  { label: "#", accessor: "s_no", sortable: false },
  { label: "Collection", accessor: "name", sortable: true },
  { label: "Volume", accessor: "country", sortable: true },
  { label: "% Change", accessor: "github_username", sortable: true },
  { label: "Floor price", accessor: "money", sortable: true },
  { label: "Sales", accessor: "sales", sortable: true },
];

const data = [
  {
    id: 1,
    s_no: 1,
    name: "Abbie",
    country: "Russia",
    github_username: "acordobes0",
    money: "$5.33",
    sales: 10,
  },
  {
    id: 2,
    s_no: 2,
    name: "Adam",
    country: "Philippines",
    github_username: "abalke1",
    money: "$7.53",
    sales: 20,
  },
  {
    id: 3,
    s_no: 3,
    name: "Ulric",
    country: "Indonesia",
    github_username: "ubruce2",
    money: "$1.55",
    sales: 30,
  },
  {
    id: 4,
    s_no: 4,
    name: "Rani",
    country: "Portugal",
    github_username: "rfirsby3",
    money: "$1.46",
    sales: 70,
  },
];

const StatsTable = () => {
  return (
    <>
      <Table
        caption="List of developers with an affordable course (has no default sorting)."
        data={data}
        columns={columns}
      />
    </>
  );
};

export default StatsTable;
