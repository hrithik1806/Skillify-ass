import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import BarGraph from "../../components/featured/Bargraph";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Bar } from "recharts";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          <BarGraph />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
