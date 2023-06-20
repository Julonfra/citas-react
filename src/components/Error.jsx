function Error({ mensaje }) {
  return (
    <div className="bg-red-100 p-5 text-orange-800 mb-4 rounded-md border-t-4 border-red-700">
      <p className="font-bold mb-1">ERROR</p>
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
