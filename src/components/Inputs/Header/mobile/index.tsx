function MobileHeader() {
  return (
    <div>
      <div className="p-3 flex items-center h-[50px] border-b border-gray-300">
        <div className="w-[15%]">
          <div className="avatar bg-red-500 rounded-full h-8 w-8"></div>
        </div>
        <div className="name w-full pl-2">
          <h1>Socula Conect</h1>
        </div>
        <div className="icons flex gap-2">
          <div className="avatar bg-red-500 rounded-full h-8 w-8"></div>
          <div className="avatar bg-red-500 rounded-full h-8 w-8"></div>
          <div className="avatar bg-red-500 rounded-full h-8 w-8"></div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
