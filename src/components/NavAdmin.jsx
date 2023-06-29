import { useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom shadow-sm">
      <span>Administration Panel</span>
      <img
        src={`${import.meta.env.VITE_API_IMG}/${user.data.avatar}`}
        alt="Profile"
        className="rounded-circle profile-image"
      />
    </div>
  );
};
