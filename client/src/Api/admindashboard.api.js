import API from "./axios";

export const getPendingProperties = () =>
  API.get("/admin/properties/pending");

export const approveProperty = (id) =>
  API.patch(`/admin/properties/${id}/approve`);

export const rejectProperty = (id) =>
  API.patch(`/admin/properties/${id}/reject`);

