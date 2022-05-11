import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { REGEX_CONSTANT } from "../../../utils/constant";
import _ from "lodash";
import DateFnsUtils from "@date-io/date-fns";
import { ErrorMessage } from "@hookform/error-message";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  triggerAddSlotDetailReq,
  triggerUpdateSlotDetailReq,
} from "../../redux/ManageSlot/SlotActions";
import { useForm, Controller } from "react-hook-form";

const AddOrUpdateSlot = (props: any) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: props.data?.name,
      start_date: props.data?.start_date,
      end_date: props.data?.end_date,
      start_time: props.data?.start_time,
      end_time: props.data?.end_time,
      description: props.data?.description,
      _id: props.data?._id,
      sessionDuration: props.data?.sessionDuration,
      startTimeA: "am",
      endTimeA: "pm",
    },
  });

  const saveSlot = (value) => {
    let payload = value;
    payload["start_time"] = value.start_time + " " + value.startTimeA;
    payload["end_time"] = value.end_time + " " + value.endTimeA;
    payload["status"] = true;
    if (props.actionType === "ADD") {
      dispatch(triggerAddSlotDetailReq(payload));
    } else if (props.actionType === "UPDATE") {
      dispatch(triggerUpdateSlotDetailReq(payload));
    }
    props.closeModal();
  };

  const getValidationError = (errors, name) => {
    return (
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p style={{ color: "#bf1650", fontWeight: "bold" }}>
            <i className="las la-exclamation"></i>
            {message}
          </p>
        )}
      />
    );
  };
  const requiredInput = { value: true, message: "Required" };
  return (
    <>
      <div className="d-none">
        <h5 className="title">
          {props.actionType === "ADD" ? "Add New Contact" : "Edit Contact"}
        </h5>
        <button
          type="button"
          onClick={() => props.closeModal()}
          className="close"
          data-dismiss="modal"
        >
          <span>&times;</span>
        </button>
      </div>
      <div className="modal-body col-lg-12 p-5 m-5 bg-white rounded modal-body-overflow bg-white">
        {props.actionType === "ADD" && (
          <div className="row mb-3">
            <div className="col-6">
              <h4>Create Slot</h4>
            </div>
            <div className="col-6">
              <button
                type="button"
                onClick={() => props.closeModal()}
                className="close d-flex"
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
        )}
        {props.actionType === "UPDATE" && (
          <div className="row mb-3">
            <div className="col-6">
              <h4>Update Slot</h4>
            </div>
            <div className="col-6">
              <button
                type="button"
                onClick={() => props.closeModal()}
                className="close d-flex"
                data-dismiss="modal"
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit(saveSlot)}>
          <div className="px-4">
            <div className="d-flex flex-lg-row flex-column align-items-center">
              <div className="d-flex align-items-end w-100 mr-lg-4">
                <div className="w-75">
                  <label className="text-black">
                    Slot Name <span className="required">*</span>
                  </label>

                  <div className="input-container">
                    <input
                      type="text"
                      className=" input-field w-75"
                      {...register("name", {
                        required: requiredInput,
                        pattern: {
                          value: new RegExp(
                            REGEX_CONSTANT.ONLY_ALPHABETWITHSPACE
                          ),
                          message: "Invalid Slot Name",
                        },
                      })}
                    />
                    <i className="las la-id-card"></i>
                  </div>
                  {getValidationError(errors, "name")}
                </div>
                <div className="w-75">
                  <label className="text-black">
                    Session Duration <span className="required">*</span>
                  </label>

                  <div className="input-container">
                    <input
                      type="text"
                      className=" input-field w-75"
                      {...register("sessionDuration", {
                        required: requiredInput,
                        pattern: {
                          value: new RegExp(REGEX_CONSTANT.ONLY_NUMBER),
                          message: "Invalid sessionDuration",
                        },
                      })}
                    />
                    <i className="las la-id-card"></i>
                  </div>
                  {getValidationError(errors, "sessionDuration")}
                </div>
              </div>
            </div>

            <div className="d-flex flex-lg-row flex-column mt-3">
              <div className="w-50 mt-lg-0 mt-4 mr-4">
                <label className="text-black font-w500">Start Date</label>
                <div className="input-container w-75">
                  <Controller
                    name="start_date"
                    control={control}
                    defaultValue={null}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          label=""
                          clearable
                          className="w-75"
                          format="yyyy-MM-dd"
                          value={value}
                          onChange={onChange}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                    rules={{ required: "Current Stage required" }}
                  />
                </div>
                {getValidationError(errors, "start_date")}
              </div>
              <div className="w-50 mt-lg-0 mt-4 mr-4">
                <label className="text-black font-w500">End Date</label>
                <div className="input-container w-75">
                  <Controller
                    name="end_date"
                    control={control}
                    defaultValue={null}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          label=""
                          clearable
                          className="w-75"
                          format="yyyy-MM-dd"
                          value={value}
                          onChange={onChange}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                    rules={{ required: "End Date required" }}
                  />
                </div>
                {getValidationError(errors, "end_date")}
              </div>
            </div>
            <div className="d-flex flex-lg-row flex-column mt-3">
              <div className="w-100 mr-lg-2 mr-0">
                <label className="text-black">Start Time</label>
                <div className="input-container">
                  <input
                    type="text"
                    style={{"width":"270px"}}
                    className="input-field"
                    {...register("start_time", {
                      required: requiredInput,
                    })}
                  />
                </div>
                {getValidationError(errors, "start_time")}
              </div>
              <div className="w-100 mr-lg-4">
                <label className="text-black"></label>
                <div className="input-container">
                  <select
                    className="input-field w-fit-content bg-white border"
                    {...register("startTimeA")}
                  >
                    <option selected={true} key={"am"} value={"am"}>
                      AM
                    </option>
                    <option key={"pm"} value={"pm"}>
                      PM
                    </option>
                  </select>
                </div>
                {getValidationError(errors, "startTimeA")}
              </div>
              <div className="w-100 mt-lg-0 mt-4">
                <label className="text-black">
                  End Time <span className="required">*</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    style={{"width":"270px"}}
                    className=" input-field"
                    {...register("end_time", {
                      required: requiredInput,
                    })}
                  />
                </div>
                {getValidationError(errors, "end_time")}
              </div>
              <div className="w-100 mr-lg-4">
                <label className="text-black"></label>
                <div className="input-container">
                  <select
                    className="input-field w-fit-content bg-white border"
                    {...register("endTimeA")}
                  >
                    <option selected={true} key={"am"} value={"am"}>
                      AM
                    </option>
                    <option key={"pm"} value={"pm"}>
                      PM
                    </option>
                  </select>
                </div>
                {getValidationError(errors, "endTimeA")}
              </div>
            </div>

            <div className="mt-3 w-50">
              <label className="text-black">Description</label>
              <div className="input-container">
                <textarea
                  className="input-field"
                  {...register("description")}
                />
              </div>
            </div>

            {props.actionType === "ADD" && (
              <>
                <div className="form-group ">
                  <div className="row">
                    <div className="col-6 text-left">
                      <button
                        type="button"
                        className="btn btn-light w-100 py-3"
                        onClick={() => props.closeModal()}
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-6 text-right">
                      <button
                        type="submit"
                        className="btn custom-ligth-orange custom-dropdown-button  w-100 py-3"
                        style={{ height: "90%", color: "#FFFF" }}
                      >
                        Add Slot
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {props.actionType === "UPDATE" && (
            <>
              <div className="row p-0 border-top">
                <div className="col-6 text-left">
                  <button
                    type="button"
                    className="btn rounded-0 btn-light w-100 py-3"
                    onClick={() => props.closeModal()}
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6 px-0 text-right">
                  <button
                    className="btn custom-ligth-orange custom-dropdown-button  w-100 py-3"
                    style={{ height: "90%", color: "#FFFF" }}
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
      {/* </Modal> */}
    </>
  );
};

export default AddOrUpdateSlot;
