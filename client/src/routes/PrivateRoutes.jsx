import { Navigate } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/auth" />; // not logged in
  if (role && user.role !== role) return <Navigate to="/" />; // wrong role

  return children;
};


// const PrivateRoute = ({ role, children }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (!user) return <Navigate to="/auth" />;

//   if (role && !role.includes(user.role)) return <Navigate to="/" />;

//   return children;
// };


export default PrivateRoute;
