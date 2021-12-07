const authHeader = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};

export default authHeader;

// `Bearer ${token}`  -- > "Bearer " + token   şeklin de de yazabiliriz...
