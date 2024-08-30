export const checkValidData =(email,password,fullname)=>{
    const isEmailVaild = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordVaild =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);

    if(!isEmailVaild) return "Email is not valid";
    if(!isPasswordVaild) return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
    // if(!isFullNameValid) return "Full name should be between 3 and 16 characters long and consist of only letters";

    return null;
};