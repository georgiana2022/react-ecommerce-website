export class ValidationConstants {
  public static emailPatern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  public static passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

}