
const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (    
    <div>
      <h1>Admin felület</h1>
      <p>Üdvözöljük az admin felületen. Itt kezelheti az alkalmazást.</p>
    </div>
    );
}

export default AdminDashboard;