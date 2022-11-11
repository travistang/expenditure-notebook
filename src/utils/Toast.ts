import toast from "react-hot-toast";

type ToastCallbackProps = {
  successMessage: string;
  failMessage?: string;
};
export const promiseWithToast = async <T>(
  promise: Promise<T>,
  { successMessage, failMessage }: ToastCallbackProps
) => {
  try {
    const result = await promise;
    toast.success(successMessage);
    return result;
  } catch (e) {
    toast.error(failMessage ?? "Something went wrong...");
  }
};
