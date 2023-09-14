import GridView from "../components/GridView";

function Apartments({ apartments }) {
  const fields = ["Address", "RentalPrice", "NumberOfRooms"];

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <GridView fields={fields} data={apartments} title={"Apartments"} />
    </div>
  );
}

export default Apartments;
