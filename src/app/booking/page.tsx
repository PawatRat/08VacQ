import styles from "./booking.module.css";
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";

export default function Booking() {
  return (
    <form>
    <main className="w-[70%] flex flex-col items-center space-y-4 mt-5 ml-auto mr-auto">

        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">
          New Booking
        </div>
        <div className="w-100% space-y-2">
            <div className="text-md text-left text-gray-600">
                Booking Date and Location
            </div>
            <DateReserve />
        </div>

        <div className="w-100% space-y-2">
            <div className="text-md text-left text-gray-600">
                    Put your Name and Lastname
            </div>
            <div className="bg-slate-100 rounded-1g space-x-5 space-y-2 w-fit px-10 py-5 justify-center">
            <TextField
                id="standard-basic"
                name="Name-Lastname"
                label="Name-Lastname"
                rows={1}
                variant="standard"
                style={{ width: '451px' }}
                />
            </div>
        </div>

        <div className="w-100% space-y-2">
            <div className="text-md text-left text-gray-600">
                    Put your Citizen ID
            </div>
            <div className="bg-slate-100 rounded-1g space-x-5 space-y-2 w-fit px-10 py-5 justify-center">
            <TextField
                id="standard-basic"
                name="Citizen ID"
                label="Citizen ID"
                multiline
                rows={1}
                variant="standard"
                style={{ width: '451px' }}
            />
            </div>
        </div>





        <button
          name="Book Vaccine"
          className="block rounded-md bg-black hover:bg-white hover:text-black px-3 py-2 shadow-sm text-white border border-black"
        >
          Book Vaccine
        </button>

    </main>
    </form>
  );
}
