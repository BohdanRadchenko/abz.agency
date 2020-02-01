export const createFormData = (form) => {
  const formData = new FormData();
  formData.append('position_id', form.positions_id);
  formData.append('name', form.name);
  formData.append('email', form.email);
  formData.append('phone', form.phone);
  formData.append('photo', form.photo);
  return formData
};

