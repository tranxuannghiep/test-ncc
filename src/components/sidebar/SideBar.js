import "./SideBar.scss";
const SideBar = () => {
  return (
    <>
      <div id="SideBar">
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Services</span>
          </li>
          <li>
            <span>News</span>
          </li>
          <li>
            <span>Blog</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
        <div className="icons">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default SideBar;
