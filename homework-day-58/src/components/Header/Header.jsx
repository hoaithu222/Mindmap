import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-20 items-center justify-between p-4 lg:px-12 w-full">
      <div className="text-blue-400 text-2xl font-bold mb-4 lg:mb-0">
        <h2>Mindmap Flow</h2>
      </div>
      <div className="w-full lg:w-auto lg:ml-auto">
        <Menu />
      </div>
    </div>
  );
}
