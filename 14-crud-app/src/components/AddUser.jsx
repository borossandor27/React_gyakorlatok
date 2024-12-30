import 'bootstrap/dist/css/bootstrap.min.css';

import './AddUser.css';

const AddUser = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h3 className="card-title mb-0">Add User</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="home" className="form-label">Home:</label>
                            <input type="text" className="form-control" id="home" placeholder="Enter home address" />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddUser;