import { JSX } from "preact";
import { DebounceInput } from "react-debounce-input";
import "./SearchModal.css";

type SearchModalProps = {
  openModal: boolean;
  onModalClose: () => void;
  onSearchContentChange: (content: string) => void;
};

export function SearchModal(props: SearchModalProps): JSX.Element {
  return (
    <div
      class="modalBackground"
      onClick={props.onModalClose}
      style={{ display: props.openModal ? "block" : "none" }}
    >
      <div class="modal">
        <div
          class="modalContent"
          onClick={(e): void => {
            // stop click event to go to modalBackground and trigger its click event
            e.stopPropagation();
          }}
        >
          <DebounceInput
            debounceTimeout={0}
            placeholder={"輸入攤位名稱"}
            onChange={(event: any) => {
              props.onSearchContentChange(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
