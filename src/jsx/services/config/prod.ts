import { ConfigInterface } from "./";

const dev: ConfigInterface = {
  baseUrl: "http://localhost:3000/api",
  apis: {
    slotDetailApi: "/slot",
    appointmentDetailApi:"/book-appointment",
    updateAppointmentApi:"/book-appointment"
  },
  headers: {
    "Content-Type": "application/json",
    "Authorization":"Bearer "+sessionStorage.getItem("token")

  }
};


export default dev;