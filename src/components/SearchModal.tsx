import { JSX } from "preact";
import "./SearchModal.css";

type SearchModalProps = {
  openModal: boolean;
  onModalClose: () => void;
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
        ></div>
      </div>
    </div>
  );
}
