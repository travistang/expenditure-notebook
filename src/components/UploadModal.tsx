import React from "react";
import toast from "react-hot-toast";
import QrReader from "react-qr-reader";
import { LocalStorageContext } from "../contexts/LocalStorageContext";
import Modal, { ModalControlProps } from "./Modal";

type Props = ModalControlProps;
type QRCodeType = {
  url: string;
  key: string;
};
export default function UploadModal({ opened, onClose }: Props) {
  const { store } = React.useContext(LocalStorageContext);
  const onQRReaderError = (error: any) => {
    toast.error(error?.message ?? "Error with QR code");
  };

  const onQRDetected = async (data: any) => {
    if (data) {
      const decodedData = JSON.parse(data) as QRCodeType;
      if (!decodedData?.url || !decodedData?.key) {
        throw new Error();
      }

      try {
        const response = await fetch(decodedData.url, {
          method: "POST",
          body: JSON.stringify(store),
        });
        const responseJson = await response.json();
        toast.success("Code detected");
        onClose();
      } catch (e) {
        toast.error(`Error scanning QR Code: ${(e as Error).message}`);
      }
    }
  };
  return (
    <Modal title="Upload record" opened={opened} onClose={onClose}>
      <span className="text-sm font-bold text-color-300 leading-4">
        Upload expenditure records on this device to server by sending its QR
        code.
      </span>
      <QrReader
        className="mt-4 rounded-lg w-full overflow-hidden"
        onError={onQRReaderError}
        onScan={onQRDetected}
      />
    </Modal>
  );
}
