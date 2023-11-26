import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to our blood donation website, where every drop counts, and every act of kindness can save a life. We believe in the power of compassion and community, and we're here to connect generous donors with those in need. Join us in our mission to make a difference, one donation at a time. Whether you're a first-time donor or a dedicated regular, your contribution can be a lifeline for someone in crisis. Explore our site to learn more about the importance of blood donation, how to get involved, and the impact you can make. Together, we can be the difference between hope and despair, and together, we can be heroes. Donate today and be a part of something greater than yourself.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;