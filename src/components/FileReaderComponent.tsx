import { JSX } from "preact";

type FileReaderComponentProps = {
  onFileContentChange: (fileContent: string | null) => void;
};

export function FileReaderComponent(
  props: FileReaderComponentProps,
): JSX.Element {
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

  return <input type="file" onChange={handleFileChange} />;
}
