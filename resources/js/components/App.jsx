import React from 'react';

export const App = () => {
  return (
    <div>
      <h1>hello world react</h1>
      <Gri />
    </div>
  );
};

import GridLayout from 'react-grid-layout';
const Gri = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={10}
      rowHeight={30}
      width={1200}
    >
      <div style={{ background: 'red' }} key="a">
        a
      </div>
      <div style={{ background: 'blue' }} key="b">
        b
      </div>
      <div key="c">c</div>
    </GridLayout>
  );
};
