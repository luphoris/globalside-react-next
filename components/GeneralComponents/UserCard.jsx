import { useCollapse } from "react-collapsed";
import { BrowserRouter, Link, BrowserRouter as Router } from "react-router-dom";

const UserCard = ({ item }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <BrowserRouter>
      <div className="  border border-gray-200 rounded-xl w-1/2  sm:p-8 mt-1 text-black">
        <div className="header flex space-x-3 mb-4" {...getToggleProps()}>
          <h4 className="">{item.Name}</h4>
          <h4>{item.Status}</h4>
          <h4>{item.Phone}</h4>
        </div>
        <div
          {...getCollapseProps()}
          className="flex justify-between sm:p-8 mt-1 "
        >
          <div>
            <div className="content mb-2 space-y-2">
              <h3>Geburtsdatum</h3>
              <h3>{item.Birthdate}</h3>
            </div>
            <div className="content mb-2 space-y-2">
              <h4>Versichertennr</h4>
              <h3>{item["Contract Number"]}</h3>
            </div>
            <div className="content mb-2 space-y-2">
              <h4>OCR Birthdate</h4>
              <h3>{item["OCR birthdate"]}</h3>
            </div>
            <div className="content mb-2 space-y-2">
              <h4>Geschlecht</h4>
              <h3>{item.Sex}</h3>
            </div>
            <div className="content mb-2 space-y-2">
              <h4>Adresse</h4>
              <h3>{item.Address}</h3>
            </div>
            <div className="content mb-2 space-y-2">
              <h4>Geburtsdatum</h4>
              <h3>{item["Date inserted"]}</h3>
            </div>
            <h4>Date Updated</h4>
            <h3>{item["Date updated"]}</h3>
          </div>
          <div>
            <Link to={`/landingPage/${item.ID}`}>
              <button
                // onClick={con}
                class="bg-mockup-blue hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                View Task Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default UserCard;
