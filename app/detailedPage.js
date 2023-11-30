import TitleAndSubtitleCard from "@/components/GeneralComponents/TitleAndSubtitle";
import { useParams } from "react-router-dom";

const ClipBoardIcon = () => (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="dark"
    viewBox="0 0 18 20"
  >
    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
  </svg>
);
const UserIcon = () => (
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="#0074e8"
    viewBox="0 0 14 18"
  >
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
  </svg>
);

export default function DetailedPage() {
  const { id } = useParams();
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    fetch("/path/to/your/json/file.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedData = data.find((taskData) => taskData.id === id);
        setTaskData(selectedData);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!taskData) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    // Main Container
    <div className="container flex h-screen ">
      <div className="container h-full w-2/3 mx-auto bg-gray-50">
        {/* TO BE: Identifier Component */}
        <TitleAndSubtitleCard
          Icon={ClipBoardIcon}
          title="Alex Azubi"
          subtitle="Taskmanager"
          containerClassName="border-t flex p-3"
        />

        {/* MainCard */}
        <div className="p-3  ">
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
              <h3 className="font-roboto text-sky-800  ">
                Bitte prüfe das Alter des Patienten
              </h3>
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
              <h4 className="text-xs ">Ausschnitt aus der Patientenakte </h4>
              <span className="flex items-center text-blue-400 underline">
                <h3 className="text-xs">zum Vertrag </h3>
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
            <div className="bg-white border border-gray-200 rounded-xl  sm:p-8 mt-1  ">
              <TitleAndSubtitleCard
                containerClassName="flex"
                Icon={UserIcon}
                title={"Versicherte Person"}
                titleClassName={"font-bold text-sky-600 text-xs"}
                subtitle={taskData.Name}
              />
              <div>
                <div className="content mb-2 space-y-2">
                  <h3>Geburtsdatum</h3>
                  <h3>{taskData.Birthdate}</h3>
                </div>
                <div className="content mb-2 space-y-2">
                  <h4>Versichertennr</h4>
                  <h3>{taskData["Contract Number"]}</h3>
                </div>
                <div className="content mb-2 space-y-2">
                  <h4>OCR Birthdate</h4>
                  <h3>{taskData["OCR birthdate"]}</h3>
                </div>
                <div className="content mb-2 space-y-2">
                  <h4>Geschlecht</h4>
                  <h3>{taskData.Sex}</h3>
                </div>
                <div className="content mb-2 space-y-2">
                  <h4>Adresse</h4>
                  <h3>{taskData.Address}</h3>
                </div>
                <div className="content mb-2 space-y-2">
                  <h4>Geburtsdatum</h4>
                  <h3>{taskData["Date inserted"]}</h3>
                </div>
                <h4>Date Updated</h4>
                <h3>{taskData["Date updated"]}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
