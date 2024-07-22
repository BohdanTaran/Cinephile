export const Navbar = () => {
  return (
    <div
      className="flex items-center
          xs:overflow-x-auto justify-start whitespace-nowrap ml-1 mr-1  
          sm:justify-center"
    >
      <ul className="flex gap-10">
        <li className="hover:text-cp-1 ease-in-out duration-200">
          <a href="">Now Playing</a>
        </li>
        <li className="hover:text-cp-1 ease-in-out duration-200">
          <a href="">Popular</a>
        </li>
        <li className="hover:text-cp-1 ease-in-out duration-200">
          <a href="">Top Rated</a>
        </li>
        <li className="hover:text-cp-1 ease-in-out duration-200">
          <a href="">Upcoming</a>
        </li>
      </ul>
    </div>
  );
};
