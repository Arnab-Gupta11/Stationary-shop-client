const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 border-2 rounded-md mt-3 px-4">
      <span className="text-2xl font-bold">Task Master</span>
      <div className="space-x-5">
        <span className="text-green-300 dark:text-yellow-500">Home</span>
      </div>
    </div>
  );
};

export default Navbar;
