import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
           <Filter/>
           <Filter/>
           <Filter/>
           <Filter/>
           <Filter/>
           <Filter/>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
