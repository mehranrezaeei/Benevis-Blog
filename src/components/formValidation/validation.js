export const signupFormValidation = (
  name,
  email,
  password,
  confirmPassword,
  rolesChecked
) => {
  const errors = {};
  //   Validate Name
  if (!name) {
    errors.name = "وارد کردن نام الزامی است";
  }
  // Validate Email
  if (!email) {
    errors.email = "وارد کردن ایمیل الزامی است";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "آدرس ایمیل وارد شده نامعتبر است";
  }

  //   Validate Password
  if (!password) {
    errors.password = "وارد کردن رمز عبور الزامی است";
  } else if (password.length < 6) {
    errors.password = "رمز عبور وارد شده باید بیشتر از 6 کارکتر باشد ";
  }

  // Validate Confirm Password
  if (!confirmPassword) {
    errors.confirmPassword = "وارد کردن تاید رمز عبور الزامی است";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "تایید رمز عبور با رمز عبور همسان نیست !";
  }
  //   Validate roles and Condition
  if (!rolesChecked) {
    errors.rolesConditions = true;
  }

  return errors;
};
