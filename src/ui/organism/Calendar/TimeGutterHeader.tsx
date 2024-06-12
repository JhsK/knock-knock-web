function TimeGutterHeader() {
  return (
    <div className="h-full">
      <div className="h-[41.06px] border-b border-black flex items-center pr-1.5 justify-end">
        <span>GMT+9</span>
      </div>
      <div className="flex items-center justify-end pr-1.5 h-8">
        <span>종일</span>
      </div>
    </div>
  );
}

export default TimeGutterHeader;
