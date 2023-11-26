import Image from "next/image";

export default function Home() {
  return (
    // Main Container
    <div className="container h-screen mx-auto bg-gray-50">
      {/* TO BE: Identifier Component */}
      <div className="border-t flex p-3 ">
        <div className="flex w-10 h-10 rounded-md bg-gray-200 shadow-sm  justify-center items-center">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="dark"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <div className="leading-4 ml-2">
            <h4 className="font-roboto text-black  ">Alex Azubi</h4>
            <span className="text-xs text-sky-600 font-roboto">
              Taskmanager
            </span>
          </div>
          {/* <MoreVertical size={20} /> */}
        </div>
      </div>
      {/* MainCard */}
      <div className="p-3 w-3/6 ">
        {/* MainCard - HEADER */}
        <div className=" bg-sky-100 p-3 rounded-t-xl ">
          {/* Icon + Title */}
          <div className=" flex">
            <svg
              class="w-5 h-5 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="rgba(0, 77, 153, 1)"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
            <h4 className="font-roboto text-sky-800  ">
              Bitte prüfe das Alter des Patienten
            </h4>
          </div>
          {/* Header SubText */}
          <span className="text-xs text-black font-roboto ">
            Regel 334: Die GOZ 2000 ist nur vom 7. bis 18. Lebensjahr
            abrechenbar. Bei Versicherten unter 6 Jahren nur abrechenbar bei
            vorzeitigem Durchbruch des 6-Jahres-Molaren.
          </span>
        </div>
        {/* MainCard - BODY */}
        <div class=" text-center bg-white border border-gray-200 rounded-b-xl  sm:p-8  ">
          {/* Ausschnitt aus der Patientenakte - Excerpt from the patient file - Card  TO DO: <PatientFile/>*/}
          <div class="flex p-3 text-black bg-white border border-gray-300 rounded-lg shadow-xl justify-between ">
            <h4 className="text-xs font-bold">
              Ausschnitt aus der Patientenakte{" "}
            </h4>
            <span className="flex items-center text-blue-400 underline">
              <h4 className="text-xs">zum Vertrag </h4>
              <svg
                className="w-2 h-2 ml-1 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke=" rgba(0, 96, 165, 250 )"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
