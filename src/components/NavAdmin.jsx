import Img from "../img/perfil-pedorro.png";
export default () => (
  <div className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom shadow-sm">
    <span>Administration Panel</span>

    <img src={Img} alt="Profile" className="rounded-circle profile-image" />
  </div>
);
