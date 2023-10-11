import Groups from "./components/groups";

export default function Home() {
  return (
    <div className="flex justify-center w-1/3 mx-10">
      <div className="max-h-screen overflow-auto h-screen sm:h-[700px]">
        <Groups />
      </div>


      <div className="flex items-center fixed bottom-4 dash_text font-semibold">
        <button className="flex items-center hover:bg-light_green rounded-lg shadow-xl px-4 border">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="mr-2">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
          </svg>
          Add new group
        </button>
      </div>
    </div>
  );
}
