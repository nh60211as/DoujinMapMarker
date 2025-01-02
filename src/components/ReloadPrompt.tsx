import "./ReloadPrompt.css";

import { useRegisterSW } from "virtual:pwa-register/preact";

// https://vite-pwa-org.netlify.app/frameworks/preact
function ReloadPrompt() {
  const {
    offlineReady: [offlineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  return (
    <div className="ReloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-toast-message">
            {offlineReady ? (
              <span>網頁進入離線模式</span>
            ) : (
              <span>偵測到新版本，點擊重新整理</span>
            )}
          </div>
          {needRefresh && (
            <button onClick={() => updateServiceWorker(true)}>重新整理</button>
          )}
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;
