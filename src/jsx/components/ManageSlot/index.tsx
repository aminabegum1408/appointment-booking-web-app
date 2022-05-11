// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import _map from "lodash/map";
import AddOrUpdateSlot from "./AddOrUpdateSlot";
import _, { isEmpty } from "lodash";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { RootState } from "../../../rootReducer";
import {
  triggerGetSlotDetail,
  triggerDeleteSlotDetailReq,
} from "../../redux/ManageSlot/SlotActions";
import { FaStream } from "react-icons/fa";

const ManageSlot = () => {
  const [data, setData] = React.useState([]);
  const [totalRecords, setToalRecords] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(12);
  const dispatch = useDispatch();
  const slotDetailList = useSelector(
    (state: RootState) => state.SlotReducer.slotDetailList
  );

  useEffect(() => {
    dispatch(triggerGetSlotDetail());
  }, []);

  if (!isEmpty(slotDetailList)) {
    if (slotDetailList.data !== data) {
      setData(slotDetailList.data);
      setToalRecords(slotDetailList.totalRecords);
    }
  }

  const onPageChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  const [isAddOrUpdateSlot, setIsAddOrUpdateSlot] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedRow, setSelectedRow] = React.useState({});

  const closeModal = () => {
    setPage(1);
    setIsAddOrUpdateSlot(false);
    setSelectedRow({});
  };

  const sort = pageSize;
  //   [1, 2, 3];
  const activePag = useRef(0);
  const activeGridPag = useRef(0);

  const onSelectRowDropDown = (data: any) => {
    console.log(data);
    setSelectedRow(data);
    setActionType("UPDATE");
    setIsAddOrUpdateSlot(true);
  };

  const [searchBy, setSearchBy] = React.useState(null);

  const confimation = (data: any) => {
    swal({
      title: "Do you want delete?",
      text: "",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(triggerDeleteSlotDetailReq(data));
        setPage(1);
        swal("Record is deleted!", {
          icon: "success",
        });
      } else {
        swal("Record is not deleted!");
      }
    });
  };

  return (
    <>
      <div className="row responsive-vh-100 custom-fs-14 mt-md-0 mt-4 pt-md-0 pt-5">
        {!isAddOrUpdateSlot && (
          <div className="col-lg-12">
            <div className="d-flex pt-4 justify-content-between flex-sm-row flex-column">
              <div className="align-items-center col-4">
                <Button className="custom-light" variant="light">
                  <FaStream color="#ED655E" />
                  <i className="las la-bars" style={{ color: "#ED655E" }}></i>
                </Button>
                <b className="ml-2 text-black">Manage Slot</b>
              </div>
              <div
                className="d-flex justify-content-end aling-items-center mt-md-0 mt-4"
                style={{ width: "100%" }}
              >
                <div className="mr-3"></div>
                <div>
                  <button
                    className="btn custom-ligth-orange custom-dropdown-button"
                    style={{ height: "90%", color: "#FFFF", marginRight: 15 }}
                    onClick={() => {
                      setActionType("ADD"), setIsAddOrUpdateSlot(true);
                    }}
                  >
                    + Create
                  </button>
                </div>
              </div>
            </div>
            <br />
            <div className="bg-white rounded responsive-margin-bottom height-auto-fit-to-screen p-3 m-2">
              <>
                <br></br>
                <Table responsive className="w-100">
                  <div
                    id="example_wrapper"
                    className="dataTables_wrapper pb-3 scrollable-content overflow-x-none override"
                  >
                    <table
                      id="example"
                      className="display w-100 dataTable"
                      role="grid"
                      aria-describedby="example_info"
                    >
                      <thead
                        style={{
                          position: "sticky",
                          top: "0",
                          background: "#FFE6E4",
                        }}
                      >
                        <tr>
                          <th>
                            <span> Name </span>
                          </th>
                          <th>Start Date</th>
                          <th>
                            <span> End Date </span>
                          </th>
                          <th>
                            <span> Start Time </span>
                          </th>

                          <th>
                            <span> End Time </span>
                          </th>
                          <th>
                            <span> Session Duration </span>
                          </th>
                          <th>
                            <span> Description </span>
                          </th>
                          <th> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          _map(data, (item: any) => (
                            <tr>
                              <td className="pl-custom-less full-width-text">
                                <span className="ml-2">{item.name}</span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                <span className="ml-2">
                                  {moment(item.start_date).format("DD-MM-YYYY")}
                                </span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                {moment(item.end_date).format("DD-MM-YYYY")}
                              </td>
                              <td className="pl-custom-less full-width-text">
                                {" "}
                                <span className="ml-2">{item.start_time}</span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                {" "}
                                <span className="ml-2">{item.end_time}</span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                {" "}
                                <span className="ml-2">
                                  {item.sessionDuration + " min"}
                                </span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                {" "}
                                <span className="ml-2">{item.description}</span>
                              </td>
                              <td className="pl-custom-less full-width-text">
                                <Dropdown style={{ position: "static" }}>
                                  <Dropdown.Toggle
                                    // variant="light"
                                    style={{
                                      backgroundColor: "#FFE6E4",
                                      color: "#ED655E",
                                      borderColor: "#ED655E",
                                    }}
                                    className="ml-2 icon-false table-dropdown"
                                  >
                                    <svg
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g stroke="none" fill="none">
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#ED655E"
                                          cx="5"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#ED655E"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#ED655E"
                                          cx="19"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      to="#"
                                      onClick={() => {
                                        onSelectRowDropDown(item);
                                      }}
                                    >
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      to="#"
                                      onClick={() => {
                                        confimation(item._id);
                                      }}
                                      className="text-danger"
                                    >
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </Table>
                {/* <div className=" d-flex justify-content-center">
                    <Pagination
                      activePage={page}
                      itemsCountPerPage={pageSize}
                      totalItemsCount={totalRecords}
                      prevPageText="< Prev"
                      nextPageText="Next >"
                      innerClass="pagination w-100"
                      hideFirstLastPages={true}
                      activeClass="active"
                      activeLinkClass="active"
                      itemClassPrev="page-item page-indicator mr-auto pl-4"
                      linkClassPrev="btn btn-light d-flex"
                      itemClassNext="page-item page-indicator ml-auto pr-4"
                      linkClassNext="btn btn-light d-flex"
                      itemClass="page-item page-indicator m-1"
                      linkClass="btn btn-light d-flex"
                      onChange={onPageChange}
                    ></Pagination>
                  </div> */}
              </>
              {/* // )} */}
            </div>
          </div>
        )}
        {isAddOrUpdateSlot && (
          <AddOrUpdateSlot
            actionType={actionType}
            closeModal={closeModal}
            data={selectedRow}
          />
        )}
      </div>
    </>
  );
};
export default ManageSlot;
