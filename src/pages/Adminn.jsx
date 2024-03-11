import { useState, useEffect } from 'react';
import '../assets/Adminn.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const AdminBoatsPage = () => {
  const [boats, setBoats] = useState([]);
  const [newBoat, setNewBoat] = useState({
    name: '',
    description: '',
    imageUrl: '',
    // Add more properties as needed
  });
//   const[navigate]=useNavigate();
  // Fetch boats on component mount
  useEffect(() => {
    fetchBoats();
  }, []);
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    window.location.href = "/login";
    // navigate("/");
  };

  const fetchBoats = async () => {
    try {
      // Assuming you have an API endpoint to fetch boats
      const response = await fetch('/api/boats');
      const data = await response.json();
      setBoats(data);
    } catch (error) {
      console.error('Error fetching boats:', error);
    }
  };

  const handleCreateBoat = async () => {
    try {
      // Assuming you have an API endpoint to create a boat
      await fetch('/api/boats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBoat),
      });

      // Refresh the boat list after creating
      fetchBoats();
      // Clear the input fields
      setNewBoat({
        name: '',
        description: '',
        imageUrl: '',
      });
    } catch (error) {
      console.error('Error creating boat:', error);
    }
  };

  const handleDeleteBoat = async (boatId) => {
    try {
      // Assuming you have an API endpoint to delete a boat
      await fetch(`/api/boats/${boatId}`, {
        method: 'DELETE',
      });

      // Refresh the boat list after deleting
      fetchBoats();
    } catch (error) {
      console.error('Error deleting boat:', error);
    }
  };

  // Add more functions for editing boats as needed

  return (
    <div className="admindiv">
      {/* <h1 id="adh1id">Admin Boats Page</h1> */}
      <div className="admincreatediv">
        <h2>Create Boat</h2>
        <input
          type="text"
          placeholder="Name"
          value={newBoat.name}
          required
          onChange={(e) => setNewBoat({ ...newBoat, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBoat.description}
          required
          onChange={(e) => setNewBoat({ ...newBoat, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBoat.imageUrl}
          required
          onChange={(e) => setNewBoat({ ...newBoat, imageUrl: e.target.value })}
        />
        <button onClick={handleCreateBoat}>Create</button>
      </div>
      <div className="admineditfield">
  <h2>Edit Boat</h2>
  {/* Assuming you have a state variable for the boat to be edited, replace 'editedBoat' with your state variable */}
  <input
    type="text"
    placeholder="Name"
    // value={editedBoat.name}
    required
    readOnly
  />
  <input
    type="text"
    placeholder="Description"
    required
    // value={editedBoat.description}
    readOnly
  />
  <input
    type="text"
    placeholder="Image URL"
    // value={editedBoat.imageUrl}
    required
    readOnly
  />
  <button >Save Changes</button>
</div>
<div className="admindeletefield">
  <h2>Delete Boat</h2>
  <input
    type="text"
    placeholder="Boat Name"
    required
    // value={boatNameToDelete}
    // onChange={(e) => setBoatNameToDelete(e.target.value)}
  />
  <input id="reasonfordeletefield"
    placeholder="Reason for Deletion"
    required
    // value={deletionReason}
    // onChange={(e) => setDeletionReason(e.target.value)}
  ></input>
  <button onClick={handleDeleteBoat}>Delete</button>
</div>
<div className="adminlogout">
        <button onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default AdminBoatsPage;
