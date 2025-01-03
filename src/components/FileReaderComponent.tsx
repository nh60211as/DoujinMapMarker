import { JSX } from "preact";
import { useRef } from "preact/hooks";

type FileReaderComponentProps = {
  onFileContentChange: (fileContent: string | null) => void;
};

export function FileReaderComponent(
  props: FileReaderComponentProps,
): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger the file input click when the button is clicked
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle the file input change event
  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0]; // Get the first file selected

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        props.onFileContentChange(reader.result as string);
      };

      reader.onerror = () => {
        console.error("Error reading file");
      };

      // Read the file as text (or other formats depending on your needs)
      reader.readAsText(file);
    }
  };

  return (
    <>
      <button onClick={handleButtonClick}>選擇檔案</button>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
}
