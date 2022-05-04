import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const fireAlloy = (pathname) => {
  let interval = setInterval(function() {
    if(window.alloy) {
      window.alloy("sendEvent", {
        "renderDecisions": true,
        "xdm": {
          "web": {
            "webPageDetails": {
              "viewName": pathname
            }
          }
        }
      });
      clearInterval(interval);
    }
  }, 50);
  setTimeout(function() {
    clearInterval(interval);
  }, 5000);
}

export default function FireViewName() {
  const history = useHistory();
  useEffect(() => {
    fireAlloy(history.location.pathname);
    return history.listen((location) => {
      fireAlloy(location.pathname);
    });
  }, [history]);

  return null;
}