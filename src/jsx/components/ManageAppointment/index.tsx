import React, { useState, useRef, useEffect } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import _map from "lodash/map";

import _, { isEmpty } from "lodash";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { RootState } from "../../../rootReducer";
import { FaCheck, FaRegTimesCircle, FaStream } from "react-icons/fa";
import {
  triggerGetAppointmentDetails,
  triggerUpdateAppointmentDetail,
} from "../../redux/ManageAppointment/ManageAppointmentActions";
import { updateAppointmentDetailApi } from "../../services/apis/ManageAppointmentApi";

const ManageAppointment = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();

  const appointmentList = useSelector(
    (state: RootState) => state.appointmentReducer.appointmentList
  );

  useEffect(() => {
    dispatch(triggerGetAppointmentDetails());
  }, []);

  if (!isEmpty(appointmentList)) {
    if (appointmentList.data !== data) {
      setData(appointmentList.data);
    }
  }

  const acceptBookingAppointment = (id, startAt, bookingDate, slotId) => {
    let requestPaylaod = {
      slotId: slotId,
      status: "ACCEPTED",
      startAt: startAt,
      bookingDate: bookingDate,
      id: id,
    };
    swal({
      title: "Do you want accept appointment request ?",
      text: "",
      icon: "success",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(triggerUpdateAppointmentDetail(requestPaylaod));

        swal("Appointment is Accepted!", {
          icon: "success",
        });
      }
    });
  };

  const rejectBookingAppointment = (id, startAt, bookingDate, slotId) => {
    let requestPaylaod = {
      slotId: slotId,
      status: "REJECT",
      startAt: startAt,
      bookingDate: bookingDate,
      id: id,
    };
    swal({
      title: "Do you want reject appointment request ?",
      text: "",
      icon: "success",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(triggerUpdateAppointmentDetail(requestPaylaod));

        swal("Appointment is rejected!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="row responsive-vh-100 custom-fs-14 mt-md-0 mt-5 pt-md-0 pt-5">
        <div className="col-lg-12">
          <div className="d-flex pt-4 justify-content-between flex-sm-row flex-column">
            <div className="align-items-center col-4">
              <Button className="custom-light" variant="light">
                <FaStream color="#ED655E" />
              </Button>
              <b className="ml-2 text-black">Manage Appointment</b>
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
                          <span>Name </span>
                        </th>
                        <th>
                          <span>Email </span>
                        </th>
                        <th>
                          <span>Mobile No </span>
                        </th>

                        <th> Date</th>

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
                        <th>
                          <span> Status </span>
                        </th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        _map(data, (item: any) => (
                          <tr>
                            <td className="pl-custom-less full-width-text">
                              <span className="ml-2">{item?.buyer?.name}</span>
                            </td>
                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">{item?.buyer?.email}</span>
                            </td>
                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">
                                {item?.buyer?.mobileNo}
                              </span>
                            </td>
                            <td className="pl-custom-less full-width-text">
                              <span className="ml-2">
                                {moment(item.bookingDate).format("DD-MM-YYYY")}
                              </span>
                            </td>

                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">{item.startAt}</span>
                            </td>
                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">{item.endAt}</span>
                            </td>
                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">
                                {item.sessionDuration + "MIN"}
                              </span>
                            </td>

                            <td className="pl-custom-less full-width-text">
                              {" "}
                              <span className="ml-2">{item.description}</span>
                            </td>
                            <td className="pl-custom-less full-width-text ">
                              {" "}
                              {item.status === "ACCEPTED" ? (
                                <span
                                  className="badge badge-success"
                                  style={{ fontSize: "10px" }}
                                >
                                  {item.status}
                                </span>
                              ) : item.status === "REJECT" ? (
                                <span
                                  className="badge badge-danger"
                                  style={{ fontSize: "10px" }}
                                >
                                  {item.status}
                                </span>
                              ) : (
                                <span
                                  className="badge badge-warning"
                                  style={{ fontSize: "10px" }}
                                >
                                  {item.status}
                                </span>
                              )}
                            </td>
                            <td className="pl-custom-less full-width-text">
                              <FaCheck
                                color="green"
                                onClick={() =>
                                  acceptBookingAppointment(
                                    item._id,
                                    item.startAt,
                                    item.bookingDate,
                                    item.slot
                                  )
                                }
                                style={{ padding: "1px", fontSize: "18px" }}
                              />{" "}
                              <FaRegTimesCircle
                                color="red"
                                style={{ padding: "1px", fontSize: "18px" }}
                                onClick={() =>
                                  rejectBookingAppointment(
                                    item._id,
                                    item.startAt,
                                    item.bookingDate,
                                    item.slot
                                  )
                                }
                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Table>
            </>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageAppointment;
