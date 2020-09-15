import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

function useDummyPlaceholders({ ready = false, children = null, count = 6 }) {
  const [state, setState] = useState<any[]>([]);
  useEffect(() => {
    const elements: any[] = [];
    for (let x = 0; x < count; ++x) {
      elements[x] = (
        <ReactPlaceholder
          data-testid="placeholder"
          type="media"
          showLoadingAnimation
          ready={ready}
          key={x}
        >
          {children}
        </ReactPlaceholder>
      );
    }
    setState(elements);
  }, [ready, children, count]);
  return state;
}

export default useDummyPlaceholders;
